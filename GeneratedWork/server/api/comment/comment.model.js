'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  author: String,
  body: String,
  creationDate: Date,
  validated: Boolean
});

module.exports = mongoose.model('Comment', CommentSchema);