angular.module('mvUi.Control.Checklist', [
  'mvUi.Config',
  'mvUi.Control.Controller'
]).directive('mvControlChecklist', [
  'mvConfigService',
  '$templateCache',
  function (mvConfig, $templateCache) {
    return {
      restrict: 'A',
      template: $templateCache.get('mv-ui/control/mv-checklist.html'),
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
        scope.ngModel = angular.isDefined(scope.ngModel) && angular.isArray(scope.ngModel) ? scope.ngModel : [];

        scope.selectItem = function ($event,index, item) {
          var value = item.value;
          var itemIndex = scope.ngModel.indexOf(value);

          if (itemIndex === -1) {
            scope.ngModel.splice(itemIndex, 0, value);
          } else {
            scope.ngModel.splice(itemIndex, 1);
          }
        };

        scope.init(iElement, ['checklist','button','setup']);
      }
    };
  }])
