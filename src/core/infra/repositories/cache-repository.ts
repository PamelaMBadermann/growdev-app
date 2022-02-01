import { Redis } from "ioredis";
import { RedisConnection } from "../database/connections/redis";

export class CacheRepository {
    private readonly redis: Redis;

    constructor() {
        this.redis = RedisConnection.getConnection();
    }

    async set(key: string, value: any) {
        const result = await this.redis.set(
            key,
            JSON.stringify(value),
            "EX",
            30
        );

        if (result === null) {
            throw new Error("Set error");
        }
    }

    async hset(globalKey: string, key: string, value: any) {
        const result = await this.redis.hset(
            globalKey,
            key,
            JSON.stringify(value),
            key,
            JSON.stringify(value),
            key,
            JSON.stringify(value)
        );

        if (result === null) {
            throw new Error("Set error");
        }
    }

    async sadd(key: string, set: string) {
        await this.redis.sadd(key, set);
    }

    async get(key: string) {
        const result = await this.redis.get(key);
        return result != null ? JSON.parse(result) : undefined;
    }

    async delete(key: string) {
        await this.redis.del(key);
    }
}
