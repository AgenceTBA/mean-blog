'use strict';

angular.module('tbaApp')
  .controller('ArticleCtrl', function ($scope, $stateParams, Article, Commentaire, Auth) {
  	$scope.isLoggedIn = Auth.isLoggedIn;

    Article.get({id: $stateParams.id}, function (data) {
      $scope.article = data;
    });

    $scope.sendCommentaire = function (commentaire) {
	    Commentaire.create({article: $stateParams.id, body: commentaire}, function (data) {
	      $scope.article = data;
	    });
    };
  });
