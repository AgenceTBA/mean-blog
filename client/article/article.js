'use strict';

angular.module('myApp.article', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/article/:id', {
    templateUrl: 'article/article.html',
    controller: 'ArticleCtrl'
  });
}])

.controller('ArticleCtrl', function(Article, $http, $routeParams, $scope, $localStorage) {
    $scope.storage = $localStorage;

    Article.get({id:$routeParams.id}, function (data) {
      $scope.article = data;
      console.log(data);
    });

});