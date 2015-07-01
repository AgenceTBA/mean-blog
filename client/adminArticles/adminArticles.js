'use strict';

angular.module('myApp.adminArticles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/adminArticles', {
    templateUrl: 'adminArticles/adminArticles.html',
    controller: 'adminArticlesCtrl'
  });
}])


.controller('adminArticlesCtrl', function($scope, $http) {
	$scope.article = {}
	$scope.listArticle = [];
	$scope.article.booleanButton = false;

	$scope.getAllArticle = function () {
		$http.get('/api/articles').success(function(data, status, headers, config) {    
	      try { 
	      	  $scope.listArticle = data;
	        }
	      catch (e) {console.log(e)}
	    })
	}
	$scope.delArticle = function (id) {
		$http.delete('/api/articles/' + id).success(function(data, status, headers, config) {    
	      try { 
	      	 	return;	
	        }
	      catch (e) {console.log(e)}
	    })
	}
	//LE CLIQUE SUR MODIFICATION D ARTICLE APPELLE CETTE FONCTION
	//ELLE CHARGE L ARTICLE A MODIFIER DANS LE FORMULAIRE
	$scope.modifArticle = function (id) {
		$http.get('/api/articles' + id).success(function(data, status, headers, config) {    
	      try { 
	      	  $scope.article = data;
	      	  $scope.article.booleanButton = true
	      	  return;
	        }
	      catch (e) {console.log(e)}
	    })
	}
	//LE CLIQUE SUR UPDATE D ARTICLE APPELLE CETTE FONCTION
	//ELLE CHARGE L ARTICLE A MODIFIER DANS LE FORMULAIRE
	$scope.updateArticle = function (id) {
		$http.put('/api/articles/' + id).success(function(data, status, headers, config) {    
	      try { 
	      	  	$scope.article.booleanButton = false;
	      	 	return;
	        }
	      catch (e) {console.log(e)}
	    })
	}
	$scope.addArticle = function () {
		$http({
		    method: 'POST',
		    url: '/api/articles',
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		    transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    data: {
		    	titre: $scope.article.titre,
		    	contenu: $scope.article.contenu,
		    	date_creation: new Date(),
		    	nom: "admin", //remplacer par la variable user
		    	commentaire: []
		    }
		}).success(function (data) {
			console.log(data)
		});
	}



})