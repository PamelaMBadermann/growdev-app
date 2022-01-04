require('dotenv/config');

module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [
        process.env.ENTITIES_DIR
    ],
    migrations:[
        process.env.MIGRATIONS_DIR
    ],
    cli: {
        entitiesDir: 'src/core/database/entities',
        migrationsDir: 'src/core/database/migrations'
    },
    synchronize: false,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
};
