const express = require("express");
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require("passport");
const path = require('path');
// const timeout = require('connect-timeout')
const app = express();

const users = require('./routes/api/users');
const recipes = require('./routes/api/recipes');
const fridge = require('./routes/api/fridge');
const carts = require('./routes/api/carts');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(passport.initialize());
require('./config/passport')(passport);

app.all('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "x-rapidapi-key");
  next()
});
// app.use(timeout('10s'));

app.use('/api/users', users);
app.use('/api/recipes', recipes);
app.use('/api/fridge', fridge);
app.use("/api/carts", carts);
    
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}