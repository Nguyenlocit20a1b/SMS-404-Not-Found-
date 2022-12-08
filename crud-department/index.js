var createError = require('http-errors');
const express = require('express');
require('dotenv').config()
const path = require('path');
var cookieParser = require('cookie-parser');
let mongoose = require('mongoose');
var logger = require('morgan');

const app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", require('./routes'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  /* ket noi voi database */
  mongoose.connect('mongodb://localhost:27017/student_manager', { useNewUrlParser: true, autoIndex: false });
  var db = mongoose.connection;
  if(!db){
    console.log("database khong ket noi duoc");
  }else{
    console.log("da ket noi voi database");
  }

  
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });


app.listen(process.env.PORT,function(){
    console.log("server is running on port 3000");
  });

module.exports = app;

