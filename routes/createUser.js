const User = require('../models/user');
const Institution = require('../models/institution');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Creates a user and based on the user’s email domain links them to an institution. Denies creation of a user if their domain does not exist.

module.exports = (req, res) => {
  // check if email domain exists in Institution db table
  const email = req.query.email;
  const domain = email.replace(/.*@/, '');
  let exists;
  Institution.findOne({ where: {domain: domain} }).then( institution => {
    exists = institution;
  });
  if (exists) {
    // encrypt user's password
    bcrypt.hash(req.query.password, saltRounds, (err, hash) => {
      User.sync({ force: true })
      .then(() => {
        User.create({
          name: req.query.name,
          email: email,
          role: req.query.role,
          password: hash,
        });
        // associate User to institution by adding an institutionId
        User.belongsTo(Institution);
        res.send('New user created');
      })
      .catch(error => {
        console.error('Unable to create new user:', error);
      });
    });
  } else {
    console.log('Unable to create new user, institution does not exist');
  }
};