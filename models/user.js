const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: false
  },
  weight: {
    type: Number,
    required: false
  },
  weeklyTarget: {
    type: Number,
    enum: [0,-1.0,-0.75,-0.5,-0.25,0.25,0.5,0.75,1.0],
    default: 0,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  gender: {
    type: String,
    enum: ['M', 'F', 'O'],
    default: 'F',
    required: false
  },
  activityLevel: {
    type: Number,
    enum: [1,2,3,4],
    default: 1,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);