var express = require('express');
var app = express();
var passport = require('passport')
var compression = require('compression')
var port = 9000;

require('./routes')(app);

//require('./routes')(app, passport);
//require('./config/passport')(passport); // pass passport for configuration

// New call to compress content
app.use(compression())
app.use(express.static(__dirname + '/client'));
app.listen(port);
console.log("Server Started");

/*
// process the signup form
app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));
*/
//exports = module.exports = app;