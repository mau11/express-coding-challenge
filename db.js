const Sequelize = require('sequelize');

const sequelize = new Sequelize('', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Create a new db named 'users'
const dbName = 'users';
sequelize.query('CREATE DATABASE IF NOT EXISTS ' + dbName + ';');

// Connect to db
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });