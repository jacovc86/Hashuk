'use strict';

/**
 * @ngdoc function
 * @name hashukApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hashukApp
 */
angular.module('hashukApp')
  .controller('MainCtrl', ['$scope', 'Auth', '$firebaseArray','$firebaseObject', function ($scope, Auth, $firebaseArray, $firebaseObject) {
  	$scope.items = {};
  	var ref = $firebaseArray(new Firebase('https://hashuk.firebaseio.com/items'));
	ref.$loaded().then(function(data) {
		$scope.items = data.items;
		console.log(data[0][0]);
	})
  }]);
