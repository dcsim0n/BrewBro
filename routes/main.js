/**
| Brew Bro main.js route
| Dana Simmons 2019
*/

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.get( '/', ( req, res, next) => {
  
  //res.render('main', { path:'/' });
  res.write("<h1>Welcome Home!</h1>");
  res.end();
}) 

module.exports=router;
