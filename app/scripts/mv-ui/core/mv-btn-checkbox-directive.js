angular.module('mvUi.Core.BtnCheckbox', [
  'mvUi.Config'
]).directive('mvBtnCheckbox', [
  'mvConfigService',
  function (mvConfig) {
    return {
      restrict: 'A',
      require: ['?ngModel'],
      scope: {},
      link: function (scope, iElement, iAttrs, controllers) {
        var componentConfig = mvConfig.config.component.btn;
        scope.active = angular.isDefined(iAttrs.active) ? iAttrs.active : 'active';

        var ngModelCtrl = controllers[0];
        if (!ngModelCtrl) return;

        var getCheckboxValue = function (attributeValue, defaultValue) {
          var val = scope.$eval(attributeValue);
          return angular.isDefined(val) ? val : defaultValue;
        };

        var getTrueValue = function () {
          return getCheckboxValue(iAttrs.on, true);
        };

        var getFalseValue = function () {
          return getCheckboxValue(iAttrs.off, false);
        };

        //model -> ui
        ngModelCtrl.$render = function () {
          iElement.toggleClass('active', angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
        };

        // ui -> model
        iElement.bind('click', function ($event) {
          $event.preventDefault();
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(iElement.hasClass('active') ? getFalseValue() : getTrueValue());
            ngModelCtrl.$render();
          });
        });

        //on destroy
      }
    };
  }]);

