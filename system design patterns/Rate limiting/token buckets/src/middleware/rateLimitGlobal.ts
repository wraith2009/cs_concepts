import { Request, Response, NextFunction } from "express";
import redis from "../config/redis.config";

const MAX_TOKENS = 10;
const REFILL_RATE = MAX_TOKENS / 60;

/**
 * Global Token Bucket Rate Limiter
 * - Refills 10 tokens every 60 seconds (~0.1667/sec)
 */
export const rateLimitGlobal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const key = "global:bucket";
  const now = Math.floor(Date.now() / 1000);

  try {
    const result = await redis.hmget(key, "tokens", "timestamp");

    const tokensStr = result?.tokens as string | undefined;
    const timestampStr = result?.timestamp as string | undefined;

    const lastTimestamp = timestampStr ? parseInt(timestampStr) : now;
    let tokens = tokensStr ? parseFloat(tokensStr) : MAX_TOKENS;

    const elapsed = now - lastTimestamp;
    tokens = Math.min(MAX_TOKENS, tokens + elapsed * REFILL_RATE);

    console.log(
      `[GlobalRateLimit] Tokens: ${tokens.toFixed(2)}, Elapsed: ${elapsed}s`
    );

    if (Math.floor(tokens) < 1) {
      console.warn(`[GlobalRateLimit] BLOCKED - Tokens: ${tokens.toFixed(2)}`);
      res.status(429).send("Global rate limit exceeded");
      return;
    }

    const updatedTokens = tokens - 1;

    await redis.hset(key, {
      tokens: updatedTokens.toFixed(6),
      timestamp: now.toString(),
    });

    await redis.expire(key, 120);

    console.log(
      `[GlobalRateLimit] ALLOWED - Tokens Remaining: ${updatedTokens.toFixed(
        2
      )}`
    );
    next();
  } catch (err) {
    console.error(`[GlobalRateLimit] Redis error:`, err);
    res.status(500).send("Internal server error");
  }
};
