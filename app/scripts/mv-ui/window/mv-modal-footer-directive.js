angular.module('mvUi.Window.ModalFooter', [
  'mvUi.Config',
  'mvUi.Window.ModalService',
]).directive('mvModalFooter', [
  'mvConfigService',
  'mvModalService',
  function (mvConfig, mvModalService) {
    return {
      restrict: 'A',
      require: ['^mvModal'],
      transclude: true,
      link: function (scope, iElement, iAttrs, ctrl, transclude) {
        var compConfig = mvConfig.config.component.window.modal;
        var modalController = ctrl[0];

        if (!iElement.hasClass(compConfig.css.footer)) {
          iElement.addClass(compConfig.css.footer);
        }

        scope.close = function($event){
          mvModalService.close($event, modalController.id);
        }

        transclude(scope.$new(), function (clone) {
          iElement.append(clone);
        });
      }
    };
  }
])
