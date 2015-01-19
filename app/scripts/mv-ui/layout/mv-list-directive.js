angular.module('mvUi.Layout.List', [
  'mvUi.Config',
]).directive('mvList', [
  'mvConfigService',
  function (mvConfig) {
    return {
      restrict: 'EA',
      transclude: true,
      link: function (scope, iElement, iAttrs, ctrl, transclude) {
        var componentConfigRow = mvConfig.config.component.layout.row;
        var componentConfig = mvConfig.config.component.layout.list;

        if (!iElement.hasClass(componentConfigRow.cssClass)) {
          iElement.addClass(componentConfigRow.cssClass);
        }

        if (!iElement.hasClass(componentConfig.cssClass)) {
          iElement.addClass(componentConfig.cssClass);
        }

        transclude(scope.$new(), function (clone) {
          iElement.append(clone);
        });
      }
    };
  }]);

