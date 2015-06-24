'use strict';
angular.module('myApp.service', ['ngResource'])

  .service('Article', function ($resource) {
    return $resource('api/articles/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': { method: 'GET' },
            'create': { method: 'POST' },
            'update': { method: 'PUT' },
            'delete': { method: 'DELETE' },
        });
  })

  
