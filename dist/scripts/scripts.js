'use strict';

var mvUi = angular.module('mvUi', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'mvUi.btn',
  'mvUi.dropdown',
  'mvUi.pageheader',
  'mvUi.grid',
  'mvUi.tooltip'
]);

!function(a){try{a=angular.module("Emeve.Ui")}catch(e){a=angular.module("Emeve.Ui",[])}a.run(["$templateCache",function(a){a.put("partials/directives/mv-pageheader.html",'<h2 class="mv-page-title"><span class="title-icon" data-ng-if="icon"><i class="fa fa-{{icon}}"></i></span> <span class="title-label">{{title}}</span></h2><div class="content-wrapper" data-ng-transclude=""></div>')}])}();
angular.module('mvUi.btn',[])
  .directive('mvBtn', function ($parse) {
    return {
      restrict: 'C',
      scope: {
        icon: '@',
        border: '@',
        color: '@',
        disabled: '@',
        behavior: '@',
        active: '@'
      },
      controller: function ($scope, $element, $attrs) {
        $scope.active = false;

        $scope.toogleActive = function () {
          $scope.active = !$scope.active;
        };

        $scope.$watch('active', function (newValue) {
          if (newValue) {
            $element.addClass('active');
          } else {
            $element.removeClass('active');
          }
        });
      },
      link: function (scope, element, attrs, ctrl, transclude) {
        scope.icon = angular.isDefined(scope.icon) ? scope.icon : false;
        scope.border = angular.isDefined(scope.border) ? scope.border : false;
        scope.color = angular.isDefined(scope.color) ? scope.color : 'default';

        if (angular.isDefined(scope.disabled)) {
          element.addClass('disabled');
        }

        if (scope.icon) {
          var icon = angular.element('<i>');
          icon.addClass('fa');
          icon.addClass('fa-' + scope.icon);
          icon.addClass('fa-fw');
          element.prepend(icon)
        }

        if (scope.border) {
          element.addClass(scope.border);
        }

        if (angular.isDefined(scope.border)) {
          element.addClass(scope.color);
        } else {
          element.addClass('default');
        }
      }
    }
  })

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
    }
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
    }
  });


angular.module('mvUi.dropdown', [])
  .directive('mvDropdown', ['$document', function ($document) {
    return {
      restrict: 'C',
      controller: function ($scope, $element, $attrs) {
        $scope.isOpen = false;

        $scope.addCaret = function () {
          var caret = angular.element('<i>');
          caret.addClass('fa');
          caret.addClass('fa-ellipsis-v');
          return caret;
        };

        this.open = function ($event) {
          $scope.isOpen = !$scope.isOpen;
          $scope.$apply(function () {
            $element.toggleClass('open', $scope.isOpen);
          });
        };

      },
      link: function (scope, element, attrs, DropdownCtrl) {
        var btn = angular.element(element.children()[0]);
        var menu = angular.element(element.children()[1]);
        var doOpen = function ($event) {
          if ($event) {
            $event.stopPropagation();
          }
          DropdownCtrl.open();
          $document.bind('click', DropdownCtrl.open);
        };

        //WAI ARIA
        element.attr({'aria-haspopup': true, 'aria-expanded': false});

        //Botão
        btn.append(scope.addCaret());
        btn.bind('click', doOpen);

        scope.$watch('isOpen', function (isOpen) {
          element.attr('aria-expanded', isOpen);
          if (!isOpen) {
            $document.unbind('click', DropdownCtrl.open);
          }
        }, true);

        scope.$on('$destroy', function () {
          btn.unbind('click', scope.open);
          $document.unbind('click', DropdownCtrl.open);
        });
      }
    };
  }]);

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


angular.module('mvUi.pageheader', [])
  .directive('mvPageHeader', [function () {
  return {
    restrict: 'C',
    templateUrl: '../../views/directives/mv-pageheader.html',
    scope: {
      title: '@',
      icon: '@'
    },
    transclude: true,
    link: function (scope, element, attrs) {
      scope.icon = angular.isDefined(scope.icon) ? scope.icon : false;

    }
  };
}]);

angular.module('mvUi.tooltip', [])
  .directive('mvTooltip', [function () {
    return {
      restrict: 'C',
      templateUrl: '../../views/directives/mv-pageheader.html',
      scope: {
        title: '@',
        position: '@'
      },
      transclude: true,
      link: function (scope, element, attrs) {
        scope.position = angular.isDefined(scope.position) ? scope.position : 'top';

      }
    };
  }]);
