app.directive('mvUi.tooltip', [function () {
  return {
    restrict: 'C',
    templateUrl: '../../views/directives/mv-pageheader.html',
    scope: {
      title: '@',
      position: '@'
    },
    transclude: true,
    link: function (scope, element, attrs) {
      scope.position = angular.isDefined(scope.position) ? scope.position : 'top';

    }
  };
}]);
