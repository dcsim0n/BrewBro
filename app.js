/**
|--------------------------------------------------
| Brew Bro App.js Dana Simmons
|--------------------------------------------------
*/

const express = require('express');

const app = express();

app.set('view engine','pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( path.join( rootDir, 'public' ))); 

app.use(( req, res, next ) => {
  res.status(404).sendFile(path.join( rootDir, 'views', '404.html'))
});

app.listen('3000');