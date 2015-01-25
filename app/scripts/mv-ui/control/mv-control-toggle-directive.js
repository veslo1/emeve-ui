angular.module('mvUi.Control.Toggle', [
  'mvUi.Config',
  'mvUi.Control.Controller'
]).directive('mvControlToggle', [
  'mvConfigService',
  '$templateCache',
  function (mvConfig, $templateCache) {
    return {
      restrict: 'A',
      template: $templateCache.get('mv-ui/control/mv-toggle.html'),
      require:['?^ngModel'],
      scope: {
        ngModel: '='
      },
      transclude: true,
      controller:'mvControlController',
      link: function (scope, iElement, iAttr, ctrl) {
        scope.ngModel = angular.isDefined(scope.ngModel) ? !!scope.ngModel : undefined;
        scope.on = angular.isDefined(iAttr.on) ? iAttr.on : 'On';
        scope.off = angular.isDefined(iAttr.off) ? iAttr.off : 'Off';

        var input = iElement.find('input');
        input.addClass(scope.generateSubClass('toggle'));

        if(angular.isDefined(iAttr.label)){
          var label = iElement.find('label');
          label.attr('for',input.attr('id'));
        }

        scope.toggleValue = function ($event) {
          $event.preventDefault();
          scope.ngModel = !scope.ngModel;
        };

        scope.init(iElement,['toggle','button']);
      }
    };
  }])
