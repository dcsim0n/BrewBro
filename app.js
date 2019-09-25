/*
 * Brew Bros app.js
 * Dana Simmons 2019
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sequelize = require('./util/database');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var statesRouter = require('./routes/states');
var usersRouter = require('./routes/users');
var favoritesRouter = require('./routes/favorites');

var usersController = require('./controllers/usersController');
var User = require('./models/user');
var Favorite = require('./models/favorite');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersController.defaultUser );
app.use('/users', usersRouter )
app.use('/users', favoritesRouter )
app.use('/state', statesRouter );
app.use('/', indexRouter );
//app.use('/users', usersRouter);

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


//Associations
User.hasMany(Favorite);
Favorite.belongsTo(User);

sequelize.sync({ force: true })
// sequelize.sync()
.then( err => {
  app.listen( 3000 );
});
