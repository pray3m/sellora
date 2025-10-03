import Redis from "ioredis";

// const redis = new Redis({
//   host: process.env.REDIS_HOST || "127.0.0.1",
//   port: Number(process.env.REDIS_PORT) || 6379,
//   password: process.env.REDIS_PASSWORD,
// });

// using upstash
const redis = new Redis(process.env.REDIS_URL!);

export default redis;
