'use strict';

/**
 * @ngdoc function
 * @name hashukApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hashukApp
 */
angular.module('hashukApp')
  .controller('AppCtrl', ['$scope', 'Hebrew', 'Auth', '$location', '$firebaseArray','$firebaseObject', function ($scope, Hebrew, Auth, $location, $firebaseArray, $firebaseObject) {
    $scope.hebrew = Hebrew.getApp();
    var t = new Date();
  	Auth.$onAuth(function(authData) {
  		$scope.authData = authData;
  	});
    $scope.logout = function() {
      Auth.$unauth();
      if(window.cookies) window.cookies.clear();
      $location.path('/#/');
    }
    $scope.localLogin = function(creds) {
      Auth.$authWithPassword(creds).catch(function(err) {
        if(err) {
          Auth.$createUser(creds).then(function(userData) {
            Auth.$authWithPassword(creds).catch(function(err) {
              console.error(err);
            });
          }).catch(function(err) {
            console.error(err);
          });
        }
      });
    }
    $scope.facebook = function() {
      Auth.$authWithOAuthPopup('facebook').catch(function(err) {
        console.error(err);
      });
    }
    $scope.google = function() {
      Auth.$authWithOAuthPopup('google').catch(function(err) {
        console.error(err);
      });
    }
  }]);
