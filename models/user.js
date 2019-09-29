/**
|--------------------------------------------------
| User model
|--------------------------------------------------
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  favorites: {
    type: Array
  }
})
module.exports = mongoose.model('User', userSchema);