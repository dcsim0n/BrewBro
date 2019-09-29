/*
| Script to load data from states.json
| into mongo db database
*/

const mongoose = require('mongoose');
const State = require('../models/state');

const stateData = require('../states.json');
mongoose.connect('mongodb+srv://dana:5B97WFM0ilmcXWXCNDi3@portfolio-cluster-aotog.azure.mongodb.net/brews?retryWrites=true&w=majority')
.then(( result )=>{
    data = Object.keys(stateData).map(( key )=>{
        return {keyName: key, valueName: stateData[key].name }
    })
    State.insertMany(data);
})
