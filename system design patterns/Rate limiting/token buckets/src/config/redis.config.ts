/**
 * @fileoverview Redis connection utility for caching and session management.
 * @module redis-connection
 *
 * @author RahulBhardwaj
 */

import { Redis } from "@upstash/redis";
import dotenv from "dotenv";
dotenv.config();

/**
 * Creates a new Redis client instance
 * @function redisClientSingleton
 * @returns {Redis} A new Redis client instance
 */
const redisClientSingleton = () => {
  return new Redis({
    url: process.env.UPSTASH_REDIS_URL!,
    token: process.env.UPSTASH_REDIS_TOKEN!,
  });
};

type RedisClientSingleton = ReturnType<typeof redisClientSingleton>;

/**
 * Global object to prevent multiple Redis instances
 * @type {Object}
 * @property {RedisClientSingleton|undefined} redis - The Redis client instance
 */
const globalForRedis = globalThis as unknown as {
  redis: RedisClientSingleton | undefined;
};

const redis = globalForRedis.redis ?? redisClientSingleton();

/**
 * Export the Redis client as the default export
 * @exports redis
 */
export default redis;

if (process.env.NODE_ENV !== "production") globalForRedis.redis = redis;
