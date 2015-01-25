angular.module('mvUi.Core.IconList', [
  'mvUi.Config'
])
  .directive('mvIconList', [
    'mvConfigService',
    function (mvConfig) {
      return {
        restrict: 'A',
        scope: {},
        link: function (scope, iElement, iAttrs) {
          var componentConfig = mvConfig.config.component.icon;
          scope.prefix = angular.isDefined(iAttrs.prefix) ? iAttrs.prefix : componentConfig.default.prefix;
          //console.log(iAttrs)
          iElement.addClass(scope.prefix + '-ul');

          var itemList = iElement.children();

          angular.forEach(itemList, function (item) {
            var icon = angular.element(item.firstChild);
            if (icon.hasClass(scope.prefix) && !icon.hasClass(scope.prefix + '-li')) {
              icon.addClass(scope.prefix + '-li');
            }
          });
        }
      };
    }])
  .directive('mvIconItem', [
    'mvConfigService',
    function (mvConfig) {
      return {
        restrict: 'A',
        require:['?^^mvIconList'],
        scope: false,
        link: function (scope, iElement, iAttrs) {
          var componentConfig = mvConfig.config.component.icon;
          scope.prefix = angular.isDefined(iAttrs.prefix) ? iAttrs.prefix : componentConfig.default.prefix;
          if(!iElement.hasClass(scope.prefix + '-li')){
            iElement.addClass(scope.prefix + '-li');
          }
        }
      };
    }]);
