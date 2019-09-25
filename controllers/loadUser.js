/**
|--------------------------------------------------
| Load default user
|--------------------------------------------------
*/

const sequelize = require('../util/database');
const User = require('../models/user');

module.exports = function ( req, res, next ){ 
  User.findOrCreate({ where: {id: 1 }, defaults: {name: 'Dana' }})
  .then( user => {
    //console.log("Loaded user", user)
    req.user = user;
    next()
  });

}

