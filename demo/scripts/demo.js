'use strict';

angular.module('EmeveUiApp.Route', ['ngRoute', 'ngAnimate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'DefaultCtrl'
      })
      .when('/btn', {
        templateUrl: 'views/button.html',
        controller: 'BtnCtrl'
      })
      .when('/:controller',{
        templateUrl:function(attrs){
          return 'views/' + attrs.controller + '.html';
        },
        controller: 'DefaultCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var EmeveUiApp = angular.module('EmeveUiApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'EmeveUiApp.Controller',
  'EmeveUiApp.Route',
  'mvUi'
]);
