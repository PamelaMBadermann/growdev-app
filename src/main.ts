import { DatabaseConnection } from "./core/infra/database/connections/connection";
import "reflect-metadata";
import { initServer } from "./core/presentation/server";

import redis from "ioredis";

DatabaseConnection.initConnection()
    .then(() => {
        initServer();

        // Fixme: organizar a conexão e os repositories do redis
        const connection = new redis();
        connection.hgetall("usuario2").then((result) => {
            console.log(result);
            console.log(result.nome);
        });

        const data = {
            nome: "testando",
            ano: 2022,
        };
        connection.set("testenode", JSON.stringify(data));
    })
    .catch((error) => {
        console.log(error);
    });
