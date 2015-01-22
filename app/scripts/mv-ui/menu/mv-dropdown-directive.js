angular.module('mvUi.Menu.Dropdown', [
  'mvUi.Config'
])
  .directive('mvDropdown', [
    'mvConfigService',
    '$document',
    '$compile',
    function (mvConfig, $document, $compile) {
      return {
        restrict: 'A',
        scope: true,
        link: function (scope, iElement, iAttrs, DropdownCtrl, transclude) {
          var compConfig = mvConfig.config.component.menu.dropdown;
          var compConfigBtn = mvConfig.config.component.btn;
          var btn = angular.element(iElement.children()[0]);
          var menu = angular.element(iElement.children()[1]);
          var menuItens = menu.children();

          scope.isOpen = false;

          if (!iElement.hasClass(compConfig.cssClass)) {
            iElement.addClass(compConfig.cssClass);
          }

          if (!btn.hasClass(compConfigBtn.cssClass)) {
            btn.addClass(compConfigBtn.cssClass);
            btn.addClass(compConfigBtn.default.color);
          }

          if (!menu.hasClass(compConfig.css.menu)) {
            menu.addClass(compConfig.css.menu);
          }

          if (angular.isDefined(iAttrs.backdrop)) {
            iElement.addClass(compConfig.css.backdrop);
          }

          scope.openCallback = function ($event) {
            scope.isOpen = true;
            if (angular.isDefined($event)) {
              $event.stopPropagation();
            }
            iElement.attr('aria-expanded', scope.isOpen);
            iElement.addClass('open', scope.isOpen);
          };

          scope.closeCallback = function ($event) {
            scope.isOpen = false;
            iElement.removeClass('open', scope.isOpen);
            iElement.attr({'aria-expanded': scope.isOpen});
          };

          //WAI ARIA
          iElement.attr({'aria-haspopup': true, 'aria-expanded': false});

          //adiciona botão
          var iE = angular.element('<i>');
          iE.attr('mv-icon', '');
          iE.attr('name', 'ellipsis-v');
          btn.append($compile(iE[0])(scope));

          btn.on('click', scope.openCallback);
          menu.bind('mouseleave click', scope.closeCallback);

          scope.$on('$destroy', function () {
            btn.unbind('click', scope.openCallback);
            menu.unbind('mouseleave click', scope.closeCallback);
          });
        }
      };
    }]);
