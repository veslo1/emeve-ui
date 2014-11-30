app.directive('mvUi.pageheader', [function () {
  return {
    restrict: 'C',
    templateUrl: '../../views/directives/mv-pageheader.html',
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