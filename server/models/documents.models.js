(function() {
  'use strict';

  var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

    var documentSchema = new Schema({
      userId: {
        type: ObjectId,
        required:true
      },
      title: {
        type: String,
        required: true,
        unique: true
      },
      content: {
        type: String,
        required: true,
        unique: true
      },
      accessType: {
        type: String,
        default: 'None',
      },
      accessId: {
        type: ObjectId,
        ref: 'Role',
        required: true
      },
      typeId: {
      type: ObjectId,
      ref: 'Type',
      required: true
      },
      dateCreated: {
        type: Date,
        required: true
      },
      lastModified: {
        type: Date,
        required: true
      }
    });

    var Document = mongoose.model('Document', documentSchema);
    module.exports = Document;
})();