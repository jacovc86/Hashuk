'use strict';

/**
 * @ngdoc overview
 * @name hashukApp
 * @description
 * # hashukApp
 *
 * Main module of the application.
 */
angular
  .module('hashukApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'ngMaterial'
  ])
  .config(['$routeProvider','$mdThemingProvider', function ($routeProvider,$mdThemingProvider) {
    $mdThemingProvider.theme('hashukOrange').primaryPalette('lime');
    $mdThemingProvider.setDefaultTheme('hashukOrange');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          authData: ['Auth', function(Auth) {
            return Auth.$waitForAuth();
          }]
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        resolve: {
          authData: ['Auth', function(Auth) {
            return Auth.$requireAuth();
          }]
        }
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'account',
        resolve: {
          m: ['Auth', function(Auth) {
            return Auth.$requireAuth();
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
