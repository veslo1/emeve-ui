angular.module('mvUi.Menu.Dropdown.Header', [
  'mvUi.Config'
])
  .directive('mvDropdown', [
    'mvConfigService',
    function (mvConfig) {
      return {
        restrict: 'A',
        scope: true,
        link: function (scope, iElement, iAttrs, DropdownCtrl, transclude) {
          var compConfig = mvConfig.config.component.menu.dropdown;

          iElement.addClass(compConfig.css.header);
        }
      };
    }]);
