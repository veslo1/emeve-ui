angular.module('EmeveUiApp')
  .directive('mvDropdown', function () {
    return {
      restrict: 'C',
      controller: function ($scope, $element, $attrs) {
        this.isOpen = false;

        this.addCaret = function(){
          var caret = angular.element('<i>');
          caret.addClass('fa');
          caret.addClass('fa-ellipsis-v');
          return caret;
        };

        this.open = function ($event) {
          this.isOpen = !this.isOpen;
          $scope.$apply(function () {
            $element.toggleClass('open', this.isOpen);
          });
          return this.isOpen;
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
        //element.bind('focusout',doOpen);

        scope.$on('$destroy', function() {
          btn.unbind('click', doOpen);
          element.unbind('focusout', doOpen);
          scope.$destroy();
        });
      }
    };
  });


//atual
//angular.module('EmeveUiApp')
//  .directive('mvDropdown', function () {
//    return {
//      restrict: 'C',
//      controller: function ($scope, $element, $attrs) {
//        $scope.isOpen = false;
//
//        this.open = function ($event) {
//          $scope.isOpen = !$scope.isOpen;
//          $scope.$apply(function () {
//            $element.toggleClass('open', $scope.isOpen);
//          });
//          return $scope.isOpen;
//        };
//      },
//      link: function (scope, element, attrs, DropdowCtrl) {
//        var btn = angular.element(element.children()[0]);
//
//        element.addClass('dropdown')
//
//        var doOpen = function ($event) {
//          $event.preventDefault();
//          DropdowCtrl.open();
//        };
//
//        //Abertura do menu
//        btn.bind('click', doOpen);
//        //element.bind('focusout',doOpen);
//
//        scope.$on('$destroy', function() {
//          btn.unbind('click', doOpen);
//          element.unbind('focusout', doOpen);
//        });
//      }
//    };
//  });
