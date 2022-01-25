require("dotenv/config");
import ioredis, { Redis } from "ioredis";

export class RedisConnection {
    private static _connection: Redis;

    static initConnection() {
        if (!this._connection) {
            this._connection = new ioredis(process.env.REDIS_URL);
        }
    }

    static getConnection() {
        if (!this._connection) {
            throw new Error("Redis not connected");
        }

        return this._connection;
    }
}
