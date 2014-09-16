'use strict';

angular.module('EmeveUiApp')
    .directive('mvRow', function () {
        return {
            restrict: 'C',
            template: '',
            scope: {
                layoutFill: '@'
            },
            transclude: true,
            link: function (scope, element, attrs, mvRowCtrl, transclude) {
                scope.layoutFill = (angular.isDefined(scope.layoutFill)) ? JSON.parse(scope.layoutFill) : false
                element.append(transclude());

                if (scope.layoutFill) {
                    var max = element[0].offsetHeight;
                    angular.forEach(element[0].children, function (value) {
                        angular.element(value).css('height',max+'px');
                    });
                }

            }
        };
    });
