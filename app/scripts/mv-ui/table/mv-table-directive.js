angular.module('mvUi.Table.Table', [
  'mvUi.Config'
])
  .directive('mvTable', [
    'mvConfigService',
    function (mvConfig) {
      return {
        retrict: 'A',
        scope: {},
        link: function (scope, iElement, iAttrs) {
          var componentConfig = mvConfig.config.component.table;
          if (!iElement.hasClass(componentConfig.cssClass)) {
            iElement.addClass(componentConfig.cssClass)
          }

          if (angular.isDefined(iAttrs.bordered)) {
            iElement.addClass(componentConfig.cssClass + '-bordered');
          }

          if (angular.isDefined(iAttrs.condensed)) {
            iElement.addClass(componentConfig.cssClass + '-condensed');
          }

          if (angular.isDefined(iAttrs.hover)) {
            iElement.addClass(componentConfig.cssClass + '-hover');
          }

          if (angular.isDefined(iAttrs.responsive)) {
            iElement.addClass(componentConfig.cssClass + '-responsive');
          }

          if (angular.isDefined(iAttrs.striped)) {
            iElement.addClass(componentConfig.cssClass + '-striped');
          }

          if (angular.isDefined(iAttrs.normal)) {
            var normalize = componentConfig.default.normalize;
            angular.forEach(normalize,function(defaultClass){
              iElement.addClass(componentConfig.cssClass + '-'+defaultClass);
            });
          }
        }
      };
    }]);
