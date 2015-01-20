angular.module('mvUi.Core.IconStack', [
  'mvUi.Config'
])
  .directive('mvIconStack', [
    'mvConfigService',
    function (mvConfig) {
      return {
        restrict: 'A',
        scope: {
          grow: '@'
        },
        link: function (scope, iElement, iAttrs) {
          var componentConfig = mvConfig.config.component.icon;
          scope.name = angular.isDefined(iAttrs.name) ? iAttrs.name : false;
          scope.prefix = angular.isDefined(iAttrs.prefix) ? iAttrs.prefix : componentConfig.default.prefix;
          scope.grow = angular.isDefined(scope.grow) ? !!scope.grow : false;

          //console.log(iAttrs)
          iElement.addClass(scope.prefix + '-stack');
          iElement.addClass(scope.prefix + '-lg');

          var icons = iElement.children();

          angular.forEach(icons, function (icon, index) {
            icon = angular.element(icon);
            if (!scope.grow) {
              index = 2 - index;
            }else{
              index = index + 1;
            }

            icon.addClass(scope.prefix + '-stack-' + index + 'x');
          });
        }
      };
    }]);
