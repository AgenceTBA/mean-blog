'use strict';


module.exports = function(app, passport) {

//API
	app.use('/api/users', require('./api/user'));
	app.use('/api/comments', require('./api/comment'));
	app.use('/api/articles', require('./api/article'));

//LOGIN
	app.post('/login', passport.authenticate('local-login',{
		successRedirect : '/loginSuccess', // redirect to the secure profile section
		failureRedirect : '/loginFailure' // redirect back to the signup page if there is an error
	}));
	app.get('/loginFailure', function(req, res, next) {
		res.send('/login');
	});
	app.get('/loginSuccess', function(req, res, next) {
		res.send('/home');
	});
//INSCRIPTION
    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/signupSuccess', // redirect to the secure profile section
        failureRedirect : '/signupFailure', // redirect back to the signup page if there is an error
    }));
	app.get('/signupFailure', function(req, res, next) {
		res.send('/signup');
	});
	app.get('/signupSuccess', function(req, res, next) {
		res.send('/login');
	});

	
	// route middleware to make sure a user is logged in
	function isLoggedIn(req, res, next) {

	    // if user is authenticated in the session, carry on 
	    if (req.isAuthenticated())
	        return next();

	    // if they aren't redirect them to the home page
	    res.redirect('/');
	}
};
