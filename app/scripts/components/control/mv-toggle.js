angular.module('mvUi.Control.Toggle', [
  'mvUi.Control'
])
  .directive('mvToggle', [
  '$templateCache',
  function ($templateCache) {
    return {
      restrict: 'E',
      template: $templateCache.get('mv-control/toggle.html'),
      scope: {
        label: '@',
        icon: '@',
        off: '@',
        on: '@',
        ngModel: '='
      },
      transclude: true,
      controller: 'MvControlController',
      link: function (scope, iElement, iAttr, mvCtrl) {
        var control = iElement.find('input');
        scope.enableIcon = false;
        scope.setup = angular.isDefined(scope.ngModel) ? !!scope.ngModel : mvCtrl.getSetup();
        scope.on = angular.isDefined(scope.on) ? scope.on : 'On';
        scope.off = angular.isDefined(scope.off) ? scope.off : 'Off';

        scope.setupToggle = function ($event) {
          scope.setup = mvCtrl.setupToggle($event);
          scope.ngModel = scope.setup;
        };

        //init
        mvCtrl.checkMainClass();
        mvCtrl.setupFunctionality('toggle');
        mvCtrl.setupFunctionality('button');

        //enable icon
        if (angular.isDefined(scope.icon)) {
          mvCtrl.setupFunctionality('icon');
          scope.enableIcon = true;
        }
      }
    };
  }])
