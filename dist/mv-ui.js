angular.module("mvUi.Template",[]).run(["$templateCache",function(n){n.put("mv-pageheader.html",'<h2 class="mv-page-title">\n  <span class="title-icon" ng-if="icon">\n    <i class="fa fa-{{icon}}"></i>\n  </span>\n  <span class="title-label">{{title}}</span>\n</h2>\n<div class="content-wrapper" ng-transclude>\n\n</div>\n'),n.put("mv-switch-nav.html",'<ul>\n  <li ng-repeat="slide in slides">\n    <button type="button" ng-click="selectSlide(slide.title)">{{slide.title}}</button>\n  </li>\n</ul>\n'),n.put("mv-control/text.html",'<!--Info (Information)-->\n<mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i>\n<label for="{{controlId}}">{{label}}</label>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-control/toggle.html",'<!--<div class="mv-control mv-control-toggle mv-control-button">-->\n  <mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i>\n  <label for="{{controlId}}">{{label}}</label>\n\n  <div class="mv-control-value" ng-switch="{{status}}">\n    <span ng-switch-when="0">{{off}}</span>\n    <span ng-switch-when="1">{{on}}</span>\n  </div>\n  <div ng-transclude>\n\n  </div>\n  <div class="mv-control-button-area">\n    <button class="mv-btn" type="button"\n            ng-switch="{{status}}">\n      <mv-i class="mv-btn-off" icon="toggle-off" ng-switch-when="0"></mv-i>\n      <mv-i class="mv-btn-on" icon="toggle-on" ng-switch-when="1"></mv-i>\n    </button>\n  </div>\n<!--</div>-->\n')}]);
angular.module('mvUi.Button',[])
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
          element.prepend(icon);
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
    };
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


angular.module('mvUi.Control', [])
  .controller('MvControlController', [
    '$scope', '$element', '$attrs',
    function ($scope, $element, $attrs) {
      this.mainClass = 'mv-control';

      this.genSubClass = function (subclass) {
        return this.mainClass + '-' + subclass;
      };

      /**
       * Analize if the class mv-control exist
       */
      this.checkMainClass = function () {
        if (!$element.hasClass(this.mainClass)) {
          $element.addClass(this.mainClass);
        }
      };

      /**
       * Enable a property for display use. It let to css customize the component
       * @param property class to increment
       */
      this.setupFunctionality = function (property) {
        $element.addClass('mv-control-' + property);
      };

    }])
  .directive('mvControlText', [
    '$templateCache',
    function ($templateCache) {
      return {
        restrict: 'E',
        template: $templateCache.get('mv-control/text.html'),
        scope: {
          display: '@',
          label: '@',
          icon: '@'
        },
        transclude: true,
        controller: 'MvControlController',
        link: function (scope, iElement, iAttr, mvCtrl) {
          var control = iElement.find('input');
          scope.controlId = control.attr('id');
          scope.enableIcon = false;
          scope.display = (angular.isDefined(scope.display)) ? scope.display : control.attr('type');

            //init
          mvCtrl.checkMainClass();
          control.addClass(mvCtrl.genSubClass(scope.display));

          if (scope.display=='info') {
            control.attr('disabled', 'disabled');
          }

          //enable icon
          if (angular.isDefined(scope.icon)) {
            mvCtrl.setupFunctionality('icon');
            scope.enableIcon = true;
          }

        }
      };
    }])
  .directive('mvControlInput', [
    '$templateCache',
    function ($templateCache) {
      return {
        restrict: 'E',
        template: $templateCache.get('mv-control/text.html'),
        scope: {
          display: '@',
          label: '@',
          icon: '@'
        },
        transclude: true,
        controller: 'MvControlController',
        link: function (scope, iElement, iAttr, mvCtrl) {
          var control = iElement.find('input');
          scope.controlId = control.attr('id');
          scope.enableIcon = false;
          scope.display = (angular.isDefined(scope.display)) ? scope.display : control.attr('type');

            //init
          mvCtrl.checkMainClass();
          control.addClass(mvCtrl.genSubClass('input'));
          control.addClass(mvCtrl.genSubClass(scope.display));

          //enable icon
          if (angular.isDefined(scope.icon)) {
            mvCtrl.setupFunctionality('icon');
            scope.enableIcon = true;
          }

        }
      };
    }])
  .directive('mvControlToggle', [
    '$templateCache',
    function ($templateCache) {
      return {
        restrict: 'E',
        template: $templateCache.get('mv-control/toggle.html'),
        scope: {
          label: '@',
          icon: '@'
        },
        transclude: true,
        controller: 'MvControlController',
        link: function (scope, iElement, iAttr, mvCtrl) {
          var control = iElement.find('input');
          scope.controlId = control.attr('id');
          scope.enableIcon = false;
          scope.status = angular.isDefined(control) ? control.ngModel : control.val();

            //init
          mvCtrl.checkMainClass();
          mvCtrl.setupFunctionality('toggle');
          mvCtrl.setupFunctionality('button');
          control.addClass(mvCtrl.genSubClass('toggle'));

          //enable icon
          if (angular.isDefined(scope.icon)) {
            mvCtrl.setupFunctionality('icon');
            scope.enableIcon = true;
          }

        }
      };
    }]);

angular.module('mvUi.Dropdown', [])
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

angular.module('mvUi.Grid', [])
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
        scope.layoutFill = (angular.isDefined(scope.layoutFill)) ? JSON.parse(scope.layoutFill) : false;
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


angular.module('mvUi.Icon',[])
  .directive('mvI',[function(){
    return {
      restrict: 'EAC',
      template: '<i class="{{prefix}} {{prefix}}-{{icon}}"></i>',
      scope:{
        icon: '@',
        prefix:'@'
      },
      link: function(scope,element,attr){
        scope.icon = angular.isDefined(scope.icon) ? scope.icon : false;
        scope.prefix = angular.isDefined(scope.prefix) ? scope.prefix : 'fa';

        if(!element.hasClass('mv-icon')){
          element.addClass('mv-icon')
        }
      }
    };
  }]);

angular.module('mvUi.PageHeader', [])
  .directive('mvPageHeader', [
    '$templateCache',
    function ($templateCache) {
  return {
    restrict: 'C',
    template: $templateCache.get('mv-pageheader.html'),
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

angular.module('mvUi.Switch', [])
  .directive('mvSwitch', ['$compile',
    function ($compile) {
      return {
        restrict: 'EAC',
        template: '<section ng-transclude></section>',
        transclude: true,
        scope: {
          ngSwitch: '@'
        },
        controller: function ($scope, $element, $attrs, $transclude) {

          $scope.value = '';
          this.slides =  [];

          this.addSlide = function(slide){
            this.slides.push(slide);
          };

          this.selectSlide = function(title){
              $scope.ngSwitch = title;
          };

        },
        link: function (scope, iElement, iAttrs, mvSwitchCtrl) {
          mvSwitchCtrl.slides[0].title;
        }
      };
    }])
  .directive('mvSwitchSlide', ['$compile',
    function ($compile) {
      return {
        require: '^mvSwitch',
        restrict: 'EAC',
        template: '<div ng-switch-when="{{title}}" ng-transclude></div>',
        transclude: true,
        scope: {
          title: '@'
        },
        link: function (scope, iElement, iAttrs, mvSwitchCtrl) {
          mvSwitchCtrl.addSlide(scope);
        }
      };
    }])
  .directive('mvSwitchNav', ['$templateCache',
    function ($templateCache) {
      return {
        require: '^mvSwitch',
        restrict: 'EAC',
        template: $templateCache.get('mv-switch-nav.html'),
        transclude: true,
        link: function (scope, iElement, iAttrs,mvSwitchCtrl) {
          scope.slides = mvSwitchCtrl.slides;
          scope.selectSlide = mvSwitchCtrl.selectSlide
        }
      };
    }]);


angular.module('mvUi.Tooltip', [])
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

var mvUi = angular.module('mvUi', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'mvUi.Template',
  'mvUi.Control',
  'mvUi.Button',
  'mvUi.Dropdown',
  'mvUi.PageHeader',
  'mvUi.Grid',
  'mvUi.Tooltip',
  'mvUi.Icon',
  'mvUi.Switch'
]);
