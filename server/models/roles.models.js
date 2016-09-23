(function() {
  'use strict';

  var mongoose= require('mongoose'),
    Schema = mongoose.Schema;

  var roleSchema = new Schema({
      title: {
        type: String,
        required: true,
        unique: true,
        default: 'Viewer'
      }
    });

    var Role = mongoose.model('Role', roleSchema);
    module.exports = Role;

})();