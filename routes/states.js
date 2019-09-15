/* 
 * View Breweries by state router
 * Dana Simmons 2019
*/

const express = require('express');
const request = require('request');
const api = require('../api_routes');

const router = express.Router();

router.get('/state/:name', function(req, res, next) {
  
  const state = req.params.name;
  request.get(api.by_state( state ), ( err, api_resp, body ) => {
    data = JSON.parse(body);
    res.render('states', { title: 'Brew Bro: Search by State' , brews: data });
  });
});

module.exports = router;

