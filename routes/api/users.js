const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');    
const keys = require('../../config/keys');
const passport = require('passport');
const router = express.Router();

const User = require('../../models/user');
const Fridge = require('../../models/fridge');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
});


router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              const payload = { id: user.id, name: user.name, email: user.email };
              
              //
              console.log(user._id);
              console.log(user.id);

              const newFridge = new Fridge({ userId: user.id });
              newFridge.save();

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
          .catch(err => console.log(err));
        });
      });
    }
  });
});


router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  console.log(errors);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
    .then(user => {
      if (!user) {
        return res.status(404).json({email: 'This user does not exist'});
      }

      bcrypt.compare(password, user.password)
      .then(isMatch => {
          if (isMatch) {
              const payload = { id: user.id, name: user.name, email: user.email };

          jwt.sign(
              payload,
              keys.secretOrKey,
              // Tell the key to expire in one hour
              {expiresIn: 3600},
              (err, token) => {
              res.json({
                  success: true,
                  token: 'Bearer ' + token
              });
            });
          } else {
              return res.status(400).json({password: 'Incorrect password'});
          }
      })
    })
});


module.exports = router;  