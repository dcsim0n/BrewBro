/*
| Script to load data from states.json
| into mongo db database
*/

const { getDb , connect } = require('./database');
const stateData = require('../states.json');
connect(( client )=>{
    data = Object.keys(stateData).map(( key )=>{
        return {keyName: key, valueName: stateData[key].name }
    })
    getDb().collection('states').insertMany(data)
    .then((result)=>{
        client.close();
    })  
});