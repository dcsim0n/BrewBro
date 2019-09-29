/*
| Index route
*/

const express = require('express');
const router = express.Router();
const State = require('../models/state');

/* GET home page. */
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
