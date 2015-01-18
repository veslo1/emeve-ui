angular.module('mvUi.Grid.Row', [
  'mvUi.Config',
]).directive('mvRow', [
  'mvConfigService',
  function (mvConfig) {
    return {
      restrict: 'EA',
      transclude: true,
      link: function (scope, iElement, iAttrs, ctrl, transclude) {
        var componentConfig = mvConfig.config.component.grid.row;
        scope.layoutFill = (angular.isDefined(iAttrs.fill)) ? JSON.parse(iAttrs.fill) : false;

        if (!iElement.hasClass(componentConfig.cssClass)) {
          iElement.addClass(componentConfig.cssClass);
        }

        if (scope.layoutFill) {
          var max = iElement[0].offsetHeight;
          angular.forEach(iElement[0].children, function (value) {
            angular.element(value).css('height', max + 'px');
          });
        }

        transclude(scope.$new(), function (clone) {
          iElement.append(clone);
        });
      }
    };
  }]);
