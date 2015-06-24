var mongoose   = require('mongoose');

var Schema = mongoose.Schema;
var ArticleDetail = new Schema({
    titre               : String,
    contenu             : String,
    date_creation       : Date,
    nom                 : String,
    commentaire		: [Schema.Comment],
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Article', ArticleDetail);

