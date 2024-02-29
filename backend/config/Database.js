import { Sequelize } from 'sequelize';

const db = new Sequelize('asima01', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log, // Add this line for logging
});

export default db;
