angular.module('mvUi.PageHeader', [])
  .directive('mvPageHeader', [
    '$templateCache',
    function ($templateCache) {
  return {
    restrict: 'C',
    template: $templateCache.get('mv-pageheader.html'),
    scope: {
      title: '@',
      icon: '@'
    },
    transclude: true,
    link: function (scope, element, attrs) {
      scope.icon = angular.isDefined(scope.icon) ? scope.icon : false;
    }
  };
}]);
