'use strict';

angular.module('myApp.adminArticles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/adminArticles', {
    templateUrl: 'adminArticles/adminArticles.html',
    controller: 'adminArticlesCtrl'
  });
}])


.controller('adminArticlesCtrl', function() {

})