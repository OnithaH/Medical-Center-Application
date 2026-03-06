require('dotenv').config();

// Extract the URL similar to your db.js logic
const dbUrl = process.env.DATABASE_URL ? process.env.DATABASE_URL.split('?')[0] : '';

module.exports = {
    development: {
        url: dbUrl,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    },
    test: {
        url: dbUrl,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    },
    production: {
        url: dbUrl,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
};