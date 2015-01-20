angular.module('mvUi.Core.BtnRadio', [
  'mvUi.Config'
]).directive('mvBtnRadio', [
  'mvConfigService',
  function (mvConfig) {
    return {
      restrict: 'C',
      require: ['?ngModel'],
      scope: {
        active: '@?',
        value: '@?'
      },
      link: function (scope, iElement, iAttrs, controllers) {

        iElement.addClass('mv-btn');

        var ngModelCtrl = controllers[0];
        if (!ngModelCtrl) return;

        scope.active = angular.isDefined(scope.active) ? scope.active : 'active';

        //model -> ui
        ngModelCtrl.$render = function () {
          var analise = angular.equals(ngModelCtrl.$modelValue, scope.$eval(scope.value));
          iElement.toggleClass('active', analise);
        };

        // ui -> model
        iElement.bind('click', function ($event) {
          var isActive = iElement.hasClass(scope.active);

          $event.preventDefault();
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(scope.value));
            ngModelCtrl.$render();
          });
        });

      }
    };
  }]);
