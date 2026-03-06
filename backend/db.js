const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL ? process.env.DATABASE_URL.split('?')[0] : '', {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: false
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Aiven PostgreSQL Connected Successfully!');
    } catch (err) {
        console.error('❌ Connection Failed:', err);
    }
};

module.exports = { sequelize, connectDB };