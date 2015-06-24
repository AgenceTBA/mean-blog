'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', function($scope, $http, $location) {
	$scope.register = function () {
		$http({
		    method: 'POST',
		    url: '/signup',
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		    transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    data: {email: $scope.userRegister.email, password: $scope.userRegister.password, nom: $scope.userRegister.nom, prenom: $scope.userRegister.prenom}
		}).success(function (data) {
			$location.path(data)
		});
	}

});