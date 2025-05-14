import { NextFunction, Request, Response } from "express";
import redis from "../config/redis.config";

const MAX_TOKENS = 5;
const REFILL_INTERVAL_SECONDS = 60; // Refill 5 tokens every 60 seconds
const REFILL_RATE_PER_SECOND = MAX_TOKENS / REFILL_INTERVAL_SECONDS; // ~0.083 tokens per second

/**
 * Token Bucket Rate Limiter Middleware
 * - Limits each IP to 5 requests per minute
 * - Uses Redis for distributed state management
 */
export const rateLimitByIp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ip = req.ip;
  const key = `ip:${ip}`;
  const now = Math.floor(Date.now() / 1000);

  try {
    const result = await redis.hmget(key, "tokens", "timestamp");

    const tokensStr = result?.tokens as string | undefined;
    const timestampStr = result?.timestamp as string | undefined;

    const lastTimestamp = timestampStr ? parseInt(timestampStr) : now;
    let tokens = tokensStr ? parseFloat(tokensStr) : MAX_TOKENS;

    const elapsed = now - lastTimestamp;
    tokens = Math.min(MAX_TOKENS, tokens + elapsed * REFILL_RATE_PER_SECOND);

    console.log(
      `[RateLimit] IP: ${ip}, Tokens: ${tokens.toFixed(
        2
      )}, Elapsed: ${elapsed}s`
    );

    if (Math.floor(tokens) < 1) {
      console.warn(
        `[RateLimit] BLOCKED - IP: ${ip}, Tokens: ${tokens.toFixed(2)}`
      );
      res.status(429).send("Rate limit exceeded for IP");
      return;
    }

    const updatedTokens = tokens - 1;

    // ✅ Use `hset` instead of `hmset`
    await redis.hset(key, {
      tokens: updatedTokens.toFixed(6),
      timestamp: now.toString(),
    });

    // Set expiry so unused keys don't persist forever
    await redis.expire(key, 120);

    console.log(
      `[RateLimit] ALLOWED - IP: ${ip}, Tokens Remaining: ${updatedTokens.toFixed(
        2
      )}`
    );
    next();
  } catch (err) {
    console.error(`[RateLimit] Redis Error:`, err);
    res.status(500).send("Internal Server Error");
  }
};
