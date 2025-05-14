import redis from "../config/redis.config";

export const checkRedis = async () => {
  try {
    await redis.set("ping", "pong");
    const result = await redis.get("ping");
    return result === "pong"
      ? "Redis is working ✅"
      : "Redis is not working ❌";
  } catch (error) {
    return (
      "Redis error: " + (error instanceof Error ? error.message : String(error))
    );
  }
};

(async () => {
  const result = await checkRedis();
  console.log(result);
})();
