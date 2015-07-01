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
    Article.get({id:$routeParams.id}, function (data) {
      $scope.article = data;
      $scope.tabCommentaire = []

      for (var i in $scope.article.commentaire) {
      	$http.get('/api/comments/' + $scope.article.commentaire[i]).success(function(comment, status, headers, config) {    
	      try { 
		      	$http.get('/api/users/' + comment.user).success(function(user, status, headers, config) {    
			      try { 
			      		comment.auteur = user.local.nom + " " + user.local.prenom 
						$scope.tabCommentaire.push(comment);
						return;
			        }
			      catch (e) {console.log(e)}
			    })
	        }
	      catch (e) {console.log(e)}
	    })
      }
    });
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
				Article.query({}, function(data) {
	      			$scope.listArticle = data;
	      			console.log(data);
	      			$scope.article.titre = "";
			    	$scope.article.contenu = "";
	    		});
			});
		});
	}

});