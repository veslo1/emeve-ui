angular.module('mvUi.Button.Btn', [])
  .directive('mvBtn', function ($parse) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs, ctrl, transclude) {
        scope.color = angular.isDefined(attrs.color) ? attrs.color.toLocaleLowerCase() : 'default';
        scope.border = angular.isDefined(scope.border) ? scope.border : false;
        scope.icon = angular.isDefined(attrs.icon) ? attrs.icon : false;
        //scope.active = angular.isDefined(attrs.active) ? !!attrs.active : false;

        element.addClass('mv-btn');

        // default, info, error, success, warning, muted
        element.addClass(scope.color);

        // rouded, radius, circle
        if (scope.border) {
          element.addClass(scope.border);
        }

        if (angular.isDefined(attrs.disabled)) {
          element.addClass('disabled');
        }
      }
    };
  })
