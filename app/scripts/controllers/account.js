'use strict';

/**
 * @ngdoc function
 * @name hashukApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hashukApp
 */
angular.module('hashukApp')
  .controller('AccountCtrl', ['$scope', 'Hebrew', 'Auth', '$firebaseArray','$firebaseObject', function ($scope, Hebrew, Auth, $firebaseArray, $firebaseObject) {
  	$scope.hebrew = angular.merge($scope.hebrew, Hebrew.getAccount());
  }]);
