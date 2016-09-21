(function () {
  'use strict';

  var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var typeSchema = new Schema({
      type : {
        type: String,
        required: true,
        unique: true,
        default: 'General',
        enum: ['Work', 'Business', 'Personal', 'Education', 'General']
      }
    });

    var Type = mongoose.model('Type', typeSchema);
    module.exports = Type;
})();