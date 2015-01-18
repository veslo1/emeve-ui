angular.module('mvUi.Layout.Item', [
  'mvUi.Config',
]).directive('mvCol', [
  'mvConfigService',
  function (mvConfig, mvGridService) {
    return {
      restrict: 'EA',
      scope:false,
      transclude: true,
      link: function (scope, iElement, iAttrs, ctrl, transclude) {
        var componentConfig = mvConfig.config.component.grid.col;

        transclude(scope.$new(), function (clone) {
          iElement.append(clone);
        });
      }
    };
  }]);

