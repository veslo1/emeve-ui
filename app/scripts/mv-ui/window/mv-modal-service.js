angular.module('mvUi.Window.ModalService', [
  'mvUi.Config',
]).service('mvModalService', [
  'mvConfigService',
  '$rootScope',
  function (mvConfig,$rootScope) {
    var self = this;
    this.listModal = [];

    self.config = mvConfig.config.component.window.modal;

    self.getModal = function(target){
      return angular.element(document.getElementById(target));
    };

    self.open = function ($event, target) {
      if (angular.isDefined(target)) {
        var elementModal = self.getModal(target);
        $rootScope.$apply(elementModal.addClass(self.config.css.open));
      }
    };

    self.close = function ($event, target){
      if (angular.isDefined(target)) {
        var elementModal = self.getModal(target);
        elementModal.removeClass(self.config.css.open);
      }
    };
  }
])
