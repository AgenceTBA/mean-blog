'use strict';

angular.module('myApp.article', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/article/:id', {
    templateUrl: 'article/article.html',
    controller: 'ArticleCtrl'
  });
}])

.controller('ArticleCtrl', function(Article, $http, $routeParams, $scope) {
    Article.get({id:$routeParams.id}, function (data) {
      $scope.article = data;
      console.log(data);
    });
})