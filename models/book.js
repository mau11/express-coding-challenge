const Sequelize = require('sequelize');
const db = require('../db');

const Book = db.define('book', {
  isbn: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
});