const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');    
const keys = require('../../config/keys');
const passport = require('passport');
const router = express.Router();

const User = require('../../models/user');
const Fridge = require('../../models/fridge');
const Cart = require('../../models/cart');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route for meal plan" }));

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
        password: req.body.password,
        height: req.body.height,
        weight: req.body.weight,
        age: req.body.age,
        gender: req.body.gender,
        activityLevel: req.body.activityLevel
      });
      
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                height: user.height,
                weight: user.weight,
                age: user.age,
                gender: user.gender,
                activityLevel: user.activityLevel
              };
              
              const newFridge = new Fridge({ userId: user.id });
              newFridge.save();

              let currentDate = Date().toString().slice(0, 15);
              const newCart = new Cart({ 
                userId: user.id,
                dates: {
                  [currentDate]: {
                    "BREAKFAST": undefined,
                    "LUNCH": undefined,
                    "DINNER": undefined
                  }
                },
              });
              console.log(newCart);
              newCart.save();

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
              const payload = { id: user.id, name: user.name, email: user.email, height: user.height, weight: user.weight, age: user.age, gender: user.gender, activityLevel: user.activityLevel };

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


router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        height: user.height,
        weight: user.weight,
        age: user.age,
        gender: user.gender,
        activityLevel: user.activityLevel
      });
    })
    .catch (err =>
      res.status(404).json({ nouserfound: 'No User found with this ID' })
    )
});


module.exports = router;  