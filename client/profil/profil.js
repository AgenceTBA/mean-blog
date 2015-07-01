'use strict';

angular.module('myApp.profil', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profil', {
    templateUrl: 'profil/profil.html',
    controller: 'ProfilCtrl'
  });
}])

.controller('ProfilCtrl', function($scope, $localStorage) {
	$scope.user = $localStorage.user
	$scope.updateUser = function (id) {
	    $http({
		    method: 'PUT',
		    url: '/api/users/' + id,
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		    transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    data: {
		    	nom: $scope.user.nom,
		    	prenom: $scope.user.prenom,
		    	email: $scope.user.email,
		    	password: $scope.user.newPassword,
		    	isAdmin: $scope.user.isAdmin
		    }

		}).success(function (data) {

		});
	}
});