/**
|--------------------------------------------------
| Favorite data module
|--------------------------------------------------
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  breweryId: { type: Number, required: true },
  name: { type: String, required: true }
})

module.exports = mongoose.model('Favorite',favoriteSchema);