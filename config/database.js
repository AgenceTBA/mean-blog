/**
 * Express configuration
 */

'use strict';

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tbaBlog'); // connect to our database

module.exports = function(app) {

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(cookieParser());

	// required for passport
	app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session

  
};