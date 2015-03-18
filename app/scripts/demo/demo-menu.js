angular.module('EmeveUiApp.Menu', [])

  //Serviço
  .service('MenuService', [
    '$rootScope',
    function ($rootScope) {
      this.opened = true;
      this.setOpened = function ($newValue) {
        this.opened = $newValue;
        return $rootScope.$broadcast('Menu.MenuService.setOpened');
      };
      this.getOpened = function () {
        return this.opened;
      };
    }])

  //Menu Btn toggle
  .directive('demoBtnMenu', [
    'MenuService',
    '$location',
    '$anchorScroll',
    function (MenuService, $location, $anchorScroll) {
      return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) {
          scope.opened = MenuService.getOpened();

          scope.open = function ($event) {
            $event.preventDefault();
            if(!scope.opened){
              $location.hash('mainHeader');
              $anchorScroll();
            }

            scope.opened = !scope.opened;
            MenuService.setOpened(scope.opened);
          };
        }
      }
    }])

  //Menu Directive
  .directive('demoMenu', [
    'MenuService',
    '$rootScope',
    '$location',
    '$anchorScroll',
    function (MenuService, $rootScope, $location, $anchorScroll) {
      return {
        restrict: 'A',
        link: function (scope, iElement, iAttr) {
          scope.opened = MenuService.getOpened();

          scope.$on('Menu.MenuService.setOpened', function (newValue) {
            scope.opened = MenuService.getOpened();
          });

          $rootScope.$on('$routeChangeSuccess', function () {
            MenuService.setOpened(false);
            $anchorScroll({yOffset: 0});
          });

          scope.$on('$destroy', function () {
            MenuService.setOpened(false);
          });
        }
      }
    }]);
