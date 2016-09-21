(function() {
  'use strict';

  var mongoose = require('mongoose'),
    db = require('./config/database'),
    app = require('./config/express'),
    port = process.env.PORT || 9000;


  // Connect to the database
  mongoose.connect(db.url || process.env.DATABASE_URL, function(err) {
    if (err) {
      console.log('Error connecting to the db');
    } else {
      console.log('DB connection successful');
    }
  });

  // Listen to port
  app.listen(port);
  console.log('Successfully connected to ' + port);

  module.exports = app;

})();