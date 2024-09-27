
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

const mongoose = require('mongoose');
const globalConfig = require('./constants/config');
const studentsRoute = require('./routes/v1/students.route');
const responseHandlers = require('./helpers/responseHandler');

const PORT = globalConfig.PORT

mongoose
  .connect(globalConfig.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    //should listen app here
    console.log(`Example app listening on port http://localhost:${PORT}`)
  })
  .catch((err) => {
    console.error('Failed to Connect to MongoDB', err);
  });

app.use('/api/v1/students', studentsRoute)

// Lỗi 404, những routes không tồn tại
app.use((req, res, next)=>{
  // Next chuyển tiếp
  next(createError(404));
})

// Báo lỗi dạng json
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const statusCode = err.status || 500;
  // res.status(statusCode).json({ statusCode: statusCode, message: err.message });
  responseHandlers.sendJsonErrors(res, err)
});

module.exports = app;
