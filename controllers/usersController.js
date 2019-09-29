/**
|--------------------------------------------------
| User Controller
|--------------------------------------------------
*/

const User = require('../models/user');

exports.defaultUser = function ( req, res, next ){ 
  User.findOne({name: 'Dana'})
  .then( user => {
    console.log("Default user", user)
    if(!user){
      return User.create({name: 'Dana', favorites:[]})
    }
    return user;
  })
  .then( user =>{
    req.user = user;
    next();
  })

};

exports.selectUser =  function(req, res, next) {
  console.log("Finding all users")
  User.find()
  .then( users => {

    res.render('select-user', {
      user: req.user,
      title: "Chose user account",
      users
    });
  })
};

exports.createUser = function( req, res, next ) {
  console.log("Creating user", req.body.name)
  User.create({ name: req.body.name, favorites:[] })
  .then( user =>{
    console.log("created user", user)
     res.redirect('/users');    
  });

};

exports.userDetails = function( req, res, next ) {
  let currentUser;
  User.findById( req.params.id)
  .then( user => {
    res.render('user-detail', {
      title: "User Favorites",
      user, 
      favorites: user.favorites
    })
  });
}