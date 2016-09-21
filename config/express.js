(function() {
  'use strict';

  var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    methodOverride = require('methodOverride'),
    routes = require('./../server/routes/index'),
    router = express.Router();

    // load up all routes in the Routes.js file
    routes(router);

    // use HTTP verbs like PUT or DELETE in places where the it's not supported
    app.use(methodOverride());

     // use morgan to log requests to the console
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));

     // use morgan to log requests to the console
    app.use(morgan('dev'));

    app.use('/api', router);

    app.get('/', function(req, res) {
      res.status(200).json({
        message: 'You have reached the DMS-API'
      });
    });

    module.exports = app;

})();