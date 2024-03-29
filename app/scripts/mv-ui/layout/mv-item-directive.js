angular.module('mvUi.Layout.Item', [
  'mvUi.Config',
]).directive('mvItem', [
  'mvConfigService',
  function (mvConfig, mvGridService) {
    return {
      restrict: 'EA',
      transclude: true,
      link: function (scope, iElement, iAttrs, ctrl, transclude) {
        var componentConfig = mvConfig.config.component.layout.item;

        if (!iElement.hasClass(componentConfig.cssClass)) {
          iElement.addClass(componentConfig.cssClass);
        }

        transclude(scope.$new(), function (clone) {
          iElement.append(clone);
        });
      }
    };
  }]);

