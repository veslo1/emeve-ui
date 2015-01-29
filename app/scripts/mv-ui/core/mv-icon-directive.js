angular.module('mvUi.Core.Icon', [
  'mvUi.Config'
])
  .directive('mvIcon', [
    'mvConfigService',
    function (mvConfig) {
      return {
        restrict: 'A',
        scope: {},
        link: function (scope, iElement, iAttrs) {
          var componentConfig = mvConfig.config.component.icon;
          scope.name = angular.isDefined(iAttrs.name) ? iAttrs.name : false;
          scope.prefix = angular.isDefined(iAttrs.prefix) ? iAttrs.prefix : componentConfig.default.prefix;

          iElement.addClass(componentConfig.cssClass);
          iElement.addClass(scope.prefix);
          iElement.addClass(scope.prefix + '-' + scope.name);

          if (angular.isDefined(iAttrs.rotate)) {
            iElement.addClass(scope.prefix + '-rotate-' + iAttrs.rotate);
          }

          if (angular.isDefined(iAttrs.spin)) {
            iElement.addClass(scope.prefix + '-spin');
          }

          if (angular.isDefined(iAttrs.stack)) {
            iElement.addClass(scope.prefix + '-stack-' + iAttrs.stack + 'x');
          }

          if (angular.isDefined(iAttrs.inverse)) {
            iElement.addClass(scope.prefix + '-inverse');
          }

          if (angular.isDefined(iAttrs.flip)) {
            scope.flip = angular.isDefined(iAttrs.flip).toLocaleString();
            var cFlip = scope.prefix + '-flip-';

            switch (scope.flip) {
              case 'h':
                iElement.addClass(cFlip + 'horizontal');
                break;
              case 'v':
                iElement.addClass(cFlip + 'horizontal');
                break;
              case 'a':
                iElement.addClass(cFlip + 'horizontal');
                iElement.addClass(cFlip + 'vertical');
                break;
              default :
                iElement.addClass(cFlip + 'horizontal');
            }
          }

          if (angular.isDefined(iAttrs.zoom)) {
            iElement.addClass(scope.prefix + '-' + iAttrs.zoom);
          }
        }
      };
    }]);
