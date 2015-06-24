'use strict';

angular.module('tbaApp')
  .service('Article', function ($resource) {
    return $resource('api/articles/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': { method: 'GET' },
            'create': { method: 'POST' },
            'update': { method: 'PUT' },
            'delete': { method: 'DELETE' },
        });
  })

  .service('Commentaire', function ($resource) {
    return $resource('api/comments/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': { method: 'GET' },
            'create': { method: 'POST' },
            'update': { method: 'PUT' },
            'delete': { method: 'DELETE' },
        });
  });
