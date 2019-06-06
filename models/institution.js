const db = require('../db');

const Institution = db.sequelize.define('institutions', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  url: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    }
  },
  domain: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
});

module.exports = Institution;