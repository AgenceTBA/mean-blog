var mongoose   = require('mongoose');

var Schema = mongoose.Schema;
var CommentDetail = new Schema({
    contenu             : String,
    date_creation       : Date,
    user         : {
    	ref: "User",
   		type: mongoose.Schema.Types.ObjectId
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Comment', CommentDetail);

