import Redis from 'ioredis';

// Use a global to prevent reconnects during Next.js Hot Module Replacement in dev
const globalForRedis = global as unknown as {
  redisClient: Redis | undefined;
  redisSubscriber: Redis | undefined;
};

// Try to use the Oauth2 Redis URL if available, otherwise just default localhost
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

export const redisClient =
  globalForRedis.redisClient || new Redis(REDIS_URL, { lazyConnect: true });

export const redisSubscriber =
  globalForRedis.redisSubscriber || new Redis(REDIS_URL, { lazyConnect: true });

if (process.env.NODE_ENV !== 'production') {
  globalForRedis.redisClient = redisClient;
  globalForRedis.redisSubscriber = redisSubscriber;
}

// Connect if not already connected
redisClient.status === 'wait' && redisClient.connect().catch(() => console.warn('Redis pub not available.'));
redisSubscriber.status === 'wait' && redisSubscriber.connect().catch(() => console.warn('Redis sub not available.'));
