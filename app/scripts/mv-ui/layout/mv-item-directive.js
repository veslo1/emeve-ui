angular.module('mvUi.Layout.Item', [
  'mvUi.Config',
]).directive('mvItem', [
  'mvConfigService',
  function (mvConfig, mvGridService) {
    return {
      restrict: 'EA',
      scope:false,
      transclude: true,
      link: function (scope, iElement, iAttrs, ctrl, transclude) {
        var componentConfig = mvConfig.config.component.layout.col;

        transclude(scope.$new(), function (clone) {
          iElement.append(clone);
        });
      }
    };
  }]);

