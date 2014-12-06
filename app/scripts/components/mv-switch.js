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

          $scope.active = $scope.ngSwitch;
          $scope.nav = '';
          $scope.slides =  [];

          this.createNav = function () {
            $scope.nav = angular.element('<nav>');
            $scope.nav.addClass('mv-switch-nav');
            return $element.prepend($scope.nav);
          };

          this.analiseItems = function () {
            //angular.forEach($scope)
          };

          this.fillNav = function () {

          };

          this.addSlide = function(slide){
            $scope.slides.push(slide);
          };


        },
        link: function (scope, iElement, iAttrs, mvSwitchCtrl) {
          mvSwitchCtrl.createNav();
          mvSwitchCtrl.fillNav();
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
    }]);

