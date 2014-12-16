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
    }]);
