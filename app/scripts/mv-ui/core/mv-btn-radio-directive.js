angular.module('mvUi.Core.BtnRadio', [
  'mvUi.Config'
]).directive('mvBtnRadio', [
  'mvConfigService',
  function (mvConfig) {
    return {
      restrict: 'A',
      require: ['?ngModel'],
      scope: {},
      link: function (scope, iElement, iAttrs, controllers) {
        var componentConfig = mvConfig.config.component.btn;
        scope.active = angular.isDefined(iAttrs.active) ? iAttrs.active : 'active';
        scope.value = angular.isDefined(iAttrs.value) ? iAttrs.value : undefined;

        var ngModelCtrl = controllers[0];
        if (!ngModelCtrl) return;


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
