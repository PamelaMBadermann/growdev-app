require('dotenv/config');

module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [
        'src/core/database/entities/**/*.ts'
    ],
    migrations:[
        'src/core/database/migrations/**/*.ts'
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
