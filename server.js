(function() {
  'use strict';
  const mongoose = require('mongoose');
  const express = require('express');
  const bodyParser = require('body-parser');
  const morgan = require('morgan');
  const methodOverride = require('method-override');
  const config = require('./server/config/environment');
  const connect = require('./server/config/connection');
  const app = express();


  app.use(express.static('public'));

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(methodOverride());

  // connect to database
  connect(mongoose, config.database);


  app.get('/*', function(req, res) {
    res.send({
      message: 'You have reached the DMS-API'
    });
  });
  // Listen to port
  app.listen(config.port, function(err) {
    if (err) {
      throw err;
    };

    console.log('Successfully connected to ' + config.port);
  });


  module.exports = app;

})();
