angular.module('mvUi.Form.Form', [
  'mvUi.Config'
]).directive('mvForm', [
  'mvConfigService',
  function (mvConfig) {
    return {
      restrict: 'A',
      extend: '^form',
      link: function(scope, iElement, iAttrs){
        var componentConfig = mvConfig.config.component.form;

        if(!iElement.hasClass(componentConfig.cssClass)){
          iElement.addClass(componentConfig.cssClass);
        }

        if(angular.isDefined(iAttrs.alignIcon)){
          iElement.addClass(componentConfig.cssClass + '-icon');
        }
      }
    };
  }]);
