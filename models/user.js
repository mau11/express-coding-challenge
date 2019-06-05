const db = require('../db');

const User = db.sequelize.define('user', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  role: {
    type: db.Sequelize.ENUM('student', 'academic', 'administrator'),
    allowNull: false
  },
  password: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
});

module.exports = User;