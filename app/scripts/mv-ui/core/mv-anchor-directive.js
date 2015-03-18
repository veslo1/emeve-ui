angular.module('mvUi.Core.Anchor', [
  'mvUi.Config'
])
  .directive('mvAnchor', [
    'mvConfigService', '$location', '$anchorScroll',
    function (mvConfig, $location, $anchorScroll) {
      return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) {
          scope.anchorClick = function ($event) {
            //$event.preventDefault();

            $location.hash(iAttrs.mvAnchor);
            $anchorScroll();
          };

          iElement.bind('click', scope.anchorClick);

          scope.$on('$destroy', function ($event) {
            iElement.unbind('click', scope.anchorClick);
          })
        }
      };
    }]);
