'use strict';

angular.module('EmeveUiApp.Route', ['ngRoute', 'ngAnimate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'DefaultCtrl'
      })
      .when('/grid', {
        templateUrl: 'views/grid.html',
        controller: 'DefaultCtrl'
      })
      .when('/typography', {
        templateUrl: 'views/typography.html',
        controller: 'DefaultCtrl'
      })
      .when('/icon', {
        templateUrl: 'views/icon.html',
        controller: 'DefaultCtrl'
      })
      .when('/btn', {
        templateUrl: 'views/btn.html',
        controller: 'BtnCtrl'
      })
      .when('/dropdown', {
        templateUrl: 'views/dropdown.html',
        controller: 'DefaultCtrl'
      })
      .when('/pageheader', {
        templateUrl: 'views/pageheader.html',
        controller: 'DefaultCtrl'
      })
      .when('/divisores', {
        templateUrl: 'views/divisores.html',
        controller: 'DefaultCtrl'
      })
      .when('/table', {
        templateUrl: 'views/table.html',
        controller: 'DefaultCtrl'
      })
      .when('/tooltip', {
        templateUrl: 'views/tooltip.html',
        controller: 'DefaultCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


angular.module('EmeveUiApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'EmeveUiApp.Route',
  'mvUi'
]);
