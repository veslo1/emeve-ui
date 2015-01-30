angular.module('mvUi.Control.Editor', [
  'mvUi.Config',
  'mvUi.Control.Controller',
  'froala'
]).directive('mvControlEditor', [
  'mvConfigService',
  '$templateCache',
  function (mvConfig, $templateCache) {
    return {
      restrict: 'A',
      template: $templateCache.get('mv-ui/control/mv-editor.html'),
      require: ['?^ngModel'],
      scope: {
        icon: '@',
        btnIcon: '@',
        inlineMode: '@',
        ngModel: '=',
        options: '=?'
      },
      transclude: true,
      controller: 'MVControlController',
      link: function (scope, iElement, iAttr, ctrl, transclude) {
        scope.btnIcon = angular.isDefined(scope.btnIcon) ? scope.btnIcon : 'pencil';
        scope.inlineMode = angular.isDefined(scope.inlineMode) ? !!scope.inlineMode : true;
        scope.ngModel = angular.isDefined(scope.ngModel) ? scope.ngModel : undefined;
        scope.options = angular.isDefined(scope.options) ? scope.options : {};
        scope.setupArea = true;

        var compConfig = mvConfig.config.component.editor;
        var control = iElement.find('textarea');

        scope.toogleToolbarMode = function ($event) {
          scope.inlineMode = !scope.inlineMode;
          var opt = angular.extend({},compConfig.options,{'inlineMode': scope.inlineMode});
          control.editable('destroy');
          control.editable(opt);
        };
        scope.init(iElement, ['editor', 'button', 'setup']);
      }
    };
  }]);
