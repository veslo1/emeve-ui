'use strict';

angular.module('EmeveUiApp')
    .directive('mvCol', function ($parse, $compile) {
        return {
            restrict: 'C',
            template: '',
            transclude: true,
            scope: {
                layout: '@',
                push: '@',
                pull: '@'
            },
            controller: function ($scope, $element, $attrs) {
                $scope.layoutObj = {};

                $scope.produceClass = function (type, size) {
                    var className = type + '-' + size;
                    $element.addClass(className);
                };
            },
            link: function (scope, element, attrs, mvColCtrl, transclude) {
                scope.layout = angular.isDefined(scope.layout) ? $parse(scope.layout)(scope) : scope.layoutObj;

                transclude(scope.$parent, function (clone, scope) {
                    element.append(clone);
                });

                angular.forEach(scope.layout, function (value, key) {
                    scope.produceClass(key, value);
                });
            }
        };
    })
