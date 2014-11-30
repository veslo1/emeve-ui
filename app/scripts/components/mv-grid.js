angular.module('mvUi.grid', [])
  .directive('mvCol', ['$parse', '$compile', function ($parse, $compile) {
    return {
      restrict: 'C',
      template: '',
      transclude: true,
      scope: {
        layout: '@size',
        layoutPush: '@push',
        layoutPull: '@pull'
      },
      controller: function ($scope, $element, $attrs) {
        $scope.layoutObj = {};

        $scope.produceClass = function (type, size) {
          var className = type + '-' + size;
          $element.addClass(className);
        };

        $scope.produceAdjustmentClass = function (type, size, adjustment) {
          var className = type + '-' + adjustment + '-' + size;
          $element.addClass(className);
        };

      },
      link: function (scope, element, attrs, mvColCtrl, transclude) {
        scope.layout = angular.isDefined(scope.layout) ? $parse(scope.layout)(scope) : scope.layoutObj;
        scope.layoutPush = angular.isDefined(scope.layoutPush) ? $parse(scope.layoutPush)(scope) : scope.layoutObj;
        scope.layoutPull = angular.isDefined(scope.layoutPull) ? $parse(scope.layoutPull)(scope) : scope.layoutObj;


        transclude(scope.$parent, function (clone, scope) {
          element.append(clone);
        });

        if (Object.keys(scope.layout).length !== 0) {
          angular.forEach(scope.layout, function (value, key) {
            scope.produceClass(key, value);
          });
        }

        if (Object.keys(scope.layoutPush).length !== 0) {
          angular.forEach(scope.layoutPush, function (value, key) {
            scope.produceAdjustmentClass(key, value, 'push');
          });
        }

        if (Object.keys(scope.layoutPull).length !== 0) {
          angular.forEach(scope.layoutPull, function (value, key) {
            scope.produceAdjustmentClass(key, value, 'pull');
          });
        }

      }
    };
  }])
  .directive('mvRow', [function () {
    return {
      restrict: 'C',
      template: '',
      scope: {
        layoutFill: '@'
      },
      transclude: true,
      link: function (scope, element, attrs, mvRowCtrl, transclude) {
        scope.layoutFill = (angular.isDefined(scope.layoutFill)) ? JSON.parse(scope.layoutFill) : false
        element.append(transclude());

        if (scope.layoutFill) {
          var max = element[0].offsetHeight;
          angular.forEach(element[0].children, function (value) {
            angular.element(value).css('height', max + 'px');
          });
        }

      }
    };
  }]);

