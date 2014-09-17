'use strict';

var app = angular.module('EmeveUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]).config(function ($routeProvider) {
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
        .otherwise({
            redirectTo: '/'
        });
});
