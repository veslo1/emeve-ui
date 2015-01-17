angular.module('mvUi.Grid', [
'mvUi.Grid.Col',
  'mvUi.Grid.Row'
])
  .directive('mvContainer',[function(){
    return {
      restrict: 'EA',
      scope:{
        mode: '@'
      },
      link: function(scope,element,attrs){
        scope.mode = (angular.isDefined(scope.mode)) ? scope.mode : '';

        if(scope.mode === 'static'){
          element.addClass('container');
        }else{
          element.addClass('container-fluid');

        }
      }
    };
  }]);

