const express = require("express");
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require("passport");
const path = require('path');
const app = express();




const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));