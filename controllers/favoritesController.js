/**
|--------------------------------------------------
| favorite controller
|--------------------------------------------------
*/
const Favorite = require('../models/favorite');
const User = require('../models/user');

exports.createFavorite = function ( req, resp, next) {
  console.log("Finding user:", req.params)
  User.findByPk(req.params.userId)
  .then( user => {
    console.log("adding favoirte to user: ", user.name)
    return user.createFavorite({ breweryId: req.body.breweryId, name: req.body.name });
  })
  .then( () => {
    resp.redirect('/');
  });

  
};