'use strict';

angular.module('myApp.adminArticles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/adminArticles/:id', {
    templateUrl: 'adminArticles/adminArticles.html',
    controller: 'adminArticlesCtrl'
  });
}])

.controller('adminArticles', function() {

})