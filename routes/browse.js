/* 
 * View Breweries by state router
 * Dana Simmons 2019
*/

const express = require('express');
const router = express.Router();
const Brewery = require('../models/brewery');
const State = require('../models/state');


router.get('/browse/state/:name', function(req, res, next) {
  
  const state = req.params.name;
  Brewery.find({ state })
  .then(( brews ) =>{
    res.render('states',{
      title: `Breweries for: ${ state }`,
      brews,
      user: req.user
    });
  });
});

router.get('/', function(req, res, next) {
  State.find()
    .then( states =>{
      res.render('index', { 
      title: 'Brew Bro', 
      states,
      user: req.user
      });

  })
});
module.exports = router;

