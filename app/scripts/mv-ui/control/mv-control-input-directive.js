angular.module('mvUi.Control.Input', [
  'mvUi.Config',
  'mvUi.Control.Controller'
]).directive('mvControlInput', [
  'mvConfigService',
  '$templateCache',
  function (mvConfig, $templateCache) {
    return {
      restrict: 'A',
      template: $templateCache.get('mv-ui/control/mv-input.html'),
      require:['?^ngModel'],
      scope: {
        ngModel: '='
      },
      transclude: true,
      controller:'MVControlController',
      link: function (scope, iElement, iAttr, ctrl) {
        scope.ngModel = angular.isDefined(scope.ngModel) ? !!scope.ngModel : undefined;

        var barra = angular.element('<div>');
        barra.addClass('bar');

        var input = iElement.find('input');
        input.addClass(scope.generateSubClass('input'));
        input.after(barra);

        if(angular.isDefined(iAttr.label)){
          var label = iElement.find('label');
          label.attr('for',input.attr('id'));
        }

        scope.init(iElement,[]);
      }
    };
  }])
