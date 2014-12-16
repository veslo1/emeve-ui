angular.module("mvUi.Template",[]).run(["$templateCache",function(n){n.put("mv-pageheader.html",'<h2 class="mv-page-title">\n  <span class="title-icon" ng-if="icon">\n    <i class="fa fa-{{icon}}"></i>\n  </span>\n  <span class="title-label">{{title}}</span>\n</h2>\n<div class="content-wrapper" ng-transclude>\n\n</div>\n'),n.put("mv-switch-nav.html",'<ul>\n  <li ng-repeat="slide in slides">\n    <button type="button" ng-click="selectSlide(slide.title)">{{slide.title}}</button>\n  </li>\n</ul>\n'),n.put("mv-control/checklist.html",'<mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">\n  <strong  ng-show="showValue">{{ngModel}}</strong>\n</span>\n<div class="mv-control-button-area">\n  <button class="mv-btn" type="button"\n          ng-switch="setup"\n          ng-click="setupToggle($event)">\n    <mv-i icon="angle-down" ng-switch-when="false"></mv-i>\n    <mv-i icon="angle-up" ng-switch-when="true"></mv-i>\n  </button>\n</div>\n<ul class="mv-control-setup-area mv-container-fluid" ng-class="{open:setup}">\n  <li ng-repeat="item in options">\n    <label for="{{id}}-{{$index}}">\n    <mv-row>\n    <div class="mv-col xs-10">\n      {{item.label}}\n    </div>\n    <div class="mv-control-area mv-col xs-2">\n      <input type="checkbox" class="mv-control-checkbox" id="{{id}}-{{$index}}"\n        ng-click="select($index,item,$event)"/>\n    </div>\n    </mv-row>\n    </label>\n  </li>\n</ul>\n'),n.put("mv-control/file.html",'<mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">\n  <strong  ng-show="showValue">{{value}}</strong>\n</span>\n<div class="mv-control-button-area">\n  <button class="mv-btn" type="button"\n          ng-switch="setup"\n          ng-click="setupToggle($event)">\n    <mv-i icon="angle-down" ng-switch-when="false"></mv-i>\n    <mv-i icon="angle-up" ng-switch-when="true"></mv-i>\n  </button>\n</div>\n<ul class="mv-control-setup-area mv-container-fluid" ng-class="{open:setup}">\n  <li ng-repeat="item in options">\n    <label for="{{id}}-{{$index}}">\n    <mv-row>\n    <div class="mv-col xs-10">\n      {{item.label}}\n    </div>\n    <div class="mv-control-area mv-col xs-2">\n      <input type="radio" name="{{name}}" class="mv-control-radio" id="{{id}}-{{$index}}"\n        ng-click="select($index,item,$event)"/>\n    </div>\n    </mv-row>\n    </label>\n  </li>\n</ul>\n\n<div class="mv-control mv-control-file mv-control-icon mv-control-button mv-control-setup">\n  <mv-i icon="camera-retro"></mv-i>\n  <label for="mvFormFileName">File</label>\n      <span class="mv-control-value">\n        {{mvFormData.fileName.file[0]}}\n      </span>\n\n  <div class="mv-control-button-area">\n    <button type="button" class="mv-btn">\n      <mv-i icon="paperclip"></mv-i>\n    </button>\n  </div>\n  <div class="mv-control-setup-area" ng-show="true">\n    <div class="mv-control-file-area">\n      <input type="file" id="mvFormFileName" name="fileName"\n             ng-model="mvFormData.fileName"/>\n    </div>\n    <div class="mv-control-file-upload-area">\n      <mv-i icon="cloud-upload"></mv-i>\n      Clique ou arraste seu arquivo\n    </div>\n  </div>\n</div>\n'),n.put("mv-control/input.html",'<!--Info (Information)-->\n<mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i>\n<label for="{{id}}-control">{{label}}</label>\n<input type="{{type}}" name="{{name}}" id="{{id}}-control" class="mv-control-input"\n       ng-model="ngModel"/>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-control/radiogroup.html",'<mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">\n  <strong  ng-show="showValue">{{value}}</strong>\n</span>\n<div class="mv-control-button-area">\n  <button class="mv-btn" type="button"\n          ng-switch="setup"\n          ng-click="setupToggle($event)">\n    <mv-i icon="angle-down" ng-switch-when="false"></mv-i>\n    <mv-i icon="angle-up" ng-switch-when="true"></mv-i>\n  </button>\n</div>\n<ul class="mv-control-setup-area mv-container-fluid" ng-class="{open:setup}">\n  <li ng-repeat="item in options">\n    <label for="{{id}}-{{$index}}">\n    <mv-row>\n    <div class="mv-col xs-10">\n      {{item.label}}\n    </div>\n    <div class="mv-control-area mv-col xs-2">\n      <input type="radio" name="{{name}}" class="mv-control-radio" id="{{id}}-{{$index}}"\n        ng-click="select($index,item,$event)"/>\n    </div>\n    </mv-row>\n    </label>\n  </li>\n</ul>\n'),n.put("mv-control/select.html",'<mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i>\n<label for="{{id}}-control">{{label}}</label>\n<select id="{{id}}-control" name="{{name}}" class="mv-control-select"\n        ng-model="ngModel"\n        ng-options="a.{{col}} for a in options">\n</select>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-control/text.html",'<!--Info (Information)-->\n<mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">{{ngModel}}</span>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-control/toggle.html",'<!--<div class="mv-control mv-control-toggle mv-control-button">-->\n  <mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i>\n  <label for="{{id}}-control">{{label}}</label>\n\n  <div class="mv-control-value" ng-switch="setup">\n    <span ng-switch-when="false">{{off}}</span>\n    <span ng-switch-when="true">{{on}}</span>\n  </div>\n  <div>\n    <input type="checkbox" id="{{id}}-control" name="toggleName" class="mv-control-toggle"\n           ng-model="ngModel"/>\n  </div>\n  <div class="mv-control-button-area">\n    <button class="mv-btn" type="button"\n            ng-switch="setup"\n            ng-click="setupToggle($event)">\n      <mv-i class="mv-btn-off" icon="toggle-off" ng-switch-when="false"></mv-i>\n      <mv-i class="mv-btn-on" icon="toggle-on" ng-switch-when="true"></mv-i>\n    </button>\n  </div>\n<!--</div>-->\n')}]);
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
      this.setup = false;

      /**
       * Return setup for use in setup area
       * @returns {setup}
       */
      this.getSetup = function () {
        return this.setup;
      }
      /**
       * Generate subclass for use in element
       * @param subclass
       * @returns {string}
       */
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

      /**
       * Toggle setup area
       * @param $event Event object
       * @returns retorna o valor do próprio setup
       */
      this.setupToggle = function ($event) {
        $event.preventDefault();
        this.setup = !!!this.setup;
        return this.setup;
      }

      this.init = function (control, subclass, icon) {
        this.checkMainClass();
        angular.forEach(subclass, function (sc) {
          control.addClass(this.genSubClass(sc));
        })

      };

    }])
  .directive('mvInfo', [
    '$templateCache',
    function ($templateCache) {
      return {
        restrict: 'E',
        template: $templateCache.get('mv-control/text.html'),
        scope: {
          display: '@',
          label: '@',
          icon: '@',
          ngModel: '='
        },
        transclude: true,
        controller: 'MvControlController',
        link: function (scope, iElement, iAttr, mvCtrl) {
          var control = iElement.find('input');
          scope.enableIcon = false;

          //init
          mvCtrl.checkMainClass();
          control.addClass(mvCtrl.genSubClass('info'));

          //enable icon
          if (angular.isDefined(scope.icon)) {
            mvCtrl.setupFunctionality('icon');
            scope.enableIcon = true;
          }
        }
      };
    }])
  .directive('mvInput', [
    '$templateCache',
    function ($templateCache) {
      return {
        restrict: 'E',
        template: $templateCache.get('mv-control/input.html'),
        scope: {
          label: '@',
          icon: '@',
          id: '@',
          type: '@',
          name: '@',
          ngModel: '='
        },
        transclude: true,
        controller: 'MvControlController',
        link: function (scope, iElement, iAttr, mvCtrl) {
          var control = iElement.find('input');
          scope.enableIcon = false;
          scope.type = angular.isDefined(scope.type) ? scope.type : 'text';

          //init
          mvCtrl.checkMainClass();
          control.addClass(mvCtrl.genSubClass(scope.type));

          //enable icon
          if (angular.isDefined(scope.icon)) {
            mvCtrl.setupFunctionality('icon');
            scope.enableIcon = true;
          }

        }
      };
    }])
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
  .directive('mvSelect', [
    '$templateCache',
    function ($templateCache) {
      return {
        restrict: 'E',
        template: $templateCache.get('mv-control/select.html'),
        scope: {
          label: '@',
          icon: '@',
          id: '@',
          name: '@',
          col: '@',
          options: '=',
          ngModel: '='
        },
        transclude: true,
        controller: 'MvControlController',
        link: function (scope, iElement, iAttr, mvCtrl) {
          scope.enableIcon = false;

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
  .directive('mvCheckList', [
    '$templateCache',
    function ($templateCache) {
      return {
        restrict: 'E',
        template: $templateCache.get('mv-control/checklist.html'),
        scope: {
          label: '@',
          icon: '@',
          id: '@',
          showValue: '@',
          options: '=',
          ngModel: '='
        },
        transclude: true,
        controller: 'MvControlController',
        link: function (scope, iElement, iAttr, mvCtrl) {
          scope.enableIcon = false;
          scope.setup = mvCtrl.getSetup();
          scope.showValue = angular.isDefined(scope.showValue) ? !!scope.showValue : false;
          scope.ngModel = angular.isDefined(scope.ngModel) ? scope.ngModel : [];

          scope.setupToggle = function ($event) {
            scope.setup = mvCtrl.setupToggle($event);
          };

          scope.select = function (index, item, $event) {
            var index = scope.ngModel.indexOf(item);

            if (index === -1) {
              scope.ngModel.splice(index, 0, item)
            } else {
              scope.ngModel.splice(index, 1);
            }
          };

          //init
          mvCtrl.checkMainClass();
          mvCtrl.setupFunctionality('checklist');
          mvCtrl.setupFunctionality('button');
          mvCtrl.setupFunctionality('setup');

          //enable icon
          if (angular.isDefined(scope.icon)) {
            mvCtrl.setupFunctionality('icon');
            scope.enableIcon = true;
          }
        }
      };
    }])
  .directive('mvRadioGroup', [
    '$templateCache',
    function ($templateCache) {
      return {
        restrict: 'E',
        template: $templateCache.get('mv-control/radiogroup.html'),
        scope: {
          label: '@',
          icon: '@',
          id: '@',
          name: '@',
          showValue: '@',
          options: '=',
          ngModel: '='
        },
        transclude: true,
        controller: 'MvControlController',
        link: function (scope, iElement, iAttr, mvCtrl) {
          scope.enableIcon = false;
          scope.setup = mvCtrl.getSetup();
          scope.showValue = angular.isDefined(scope.showValue) ? !!scope.showValue : true;
          scope.value = '';
          scope.ngModel = angular.isDefined(scope.ngModel) ? scope.ngModel : [];
          scope.name = angular.isDefined(scope.name) ? scope.name : scope.id;

          scope.setupToggle = function ($event) {
            scope.setup = mvCtrl.setupToggle($event);
          };

          scope.select = function (index, item, $event) {
            scope.ngModel = item;
            scope.value = item.label;
          };

          //init
          mvCtrl.checkMainClass();
          mvCtrl.setupFunctionality('checklist');
          mvCtrl.setupFunctionality('button');
          mvCtrl.setupFunctionality('setup');

          //enable icon
          if (angular.isDefined(scope.icon)) {
            mvCtrl.setupFunctionality('icon');
            scope.enableIcon = true;
          }
        }
      };
    }])
  .directive('mvFile', [
    '$templateCache',
    function ($templateCache) {
      return {
        restrict: 'E',
        template: $templateCache.get('mv-control/radiogroup.html'),
        scope: {
          label: '@',
          icon: '@',
          id: '@',
          name: '@',
          showValue: '@',
          options: '=',
          ngModel: '='
        },
        transclude: true,
        controller: 'MvControlController',
        link: function (scope, iElement, iAttr, mvCtrl) {
          scope.enableIcon = false;
          scope.setup = mvCtrl.getSetup();
          scope.showValue = angular.isDefined(scope.showValue) ? !!scope.showValue : true;
          scope.value = '';
          scope.ngModel = angular.isDefined(scope.ngModel) ? scope.ngModel : [];
          scope.name = angular.isDefined(scope.name) ? scope.name : scope.id;

          scope.setupToggle = function ($event) {
            scope.setup = mvCtrl.setupToggle($event);
          };

          scope.select = function (index, item, $event) {
            scope.ngModel = item;
            scope.value = item.label;
          };

          //init
          mvCtrl.checkMainClass();
          mvCtrl.setupFunctionality('checklist');
          mvCtrl.setupFunctionality('button');
          mvCtrl.setupFunctionality('setup');

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
