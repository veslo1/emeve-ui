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
        .when('/icon', {
            templateUrl: 'views/icon.html',
            controller: 'DefaultCtrl'
        })
        .when('/btn', {
            templateUrl: 'views/btn.html',
            controller: 'BtnCtrl'
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
        .otherwise({
            redirectTo: '/'
        });
});
