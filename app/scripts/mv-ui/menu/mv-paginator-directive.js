angular.module('mvUi.Menu.Paginator', [
  'mvUi.Config'
])
  .directive('mvPaginator', [
    'mvConfigService',
    function (mvConfig) {
      return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs, ctrl, transclude) {
          var compConfig = mvConfig.config.component.menu.paginator;

          if (!iElement.hasClass(compConfig.cssClass)) {
            iElement.addClass(compConfig.cssClass);
          }
        }
      };
    }]);
