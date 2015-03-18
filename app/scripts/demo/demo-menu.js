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
    function (MenuService) {
      return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) {
          scope.opened = MenuService.getOpened();

          console.log(scope.opened);
          scope.open = function ($event) {
            $event.preventDefault();
            scope.opened = !scope.opened;
            MenuService.setOpened(scope.opened);
            console.log(scope.opened)
          };
        }
      }
    }])

  //Menu Directive
  .directive('demoMenu', [
    'MenuService',
    function (MenuService) {
      return {
        restrict: 'A',
        link: function (scope, iElement, iAttr) {
          scope.opened = MenuService.getOpened();

          scope.$on('Menu.MenuService.setOpened', function (newValue) {
            scope.opened = MenuService.getOpened();
          });
        }
      }
    }]);
