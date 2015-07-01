'use strict';


module.exports = function(app, passport) {

	function isLoggedIn(req, res, next) {
	    if (req.isAuthenticated())
	        return next();
	    res.statusCode = 401;
	    res.send('/#/login');
	}

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
		res.send(res.req.user);
	});

//INSCRIPTION
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

//PAGE PRIVE
	app.get('/profil', isLoggedIn, function (req, res) {
		res.send('/#/profil');
	})
};
