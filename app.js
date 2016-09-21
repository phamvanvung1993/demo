var express = require('express')
    , cluster = require('cluster')
    , favicon = require('serve-favicon')
    , logger = require('morgan')
    , bodyParser = require('body-parser')
    , app = express()
    , auth = require('./middlewares/authtoken')
    , apiTest = require('./app-test/app')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/apiTest', apiTest);

app.use(function (req, res, next) {
    res.status(404);
    res.json({
        status: res.statusCode,
        msg: 'Not Found'
    });
});

module.exports = app;
