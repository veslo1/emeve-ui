angular.module('mvUi.Switch', [])
  .directive('mvTabContainer', ['$parse', '$compile', function ($parse, $compile) {
    return {
      restrict: 'EC',
      template: '',
      transclude: true,
      controller: function ($scope, $element, $attrs) {
        /**
         * Aba ativa
         * @type {number}
         */
        $scope.active = 0;

        /**
         * menu
         * @type {Array}
         */
        $scope.nav = [];


      },
      link: function (scope, element, attrs) {

      }
    };
  }]);

