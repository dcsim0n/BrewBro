const express = require('express');
const router = express.Router();

const states = require('../states.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Brew Bro', 
    states,
    user: req.user
    });
});

module.exports = router;
