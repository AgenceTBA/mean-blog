'use strict';

angular.module('myApp.adminProfil', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/adminProfil', {
    templateUrl: 'adminProfil/adminProfil.html',
    controller: 'adminProfilCtrl'
  });
}])


.controller('adminProfilCtrl', function($scope, $http, $localStorage, $location) {
	$scope.listUser = []
	$scope.user = {}
	$scope.user.choice = {
		booleanButton: false,
		titre: "Ajouter un user"
	}
	$scope.cleanUser = function (data) {
		var tmp = []
		if (Array.isArray(data)){
			for (var i in data){
				tmp[i] = data[i].local
				tmp[i]._id = data[i]._id
			}			
		} else {
			tmp = data.local
			tmp._id = data._id
		}

		return tmp;
	}
	$scope.getAllUser = function () {
		$http.get('/api/users').success(function(data, status, headers, config) {    
	      try { 
	      		$scope.listUser = $scope.cleanUser(data)
	        }
	      catch (e) {console.log(e)}
	    })
	}
	$scope.delUser = function (id) {
		$http.delete('/api/users/' + id).success(function(data, status, headers, config) {    
	      try { 
	      	 	return;	
	        }
	      catch (e) {console.log(e)}
	    })
	}
	//LE CLIQUE SUR MODIFICATION D ARTICLE APPELLE CETTE FONCTION
	//ELLE CHARGE L ARTICLE A MODIFIER DANS LE FORMULAIRE
	$scope.modifUser = function (id) {
		$location.hash('addArticle');
		$http.get('/api/users/' + id).success(function(data, status, headers, config) {    
	      try { 
			$scope.user = $scope.cleanUser(data);
			$scope.user.choice = {
				booleanButton: true,
				titre: "Modifier un user"
			}
	      	console.log($scope.user )

			return;
	        }
	      catch (e) {console.log(e)}
	    })
	}
	//LE CLIQUE SUR UPDATE D ARTICLE APPELLE CETTE FONCTION
	//ELLE CHARGE L ARTICLE A MODIFIER DANS LE FORMULAIRE
	$scope.updateUser = function (id) {
		console.log($scope.user)
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
			$scope.user.choice = {
				booleanButton: false,
				titre: "Ajouter un user"
			}	
		});
	}
	$scope.getAllUser()
})