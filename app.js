var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var d3t1 = require('./routes/d3t1');
var d3t2 = require('./routes/d3t2');

var ang1 = require('./routes/ang1');
var ang2 = require('./routes/ang2');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.use('/d3t1', d3t1);
app.use('/d3t2', d3t2);

app.use('/ang0', function(req,res){
    res.render('ang0');
});
app.use('/ang1', ang1);
app.use('/ang2', ang2);
app.use('/ember', function(req,res){
    res.render('ember');
});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

var request = require('request');
var url = 'http://google.com'; // input your url here
var timeoutInMilliseconds = 10*1000; // timeout 10 sec
var opts = {
    url: url,
    timeout: timeoutInMilliseconds
};
request(opts, function (err, res, body) {
    if (err) {
        console.dir(err);
        return;
    }
    var statusCode = res.statusCode;
    console.log('Requesting google', statusCode, body, '\ngot it!');
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
