'use strict';

angular.module('myApp.home', ['ngRoute','ngCookies'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, Article, $cookieStore, $localStorage, $http, $location) {

	$scope.storage = $localStorage;

    $scope.articles = [];
    Article.query({}, function (data) {
      $scope.articles = data;
      console.log(data)
    });

    $scope.logout = function(){
    	delete($localStorage.user);
  		$scope.storage.isAdmin = false;
  		$scope.storage.isLogged = false;
  		$location.path('#/home');
    	$http({
		    method: 'GET',
		    url: 'api/users/logout',
		}).success(function (data) {
			console.log(data);
		});
    }

});