import express from 'express';
import cors from 'cors';
import { DatabaseConnection } from './core/database/connections/connection';

const app = express();
app.use(express.json());
app.use(cors());

DatabaseConnection.initConnection()
    .then(() => {
        app.listen(8081, () => console.log("Server is running..."));
    })
    .catch((error) => {
        console.log(error);
    });
