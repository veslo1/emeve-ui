angular.module('mvUi.Core.BtnModal', [
  'mvUi.Config',
  'mvUi.Window.ModalService',
]).directive('mvBtnModal', [
    'mvConfigService',
    'mvModalService',
    function (mvConfig,mvModalService) {
      return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) {
          var compConfig = mvConfig.config.component.btn;
          var compConfigModal = mvConfig.config.component.window.modal;

          scope.target = angular.isDefined(iAttrs.target) ? iAttrs.target : undefined;

          scope.open = function ($event) {
            mvModalService.open($event, scope.target);
          };

          iElement.bind('click', scope.open);
        }
      };
    }]);
