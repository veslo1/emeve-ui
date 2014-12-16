angular.module('mvUi.Icon',[])
  .directive('mvI',[function(){
    return {
      restrict: 'EAC',
      template: '<i class="{{prefix}} {{prefix}}-{{icon}}"></i>',
      scope:{
        icon: '@',
        prefix:'@'
      },
      link: function(scope,element,attr){
        scope.icon = angular.isDefined(scope.icon) ? scope.icon : false;
        scope.prefix = angular.isDefined(scope.prefix) ? scope.prefix : 'fa';

        if(!element.hasClass('mv-icon')){
          element.addClass('mv-icon')
        }
      }
    };
  }]);