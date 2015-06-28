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
var bcrypt   = require('bcrypt-nodejs');

// Get list of things
exports.index = function(req, res) {
	if (req.params.one) {
	    User.find(function (err, result) {
	      return res.json(200, result);
	    });		
	} else {

		console.log("bcrypt.hashSync(req.params.password, bcrypt.genSaltSync(8), null)")
		console.log(bcrypt.hashSync(req.params.password, bcrypt.genSaltSync(8), null))
		console.log("bcrypt.hashSync(req.params.password, bcrypt.genSaltSync(8), null)")
	  User.find({"local" : { "password" : bcrypt.hashSync(req.params.password, bcrypt.genSaltSync(8), null), "email" : req.params.email }}, function (err, result) {
	      return res.json(200, result);
	  });	
	}

};
// Get a single user
exports.show = function(req, res) {
  User.findById(req.params.id, function (err, user) {
    if(err) { return handleError(res, err); }
    if(!user) { return res.send(404); }
    return res.json(user);
  });
};

