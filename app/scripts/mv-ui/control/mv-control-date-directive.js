angular.module('mvUi.Control.Date', [
  'mvUi.Config',
  'mvUi.Control.Controller',
  'mvUi.Control.Service'
]).directive('mvControlDate', [
  'mvConfigService',
  'mvControlFileService',
  '$templateCache',
  function (mvConfig, mvControlFileService, $templateCache) {
    return {
      restrict: 'A',
      template: $templateCache.get('mv-ui/control/mv-date.html'),
      require: ['?^ngModel'],
      scope: {
        id: '@',
        icon: '@',
        btnIcon: '@',
        ngModel: '='
      },
      transclude:true,
      controller: 'MVControlController',
      link: function (scope, iElement, iAttr, ctrl, transclude) {
        scope.ngModel = angular.isDefined(scope.ngModel) && angular.isArray(scope.ngModel) ? scope.ngModel : [];
        scope.btnIcon = angular.isDefined(scope.btnIcon) ? scope.btnIcon : 'calendar';
        scope.value = '';

        var ngModelController = ctrl[0];

        var barra = angular.element('<div>');
        barra.addClass('bar');

        var control = iElement.find('input');
        control.after(barra);

        if(angular.isDefined(iAttr.label)){
          var label = iElement.find('label');
          label.attr('for',control.attr('id'));
        }

        control.bind('change', function () {
          scope.value = control.val();
          ngModelController.$setViewValue(control.val());
          scope.$apply();
        });

        scope.init(iElement, ['date','button','setup']);
      }
    };
  }]);
