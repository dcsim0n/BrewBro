/**
|--------------------------------------------------
| Brew Bro App.js Dana Simmons
|--------------------------------------------------
*/

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');

const mainRoute = require('./routes/main');

const app = express();

app.set('view engine','pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( path.join( rootDir, 'public' ))); 

app.use((req, res, next) =>{

  console.log(req.method + " Request for: " + req.url);
  next();
});

app.use( mainRoute );


app.use(( req, res, next ) => {
  console.log("Page not found...");
  res.status(404).sendFile(path.join( rootDir, 'views', '404.html'))

});


app.listen('3000');
