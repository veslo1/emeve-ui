angular.module('mvUi.Core.Btn', [
  'mvUi.Config',
  'mvUi.Control.Controller',
]).directive('mvControl', [
  'mvConfigService',
  function (mvConfig) {
    return {
      restrict: 'A',
      controller: 'mvControlController',
      link: function (scope, iElement, iAttrs, ctrl) {
        var componentConfig = mvConfig.config.component.control;

        iElement.addClass(componentConfig.cssClass);
      }
    };
  }]);
