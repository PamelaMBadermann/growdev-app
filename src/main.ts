import { DatabaseConnection } from "./core/infra/database/connections/connection";
import "reflect-metadata";
import { initServer } from "./core/presentation/server";
require("dotenv/config");
import { RedisConnection } from "./core/infra/database/connections/redis";

DatabaseConnection.initConnection()
    .then(() => {
        RedisConnection.initConnection();
        initServer();
    })
    .catch((error) => {
        console.log(error);
    });
