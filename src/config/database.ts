import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('rental_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', // or 'postgres', 'sqlite', 'mssql'
    logging: false, // Set to true to see SQL queries in the console
});

export default sequelize;