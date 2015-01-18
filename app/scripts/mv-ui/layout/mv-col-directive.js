angular.module('mvUi.Layout.Col', [
  'mvUi.Config',
  'mvUi.Layout.Service'
]).directive('mvCol', [
  'mvConfigService',
  'mvGridService',
  '$parse',
  function (mvConfig, mvGridService, $parse) {
    return {
      restrict: 'EA',
      scope:false,
      transclude: true,
      link: function (scope, iElement, iAttrs, ctrl, transclude) {
        var componentConfig = mvConfig.config.component.grid.col;
        scope.layoutObj = {};
        scope.size = angular.isDefined(iAttrs.size) ? $parse(iAttrs.size)(scope) : {};
        scope.layoutPush = angular.isDefined(iAttrs.push) ? $parse(iAttrs.push)(scope) : {};
        scope.layoutPull = angular.isDefined(iAttrs.pull) ? $parse(iAttrs.pull)(scope) : {};

        if (!iElement.hasClass(componentConfig.cssClass)) {
          iElement.addClass(componentConfig.cssClass);
        }

        if (Object.keys(scope.size).length !== 0) {
          angular.forEach(scope.size, function (value, key) {
            var className = mvGridService.generateSizeClass(key, value);
            iElement.addClass(className);
          });
        }

        if (Object.keys(scope.layoutPush).length !== 0) {
          angular.forEach(scope.layoutPush, function (value, key) {
            var className = mvGridService.generateAlignClass(key, value, 'push');
            iElement.addClass(className);
          });
        }

        if (Object.keys(scope.layoutPull).length !== 0) {
          angular.forEach(scope.layoutPull, function (value, key) {
            var className = mvGridService.generateAlignClass(key, value, 'pull');
            iElement.addClass(className);
          });
        }

        transclude(scope.$new(), function (clone) {
          iElement.append(clone);
        });
      }
    };
  }]);
