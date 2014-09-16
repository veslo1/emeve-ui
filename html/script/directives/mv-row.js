'use strict';

angular.module('EmeveUiApp')
    .directive('mvRow', function () {
        return {
            restrict: 'E',
            template: '<div class="mv-row" ng-transclude></div>',
            scope: {
                layoutFill: '@'
            },
            transclude: true,
            link: function (scope, element, attrs) {
                scope.layoutFill = (angular.isDefined(scope.layoutFill)) ? JSON.parse(scope.layoutFill) : false
                if (scope.layoutFill) {
                    var max = element.children()[0].offsetHeight;
                    angular.forEach(element.children()[0].children, function (value) {
                        angular.element(value).css('height',max+'px');
                    });
                }
            }
        };
    });
/*
 app.directive('mvCol', function ($scope) {
 return {
 restrict: 'C',
 template: '<div></div>',
 transclude: true,
 scope: {
 layout: '@',
 push: '@',
 pull: '@'
 },
 controller: function($scope,$element,$attrs){

 },
 link: function(scope, element, attrs){

 }
 };
 })*/