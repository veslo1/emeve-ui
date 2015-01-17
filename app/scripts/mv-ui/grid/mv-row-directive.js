angular.module('mvUi.Grid.Row', [
  'mvUi.Config',
  'mvUi.Grid.Service'
]).directive('mvRow', [
  'mvConfigService',
  'mvGridService',
  '$parse',
  function (mvConfig, mvGridService, $parse) {
    return {
      restrict: 'EA',
      transclude: true,
      link: function (scope, iElement, iAttrs, ctrl, transclude) {
        var componentConfig = mvConfig.config.component.grid.row;
        scope.layoutFill = (angular.isDefined(iAttrs.fill)) ? JSON.parse(iAttrs.layoutFill) : false;

        iElement.append(transclude());

        if (!iElement.hasClass(componentConfig.cssClass)) {
          iElement.addClass(componentConfig.cssClass);
        }

        if (scope.layoutFill) {
          var max = iElement[0].offsetHeight;
          angular.forEach(iElement[0].children, function (value) {
            angular.element(value).css('height', max + 'px');
          });
        }
      }
    };
  }]);

/*

 .directive('mvRow', [function () {
 return {
 restrict: 'EA',
 template: '',
 transclude: true,
 link: function (scope, element, attrs, mvRowCtrl, transclude) {
 scope.layoutFill = (angular.isDefined(attrs.fill)) ? JSON.parse(attrs.layoutFill) : false;
 element.append(transclude());

 if(!element.hasClass('mv-row')){
 element.addClass('mv-row');
 }

 if (scope.layoutFill) {
 var max = element[0].offsetHeight;
 angular.forEach(element[0].children, function (value) {
 angular.element(value).css('height', max + 'px');
 });
 }

 }
 };
 }])*/
