'use strict';

angular.module('EmeveUiApp')
    .directive('mvCol', function () {
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

            },
            link: function (scope, element, attrs, mvColCtrl, transclude) {
                element.append(transclude());
            }
        };
    })
