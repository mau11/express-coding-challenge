const User = require('../models/user');
const Institution = require('../models/institution');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Creates a user and based on the user’s email domain links them to an institution. Denies creation of a user if their domain does not exist.

module.exports = (req, res) => {
  /*
    The following commented out code does not work as expected.
    I am trying to use the sequelize, beforeCreate hook to check
    if the Institutions table contains the same domain from the new
    user's email. The value returned remains undefined although I
    manually added a corresponding domain to my MySQL db.
  */

  const email = req.query.email;
  // const domain = email.replace(/.*@/, '');
  // check if email domain exists in Institution db table
  // if the domain is an existing Institution, create the new user
  // User.beforeCreate( record => {
  //   console.log('hi');
  //   return Institution.findOne({ where: {domain: domain} })
  //   .then( (error, response) => {
  //     return Promise.resolve(response ? response.status : -1)
  //     if (!error) {

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
            res.send('New user created');
          });
        });
      }

//     })
//     .catch(error => {
//       console.error('Unable to create new user:', error);
//       return Promise.resolve(-1);
//     });
//   });
// };