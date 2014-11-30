angular.module('mvUi.icon',[])
  .directive('mvIcon',[function(){
    return {
      restrict: 'EAC',
      scope:{
        icon: '@',
        prefix:'@'
      },
      link: function(scope,element,attr){
        scope.icon = angular.isDefined(scope.icon) ? scope.icon : false;
        scope.prefix = angular.isDefined(scope.prefix) ? scope.prefix : 'fa';

        element.addClass(scope.prefix);
        element.addClass(scope.prefix+'-' + scope.icon);
      }
    };
  }]);
