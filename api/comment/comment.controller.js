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
var Comment = require('./comment.model');

// Get list of things
exports.index = function(req, res) {
    Comment.find(function (err, result) {
      return res.json(200, result);
    });
};
// Get a single article
exports.show = function(req, res) {
  Comment.findById(req.params.id, function (err, comment) {
    if(err) { return handleError(res, err); }
    if(!comment) { return res.send(404); }
    return res.json(comment.populate('commentaire'));
  });
};

exports.create = function(req, res) {
  console.log(req.body)
  Comment.create(req.body, function(err, comment) {
    if(err) { console.log(err) }
    return res.json(201, comment);
  });
};
