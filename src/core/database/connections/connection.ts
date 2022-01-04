import { Connection, createConnection, getConnection } from 'typeorm';

export class DatabaseConnection {
    private static _connection: Connection;

    static getConnection() {
        let conn = getConnection();

        if(!conn) {
            throw new Error("Database is not connected.");
        }

        return DatabaseConnection._connection;
    }

    static async initConnection() {
        if(!DatabaseConnection._connection) {
            this._connection = await createConnection();
        }
    } 
}
