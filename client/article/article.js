'use strict';

angular.module('myApp.article', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/article/:id', {
    templateUrl: 'article/article.html',
    controller: 'ArticleCtrl'
  });
}])

.controller('ArticleCtrl', function(Article, $http, $routeParams, $scope, $localStorage) {
    $scope.storage = $localStorage;
	$scope.commentaire = {contenu: ""}

	$scope.getComment = function (idCommentaire, cb) {
	    $http.get('/api/comments/' + idCommentaire).success(function(comment, status, headers, config) {
	    	try {
		    	return cb(comment)
	    	} catch (e) {
	    		console.log(e)
	    	}
	    })	
	}
	$scope.getUser = function (idUser, cb) {
		$http.get('/api/users/' + idUser).success(function(user, status, headers, config) {    
			try { 
				return cb (user);
			}
			catch (e) {console.log(e)}
		})
	} 
	$scope.getFullPage = function () {
	    Article.get({id:$routeParams.id}, function (data) {
	      $scope.article = data;
	      $scope.tabCommentaire = [];
	      $scope.article.nbComs = 0;
	      for (var i in $scope.article.commentaire) {
	      	$scope.getComment($scope.article.commentaire[i], function (comment) {
		      	$scope.getUser(comment.user, function (user) {
		      		comment.auteur = user.local.nom + " " + user.local.prenom
		      		$scope.tabCommentaire.push(comment);
		      		if (comment.isOk == 1)
		      			$scope.article.nbComs++;
		      	})
	      	})
	      }
	    });	
	}
	$scope.addComment = function () {
		console.log($localStorage.user)
	    $http({
		    method: 'POST',
		    url: '/api/comments/',
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		    transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    data: {
				contenu: $scope.commentaire.contenu,
				date_creation: new Date(),
				user: $localStorage.user._id
		    }
		}).success(function (comment) {
		    $http({
			    method: 'PUT',
			    url: '/api/articles/' + $routeParams.id,
			    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			    transformRequest: function(obj) {
			        var str = [];
			        for(var p in obj)
			        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			        return str.join("&");
			    },
			    data: {
			    	commentaire: comment._id
			    }
			}).success(function (data) {
				$scope.getFullPage();
			});
		});
	}
	$scope.setOkComment = function (id) {
		    $http({
			    method: 'PUT',
			    url: '/api/comments/' + id,
			    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			    transformRequest: function(obj) {
			        var str = [];
			        for(var p in obj)
			        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			        return str.join("&");
			    },
			    data: {
			    	isOk: 1
			    }
			}).success(function (data) {
				$scope.getFullPage();
			});
	}
	$scope.delComment = function (id) {
		$http.delete('/api/comments/' + id).success(function(data, status, headers, config) {    
	      try { 
	      		$scope.getFullPage();
	      	 	return;	
	        }
	      catch (e) {console.log(e)}
	    })
	}
	$scope.getFullPage();
});