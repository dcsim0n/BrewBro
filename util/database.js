/**
|--------------------------------------------------
| mongo db database connection
|--------------------------------------------------
*/

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// const url = 'mongodb+srv://dana:5B97WFM0ilmcXWXCNDi3@portfolio-cluster-aotog.azure.mongodb.net/test?retryWrites=true&w=majority';
// const dbName = 'brews';

// let _db; 

// exports.connect = function( callback ) {
//   MongoClient.connect(url, function( err, client){
//     assert.equal(null, err);
//     console.log("Connected!");

//     _db = client.db(dbName);

//     callback( client );
//     //client.close();
//   });
// }


// exports.getDb = function (){
//   assert.notEqual(undefined,_db);
//   return _db;
// }
