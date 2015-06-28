'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', function($http, $scope, $location) {
	$scope.user = {}

	$scope.login = function () {
		$http({
		    method: 'POST',
		    url: '/login',
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		    transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    data: {email: $scope.user.email, password: $scope.user.password}
		}).success(function (data) {
			$http.get('/api/users', {
				params: {
					email: $scope.user.email,
					password: $scope.user.password,
					one: true
				}
			})
			.success(function (data,status) {
				console.log(data)
			});
		});
	}
});