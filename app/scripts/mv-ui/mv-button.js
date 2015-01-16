angular.module('mvUi.Button',[
  'mvUi.Button.Btn'
])

  .directive('mvBtnRadio', function ($parse) {
    return {
      restrict: 'C',
      require: ['?ngModel'],
      scope: {
        active: '@?',
        value: '@?'
      },
      link: function (scope, element, attrs, controllers) {
        element.addClass('mv-btn');

        var ngModelCtrl = controllers[0];
        if (!ngModelCtrl) return;

        scope.active = angular.isDefined(scope.active) ? scope.active : 'active';

        //model -> ui
        ngModelCtrl.$render = function () {
          var analise = angular.equals(ngModelCtrl.$modelValue, scope.$eval(scope.value));
          element.toggleClass('active', analise);
        };

        // ui -> model
        element.bind('click', function ($event) {
          var isActive = element.hasClass(scope.active);

          $event.preventDefault();
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(scope.value));
            ngModelCtrl.$render();
          });
        });

      }
    };
  })

  .directive('mvBtnCheckbox', function ($parse) {
    return {
      restrict: 'C',
      require: ['?ngModel'],
      scope: {
        active: '@?',
        on: '@?',
        off: '@?'
      },
      controller: function($scope, $element, $attrs){
        $scope.active = angular.isDefined($scope.active) ? $scope.active : 'active';
      },
      link: function (scope, element, attrs, controllers) {
        element.addClass('mv-btn');

        var ngModelCtrl = controllers[0];
        if (!ngModelCtrl) return;

        function getTrueValue() {
          return getCheckboxValue(attrs.on, true);
        }

        function getFalseValue() {
          return getCheckboxValue(attrs.off, false);
        }

        function getCheckboxValue(attributeValue, defaultValue) {
          var val = scope.$eval(attributeValue);
          return angular.isDefined(val) ? val : defaultValue;
        }

        //model -> ui
        ngModelCtrl.$render = function () {
          element.toggleClass('active', angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
        };

        // ui -> model
        element.bind('click', function ($event) {
          $event.preventDefault();
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(element.hasClass('active') ? getFalseValue() : getTrueValue());
            ngModelCtrl.$render();
          });
        });

      }
    };
  });

