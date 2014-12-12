'use strict';

angular.module('EmeveUiApp.Route', ['ngRoute', 'ngAnimate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'DefaultController'
      })
      .when('/btn', {
        templateUrl: 'views/button.html',
        controller: 'BtnController'
      })
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'FormController'
      })
      .when('/:controller',{
        templateUrl:function(attrs){
          return 'views/' + attrs.controller + '.html';
        },
        controller: 'DefaultController'
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
