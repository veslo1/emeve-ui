'use strict';


angular.module('EmeveUiApp').directive('mvBtn', function ($parse) {
    return {
        restrict: 'C',
        template: '',
        scope: {
            icon: '@',
            border: '@',
            color: '@',
            disabled: '@'
        },
        transclude: true,
        controller: function ($scope, $element, $attrs) {

        },
        link: function (scope, element, attrs, mvBtnCtrl, transclude) {
            scope.icon = angular.isDefined(scope.icon) ? scope.icon : false;
            scope.border = angular.isDefined(scope.border) ? scope.border : false;
            scope.color = angular.isDefined(scope.color) ? scope.color : 'default';

            if(angular.isDefined(scope.disabled)){
                element.addClass('disabled');
            }

            if (scope.icon) {
                var icon = angular.element('<i>');
                icon.addClass('fa');
                icon.addClass('fa-' + scope.icon);
                icon.addClass('fa-fw');
                element.prepend(icon)
            }

            if (scope.border) {
                element.addClass(scope.border);
            }

            if (angular.isDefined(scope.border)) {
                element.addClass(scope.color);
            } else {
                element.addClass('default');
            }

            transclude(scope.$parent, function (clone, scope) {
                element.append(clone);
            });
        }
    }
});