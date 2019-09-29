/*
| State model
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    keyName: { type: String },
    valueName: { type: String }
})

module.exports = mongoose.model('State', stateSchema);