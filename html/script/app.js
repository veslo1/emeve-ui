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
        .otherwise({
            redirectTo: '/'
        });
});
