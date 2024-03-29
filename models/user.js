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
  favorites: [
    {
      breweryId: { type: Number, required: true },
      name: { type: String, required: true  },
      breweryType: { type: String }
      
    }
  ]
})
module.exports = mongoose.model('User', userSchema);