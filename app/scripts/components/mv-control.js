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
