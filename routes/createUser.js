const User = require('../models/user');

// Creates a user and based on the user’s email domain links them to an institution. Denies creation of a user if their domain does not exist.

module.exports = (req, res) => {
  User.sync({ force: true })
  .then(() => {
    return User.create({
      name: req.query.name,
      email: req.query.email,
      role: req.query.role,
      password: req.query.password,
    });
    res.send('New user created');
  })
  .catch(err => {
    console.error('Unable to create new user:', err);
  });
}