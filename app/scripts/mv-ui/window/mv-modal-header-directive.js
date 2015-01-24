angular.module('mvUi.Window.ModalHeader', [
  'mvUi.Config',
  'mvUi.Window.ModalService',
]).directive('mvModalHeader', [
  'mvConfigService',
  'mvModalService',
  '$templateCache',
  function (mvConfig, mvModalService, $templateCache) {
    return {
      restrict: 'A',
      require: ['^mvModal'],
      template: $templateCache.get(mvConfig.config.component.window.modal.templates.header),
      scope: {},
      transclude: true,
      link: function (scope, iElement, iAttrs, ctrl, transclude) {
        var compConfig = mvConfig.config.component.window.modal;
        var modalController = ctrl[0];

        if (!iElement.hasClass(compConfig.css.header)) {
          iElement.addClass(compConfig.css.header);
        }

        scope.close = function($event){
          mvModalService.close($event,modalController.id);
        };
      }
    };
  }
])
