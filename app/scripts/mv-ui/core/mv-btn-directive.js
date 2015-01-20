angular.module('mvUi.Core.Btn', [
  'mvUi.Config'
])
  .directive('mvBtn', [
    'mvConfigService',
      function (mvConfig) {
        return {
          restrict: 'A',
          link: function (scope, iElement, iAttrs, ctrl, transclude) {
            var componentConfig = mvConfig.config.component.btn;
            var defaultColor = componentConfig.default.color;
            scope.color = angular.isDefined(iAttrs.color) ? iAttrs.color.toLocaleLowerCase() : defaultColor;
            scope.icon = angular.isDefined(iAttrs.icon) ? iAttrs.icon : false;
            //scope.active = angular.isDefined(iAttrs.active) ? !!iAttrs.active : false;

            iElement.addClass(componentConfig.cssClass);

            // default, info, error, success, warning, muted
            iElement.addClass(scope.color);

            // rouded, radius, circle
            if (angular.isDefined(iAttrs.border)) {
              iElement.addClass(iAttrs.border);
            }

            // rouded, radius, circle
            if (angular.isDefined(iAttrs.component)) {
              iElement.addClass(componentConfig.default.component);
            }

            if (angular.isDefined(iAttrs.disabled)) {
              iElement.addClass('disabled');
            }
          }
        };
      }]);
