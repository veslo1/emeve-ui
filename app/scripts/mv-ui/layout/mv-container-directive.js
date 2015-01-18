angular.module('mvUi.Layout.Container', [
  'mvUi.Config'
]).directive('mvContainer', [
  'mvConfigService',
  function (mvConfig) {
    return {
      restrict: 'EA',
      transclude: true,
      link: function (scope, iElement, iAttrs, ctrl, transclude) {
        var componentConfig = mvConfig.config.component.layout.container;
        var className = componentConfig.cssFluidClass;
        scope.mode = (angular.isDefined(iAttrs.mode)) ? iAttrs.mode : componentConfig.default.mode;

        if (scope.mode === 'static' || (angular.isDefined(iAttrs.static))) {
          className = componentConfig.cssStrictClass;
        }

        iElement.addClass(className);

        transclude(scope.$new(), function (clone) {
          iElement.append(clone);
        });
      }
    };
  }]);
