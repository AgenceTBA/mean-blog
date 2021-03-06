/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';
/*
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tbaBlog'); // connect to our database
*/
var Article = require('./article.model');
var _ = require('lodash')
// Get list of things
exports.index = function(req, res) {
    Article.find(function (err, result) {
      return res.json(200, result);
    });
};

// Get a single article
exports.show = function(req, res) {
  Article.findById(req.params.id, function (err, article) {
    if(err) { return handleError(res, err); }
    if(!article) { return res.send(404); }
    return res.json(article.populate('commentaire'));
  });
};

// Creates a new article in the DB.
exports.create = function(req, res) {
  req.body.date_creation = new Date();
  req.body.date_modification = new Date();
  req.body.commentaire = new Array()
  Article.create(req.body, function(err, article) {
    if(err) { console.log(err) }
    return res.json(201, article);
  });
};

// Updates an existing article in the DB.
exports.update = function(req, res) {
  req.body.date_modification = new Date();
  if(req.body._id) { delete req.body._id; }
  Article.findById(req.params.id, function (err, article) {
    if (err) {     console.log(err) }
    if(!article) { return res.send(404); }
    if (req.body.commentaire) {
      article.commentaire.push(req.body.commentaire)
            article.save(function (err) {
        if (err) { return handleError(res, err); }
        return res.json(200, article);
      });  
    } else {
      var updated = _.merge(article, req.body);
      updated.save(function (err) {
        if (err) { return handleError(res, err); }
        return res.json(200, article);
      });      
    }
  });
};

// Deletes a article from the DB.
exports.destroy = function(req, res) {
  Article.findById(req.params.id, function (err, article) {
    if(err) { return handleError(res, err); }
    if(!article) { return res.send(404); }
    article.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

