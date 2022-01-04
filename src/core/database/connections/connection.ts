import { Connection, createConnection } from 'typeorm';

export class DatabaseConnection {
    private static _connection: Connection;

    static getConnection() {
        if(!this._connection) {
            throw new Error("Connection not openned.")
        }

        return this._connection;
    }

    static async initConnection() {
        !this._connection 
            ? this._connection = await createConnection() 
            : console.log("Conexão já estabelecida");
    }
}
