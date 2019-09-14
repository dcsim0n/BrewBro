/* 
 * View Breweries by state router
 * Dana Simmons 2019
*/

const express = require('express');
const router = express.Router();


router.post('/states', function(req, res, next) {
  
  const state = req.body.state;
  
  res.render('states', { title: 'Brew Bro: Search by State' });
});

module.exports = router;

