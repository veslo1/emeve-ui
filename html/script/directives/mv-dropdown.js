angular.module('EmeveUiApp')
  .directive('mvDropdowna', function ($rootScope) {
    return {
      restrict: 'A',
      controller: function ($scope, $element, $attrs) {
        $scope.isOpen = false;

        this.addCaret = function(){
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
          return $scope.isOpen;
        };
      },
      link: function (scope, element, attrs, DropdowCtrl) {
        var btn = angular.element(element.children()[0]);
        var menu = angular.element(element.children()[1]);

        //adicionar caret
        btn.append(DropdowCtrl.addCaret());

        var doOpen = function ($event) {
          $event.preventDefault();
          DropdowCtrl.open();
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


angular.module('EmeveUiApp')
.directive('mvD',function(){
    return {
      restrict: 'C',
      link: function(scope,element,attrs,ctrl){
        scope.vai();
      }
    }
  });
