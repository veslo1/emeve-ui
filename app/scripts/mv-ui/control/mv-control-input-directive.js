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
      //require:['?^ngModel'],
      scope: {
        //ngModel: '='
      },
      transclude: true,
      controller:'MVControlController',
      link: function (scope, iElement, iAttr, ctrl,transclude) {
        //scope.ngModel = angular.isDefined(scope.ngModel) ? scope.ngModel : undefined;

        //var ngModelController = ctrl[0];
        //ngModelController.$render = function(){
        //  return ngModelController.$modelValue
        //}
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
