/*
 * Brew Bros app.js
 * Dana Simmons 2019
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
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


mongoose.connect('mongodb+srv://dana:5B97WFM0ilmcXWXCNDi3@portfolio-cluster-aotog.azure.mongodb.net/brews?retryWrites=true&w=majority')
  .then(( result ) =>{
    app.listen(3000);
  });