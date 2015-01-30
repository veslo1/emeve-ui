angular.module('mvUi.Control.Select', [
  'mvUi.Config',
  'mvUi.Control.Controller'
]).directive('mvControlSelect', [
  'mvConfigService',
  '$templateCache',
  function (mvConfig, $templateCache) {
    return {
      restrict: 'A',
      template: $templateCache.get('mv-ui/control/mv-select.html'),
      require: ['?^ngModel'],
      scope: {
        ngModel: '='
      },
      transclude: true,
      controller: 'MVControlController',
      link: function (scope, iElement, iAttr, ctrl) {
        scope.ngModel = angular.isDefined(scope.ngModel) ? !!scope.ngModel : undefined;

        var barra = angular.element('<div>');
        barra.addClass('bar');

        var control = iElement.find('select');
        control.addClass(scope.generateSubClass('select'));
        control.after(barra);

        if (angular.isDefined(iAttr.label)) {
          var label = iElement.find('label');
          label.attr('for', control.attr('id'));
        }

        scope.init(iElement, []);
      }
    };
  }])
