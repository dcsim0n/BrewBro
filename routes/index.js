/*
| Index route
*/

const express = require('express');
const router = express.Router();
const { getDb } = require('../util/database');


/* GET home page. */
router.get('/', function(req, res, next) {
  getDb().collection('states').find().toArray()
  .then( states =>{
    res.render('index', { 
      title: 'Brew Bro', 
      states,
      user: req.user
      });

  })
});

module.exports = router;
