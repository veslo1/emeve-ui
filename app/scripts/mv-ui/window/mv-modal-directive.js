angular.module('mvUi.Window.Modal', [
  'mvUi.Config',
  'mvUi.Window.ModalService',
]).directive('mvModal', [
  'mvConfigService',
  'mvModalService',
  '$templateCache',
  function (mvConfig, mvModalService, $templateCache) {
    return {
      restrict: 'A',
      template: $templateCache.get(mvConfig.config.component.window.modal.templates.main),
      scope: {
        id: '@'
      },
      transclude: true,
      controller: function ($scope, $element, $attrs) {
        this.id = angular.isDefined($scope.id) ? $scope.id : $attrs.id;
        this.close = function ($event) {
          mvModalService.close($event, this.id);
        }
      },
      link: function (scope, iElement, iAttrs, ctrl, transclude) {
        var compConfig = mvConfig.config.component.window.modal;
        scope.title = angular.isDefined(iAttrs.title) ? iAttrs.title : '';

        if (!iElement.hasClass(compConfig.cssClass)) {
          iElement.addClass(compConfig.cssClass);
        }

        if (angular.isDefined(iAttrs.open)) {
          iElement.addClass(compConfig.css.open);
        }

        scope.close = function ($event) {
          mvModalService.close($event, iElement);
        };
      }
    };
  }
])
