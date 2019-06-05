const Sequelize = require('sequelize');

// Create a new db
const dbName = process.env.DB_NAME || 'users';
const dbUser = process.env.DB_User || 'root';
const dbPassword = process.env.DB_PASSWORD || '';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.query(`CREATE DATABASE IF NOT EXISTS ${dbName} ;`);

// Connect to db
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize,
}