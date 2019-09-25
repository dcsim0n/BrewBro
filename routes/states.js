/* 
 * View Breweries by state router
 * Dana Simmons 2019
*/

const express = require('express');
const request = require('request');
const api = require('../api_routes');
const states = require('../states.json');
const router = express.Router();

router.get('/:name', function(req, res, next) {
  
  const state = req.params.name;
  request.get(api.by_state( state ), ( err, api_resp, body ) => {
    data = JSON.parse(body);
    res.render('states', { 
      title: `Breweries for: ${states[state].name}`, 
      brews: data,
      user: req.user
    });
  });
});

module.exports = router;

