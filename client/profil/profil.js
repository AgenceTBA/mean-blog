'use strict';

angular.module('myApp.profil', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profil', {
    templateUrl: 'profil/profil.html',
    controller: 'ProfilCtrl'
  });
}])

.controller('ProfilCtrl', function($scope, User) {
    $scope.user = [];

    User.get({}, function (data) {
      $scope.user = data;
      console.log(data)
    });

});