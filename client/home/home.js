'use strict';

angular.module('myApp.home', ['ngRoute','ngCookies'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, Article, $cookieStore) {
    $scope.articles = [];
    Article.query({}, function (data) {
      $scope.articles = data;
      //console.log(data)
    });

});