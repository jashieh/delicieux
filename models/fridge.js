const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FridgeSchema = new Schema({
  userId: {
    type: String,
    required: true,
    index: true
    // type: Schema.Types.ObjectId,
    // ref: 'users'
  },
  ingredients: {
    type: Schema.Types.Mixed, default: {} 
  },
  date: {
    type: Date,
    default: Date.now
  },
}, { minimize: false });


module.exports = Fridge = mongoose.model('fridge', FridgeSchema);

