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
        link: function (scope, iElement, iAttrs, mvSwitchCtrl) {
          scope.slides = mvSwitchCtrl.slides;
          scope.selectSlide = mvSwitchCtrl.selectSlide;
        }
      };
    }]);

