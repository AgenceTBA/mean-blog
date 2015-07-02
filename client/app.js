'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'ngCookies',
  'myApp.home',
  'myApp.profil',
  'myApp.login',
  'myApp.register',
  'myApp.article',
  'myApp.service',
  'myApp.adminArticles',
  'myApp.adminProfil',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
