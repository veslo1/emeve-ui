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
            menu.addClass(compConfig.css.backdrop);
          }

          /**
           * Habilita fechamento com clique fora
           * @param touchMode
           */
          scope.registerCloseListeners = function(touchMode){
            if (touchMode) {
              $document.bind('click', scope.closeCallback);
              menu.bind('mouseenter', scope.closeCallback);
            } else {
              menu.bind('mouseleave', scope.closeCallback);
            }
          };

          /**
           * Remove registros de fechamentos
           * @param touchMode
           */
          scope.unregisterCloseListeners = function(touchMode){
            if (touchMode) {
              $document.unbind('click', scope.closeCallback);
              menu.unbind('mouseenter', scope.closeCallback);
            } else {
              menu.unbind('mouseleave', scope.closeCallback);
            }
          };

          /**
           * Abre menu
           * @param $event
           */
          scope.openCallback = function ($event) {
            scope.isOpen = true;
            if (angular.isDefined($event)) {
              $event.stopPropagation();
            }
            iElement.attr('aria-expanded', scope.isOpen);
            iElement.addClass('open', scope.isOpen);
            scope.registerCloseListeners(Modernizr.touch);
          };

          /**
           * Fecha menu
           * @param $event
           */
          scope.closeCallback = function ($event) {
            if (angular.isDefined($event)) {
              $event.stopPropagation();
            }
            scope.isOpen = false;
            iElement.removeClass('open', scope.isOpen);
            iElement.attr({'aria-expanded': scope.isOpen});

            scope.unregisterCloseListeners(Modernizr.touch);
          };

          /**
           * Adiciona ícone após botão
           */
          scope.addCaret = function(){

            var iE = angular.element('<i>');
            iE.attr('mv-icon', '');
            iE.attr('name', 'ellipsis-v');
            btn.append($compile(iE[0])(scope));
          };

          /**
           * Enable WAI ARIA
           */
          scope.enableAria = function(){
            iElement.attr({'aria-haspopup': true, 'aria-expanded': false});
          }


          /**
           * Ao destruir
           */
          scope.$on('$destroy', function () {
            btn.unbind('click', scope.openCallback);
            menu.unbind('mouseleave click', scope.closeCallback);
            scope.unregisterCloseListeners(Modernizr.touch);
          });

          scope.enableAria();
          scope.addCaret();
          btn.on('click', scope.openCallback);
          menu.bind('click',scope.closeCallback);
        }
      };
    }]);
