require('dotenv/config');

module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [
        'src/database/entities/**/*.ts'
    ],
    migrations:[
        'src/database/migrations/**/*.ts'
    ],
    cli: {
        entitiesDir: 'src/database/entities',
        migrationsDir: 'src/database/migrations'
    },
    synchronize: false,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
};
