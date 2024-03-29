/*
 * Brew Bros app.js
 * Dana Simmons 2019
*/
require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
// var { getDb, connect } = require('./util/database');

/* Import routers */
// //var usersRouter = require('./routes/users');
var browseRouter = require('./routes/browse');
var usersRouter = require('./routes/users');
var usersController = require('./controllers/usersController');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/* support http method overrides via _method input fields */
app.use(methodOverride( function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

/* Routers go here */
app.use('/', usersController.defaultUser );
app.use('/users', usersRouter )
app.use('/', browseRouter );
// app.use('/', indexRouter );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


mongoose.connect(process.env.DB)
  .then(( result ) =>{
    app.listen(3000);
  });