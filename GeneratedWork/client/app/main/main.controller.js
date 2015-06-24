'use strict';

angular.module('tbaApp')
  .controller('MainCtrl', function ($scope, $http, Article, Commentaire) {
    $scope.articles = [];

    Article.query({}, function (data) {
      $scope.articles = data;
    });

    Commentaire.query({}, function (data) {
      $scope.comm = data;
    });
  });
