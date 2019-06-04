const Sequelize = require('sequelize');
const db = require('../db');

const Institution = db.define('institution', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  domain: {
    type: Sequelize.STRING,
    allowNull: false
  },
});