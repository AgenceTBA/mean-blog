'use strict';

angular.module('myApp.article', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/article/:id', {
    templateUrl: 'article/article.html',
    controller: 'ArticleCtrl'
  });
}])

.controller('ArticleCtrl', function(Article) {
    $http.get('/api/users').success(function(data, status, headers, config) {    
      try { 
      	  console.log(data)
          return cb()
        }
      catch (e) {console.log(e)}
    })
})