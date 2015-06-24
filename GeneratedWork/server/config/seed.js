/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Article = require('../api/article/article.model');


User.find({}).remove(function() {
  User.create({
    provider: 'local',
    role: 'admin',
    name: 'TBA',
    email: 'admin@agencetba.fr',
    password: 'tba-etna'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Article.find({}).remove(function() {
  Article.create({
    title: "Article 1",
    creationDate: new Date(),
    body: "Body MAMA !",
    commentaire: null
  },
  {
    title: "Article 2",
    creationDate: new Date(),
    body: "Heyyyyyyyyy Brotheeeeeeer !",
    commentaire: null
  }, function() {
      console.log('finished populating users');
    }
  );
});