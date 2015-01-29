angular.module('mvUi.Control.Radiogroup', [
  'mvUi.Config',
  'mvUi.Control.Controller'
]).directive('mvControlRadiogroup', [
  'mvConfigService',
  '$templateCache',
  function (mvConfig, $templateCache) {
    return {
      restrict: 'A',
      template: $templateCache.get('mv-ui/control/mv-radiogroup.html'),
      require: ['?^ngModel'],
      scope: {
        id: '@',
        icon: '@',
        options: '=',
        ngModel: '='
      },
      transclude:true,
      controller: 'MVControlController',
      link: function (scope, iElement, iAttr, ctrl) {
        scope.ngModel = angular.isDefined(scope.ngModel) && angular.isArray(scope.ngModel) ? scope.ngModel : undefined;

        scope.select = function (index, item, $event) {
          scope.ngModel = item.value;
          scope.value = item.label;
        };

        scope.init(iElement, ['radiogroup','button','setup']);
      }
    };
  }])
