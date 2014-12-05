angular.module('mvUi.Dropdown', [])
  .directive('mvDropdown', ['$document', function ($document) {
    return {
      restrict: 'C',
      controller: function ($scope, $element, $attrs) {
        $scope.isOpen = false;

        $scope.addCaret = function () {
          var caret = angular.element('<i>');
          caret.addClass('fa');
          caret.addClass('fa-ellipsis-v');
          return caret;
        };

        this.open = function ($event) {
          $scope.isOpen = !$scope.isOpen;
          $scope.$apply(function () {
            $element.toggleClass('open', $scope.isOpen);
          });
        };

      },
      link: function (scope, element, attrs, DropdownCtrl) {
        var btn = angular.element(element.children()[0]);
        var menu = angular.element(element.children()[1]);
        var doOpen = function ($event) {
          if ($event) {
            $event.stopPropagation();
          }
          DropdownCtrl.open();
          $document.bind('click', DropdownCtrl.open);
        };

        //WAI ARIA
        element.attr({'aria-haspopup': true, 'aria-expanded': false});

        //Botão
        btn.append(scope.addCaret());
        btn.bind('click', doOpen);

        scope.$watch('isOpen', function (isOpen) {
          element.attr('aria-expanded', isOpen);
          if (!isOpen) {
            $document.unbind('click', DropdownCtrl.open);
          }
        }, true);

        scope.$on('$destroy', function () {
          btn.unbind('click', scope.open);
          $document.unbind('click', DropdownCtrl.open);
        });
      }
    };
  }]);
