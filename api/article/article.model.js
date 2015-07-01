var mongoose   = require('mongoose');

var Schema = mongoose.Schema;
var ArticleDetail = new Schema({
    titre               : String,
    contenu             : String,
    date_creation       : Date,
    date_modification   : Date,
    nom                 : String,
    commentaire		: {
    	ref: "Comment",
   		type: mongoose.Schema.Types.ObjectId
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Article', ArticleDetail);

