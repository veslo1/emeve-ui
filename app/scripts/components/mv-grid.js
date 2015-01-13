angular.module('mvUi.Grid', [])
  .directive('mvCol', ['$parse', '$compile', function ($parse, $compile) {
    return {
      restrict: 'EAC',
      template: '',
      transclude: true,
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
        scope.layout = angular.isDefined(attrs.size) ? $parse(attrs.size)(scope) : scope.layoutObj;
        scope.layoutPush = angular.isDefined(attrs.push) ? $parse(attrs.push)(scope) : scope.layoutObj;
        scope.layoutPull = angular.isDefined(attrs.pull) ? $parse(attrs.pull)(scope) : scope.layoutObj;

        if(!element.hasClass('mv-col')){
          element.addClass('mv-col');
        }

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
      restrict: 'EAC',
      template: '',
      transclude: true,
      link: function (scope, element, attrs, mvRowCtrl, transclude) {
        scope.layoutFill = (angular.isDefined(attrs.fill)) ? JSON.parse(attrs.layoutFill) : false;
        element.append(transclude());

        if(!element.hasClass('mv-row')){
          element.addClass('mv-row');
        }

        if (scope.layoutFill) {
          var max = element[0].offsetHeight;
          angular.forEach(element[0].children, function (value) {
            angular.element(value).css('height', max + 'px');
          });
        }

      }
    };
  }])
  .directive('mvContainer',[function(){
    return {
      restrict: 'EAC',
      scope:{
        mode: '@'
      },
      link: function(scope,element,attrs){
        scope.mode = (angular.isDefined(scope.mode)) ? scope.mode : '';

        if(scope.mode === 'static'){
          element.addClass('container');
        }else{
          element.addClass('container-fluid');

        }
      }
    };
  }]);

