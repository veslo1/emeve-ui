angular.module('mvUi.Window.ModalBody', [
  'mvUi.Config',
  'mvUi.Window.ModalService',
]).directive('mvModalBody', [
  'mvConfigService',
  'mvModalService',
  function (mvConfig,mvModalService) {
    return {
      restrict: 'A',
      require: ['^mvModal'],
      scope: {},
      transclude: true,
      link: function (scope, iElement, iAttrs, ctrl, transclude) {
        var compConfig = mvConfig.config.component.window.modal;
        var modalController = ctrl[0];

        if (!iElement.hasClass(compConfig.css.body)) {
          iElement.addClass(compConfig.css.body);
        }

        scope.close = function($event){
          mvModalService.close($event, modalController.id)
        }

        transclude(scope.$new(), function (clone) {
          iElement.append(clone);
        });
      }
    };
  }
])
