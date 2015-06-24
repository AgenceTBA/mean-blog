'use strict';

angular.module('tbaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('article', {
        url: '/article/:id',
        templateUrl: 'app/article/article.html',
        controller: 'ArticleCtrl'
      });
  });