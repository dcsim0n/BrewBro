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
var indexRouter = require('./routes/index');
// //var usersRouter = require('./routes/users');
var statesRouter = require('./routes/states');
// var usersRouter = require('./routes/users');
// var favoritesRouter = require('./routes/favorites');
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
// app.use('/users', usersRouter )
// app.use('/users', favoritesRouter )
app.use('/state', statesRouter );
app.use('/', indexRouter );

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


// //Associations
// User.hasMany(Favorite);
// Favorite.belongsTo(User);

mongoose.connect('mongodb+srv://dana:5B97WFM0ilmcXWXCNDi3@portfolio-cluster-aotog.azure.mongodb.net/brews?retryWrites=true&w=majority')
  .then(( result ) =>{
    app.listen(3000);
  });