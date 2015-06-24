'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  creationDate: Date,
  body: String,
  commentaires: [Schema.Comment]
});

module.exports = mongoose.model('Article', ArticleSchema);