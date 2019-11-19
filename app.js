const express = require("express");
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require("passport");
const path = require('path');
const app = express();

const users = require("./routes/api/users");
const recipes = require('./routes/api/recipes')

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);


app.get("/", (req, res) => res.send("Test Hello World"));

// app.get("/", (req, res) => {
//   console.log("xd");
//   const user = new User({
//     name: "justin",
//     email: "justin@gmail.com",
//     password: "password"
//   })
//   user.save();
//   res.send("user created!");
// })


app.use("/api/users", users);
app.use("/api/recipes", recipes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}