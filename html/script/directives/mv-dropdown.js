angular.module('EmeveUiApp')
  .directive('mvDropdown', function ($rootScope) {
    return {
      restrict: 'C',
      scope:false,
      controller: function ($scope, $element, $attrs) {
        $scope.isOpen = false;

        $scope.open = function ($event) {
          $scope.isOpen = !$scope.isOpen;
          $scope.$apply(function () {
            $element.toggleClass('open', $scope.isOpen);
          });
          return $scope.isOpen;
        };
      },
      link: function (scope, element, attrs, ctrl) {
        var btn = angular.element(element.children()[0]);
        var menu = angular.element(element.children()[1]);

        //adicionar caret
        var caret = angular.element('<i>');
        caret.addClass('fa');
        caret.addClass('fa-ellipsis-v');
        btn.append(caret);

        var doOpen = function ($event) {
          $event.preventDefault();
          scope.open();
        };

        //Abertura do menu
        btn.bind('click', doOpen);
        element.bind('focusout',doOpen);

        scope.$on('$destroy', function() {
          btn.unbind('click', doOpen);
          element.unbind('focusout', doOpen);
        });
      }
    };
  });


