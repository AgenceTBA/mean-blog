var mongoose   = require('mongoose');

var Schema = mongoose.Schema;
var CommentDetail = new Schema({
    contenu             : String,
    date_creation       : Date,
    isOk				: { type: Number, default: 0 },
    user         : {
    	ref: "User",
   		type: mongoose.Schema.Types.ObjectId
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Comment', CommentDetail);

