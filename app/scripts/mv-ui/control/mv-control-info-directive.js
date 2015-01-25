angular.module('mvUi.Control.Info', [
  'mvUi.Config',
  'mvUi.Control.Controller'
]).directive('mvControlInfo', [
  'mvConfigService',
  '$templateCache',
  function (mvConfig, $templateCache) {
    return {
      restrict: 'A',
      template: $templateCache.get('mv-ui/control/mv-info.html'),
      require:['?^ngModel'],
      scope: {
        ngModel: '='
      },
      transclude: true,
      controller:'MVControlController',
      link: function (scope, iElement, iAttr, ctrl) {

        scope.init(iElement,['info']);
      }
    };
  }])
