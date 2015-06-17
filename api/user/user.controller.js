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
var User = require('./user.model');
// Get list of things
exports.index = function(req, res) {
    User.find(function (err, result) {
      return res.json(200, result);
    });
};