angular.module('mvUi.Control.File', [
  'mvUi.Config',
  'mvUi.Control.Controller',
  'mvUi.Control.Service'
]).directive('mvControlFile', [
  'mvConfigService',
  'mvControlFileService',
  '$templateCache',
  function (mvConfig, mvControlFileService, $templateCache) {
    return {
      restrict: 'A',
      template: $templateCache.get('mv-ui/control/mv-file.html'),
      require: ['?^ngModel'],
      scope: {
        id: '@',
        icon: '@',
        url: '@',
        btnIcon: '@',
        ngModel: '='
      },
      transclude:true,
      controller: 'MVControlController',
      link: function (scope, iElement, iAttr, ctrl, transclude) {
        scope.ngModel = angular.isDefined(scope.ngModel) && angular.isArray(scope.ngModel) ? scope.ngModel : [];
        scope.btnIcon = angular.isDefined(scope.btnIcon) ? scope.btnIcon : 'paperclip';
        scope.files = [];
        scope.value = '';

        var ngModelController = ctrl[0];

        var inputFile = iElement.find('input');

        if(angular.isDefined(iAttr.label)){
          var label = iElement.find('label');
          label.attr('for',inputFile.attr('id'));
        }

        inputFile.bind('change', function () {
          scope.files = inputFile[0].files;
          scope.value = scope.files[0].name;
          ngModelController.$setViewValue(scope.files);
          scope.$apply();
        });

        scope.init(iElement, ['file','button','setup']);
      }
    };
  }])
.directive('mvControlFileUpload', [
  'mvConfigService',
  'mvControlFileService',
  '$templateCache',
  function (mvConfig, mvControlFileService, $templateCache) {
    return {
      restrict: 'A',
      template: $templateCache.get('mv-ui/control/mv-filelist.html'),
      require: ['?^ngModel'],
      scope: {
        id: '@',
        icon: '@',
        url: '@',
        btnIcon: '@',
        ngModel: '='
      },
      transclude:true,
      controller: 'MVControlController',
      link: function (scope, iElement, iAttr, ctrl, transclude) {
        scope.ngModel = angular.isDefined(scope.ngModel) && angular.isArray(scope.ngModel) ? scope.ngModel : [];
        scope.btnIcon = angular.isDefined(scope.btnIcon) ? scope.btnIcon : 'paperclip';
        scope.files = [];
        var ngModelController = ctrl[0];


        var inputFile = iElement.find('input');

        if(angular.isDefined(iAttr.label)){
          var label = iElement.find('label');
          label.attr('for',inputFile.attr('id'));
        }

        if(iAttr.multiple){
          inputFile.attr('multiple');
        }

        inputFile.bind('change', function () {
          scope.files = inputFile[0].files;
          console.log(scope.files);
          scope.$apply();
        });

        scope.upload = function ($event) {
          $event.preventDefault();
          mvControlFileService.upload(scope.url, scope.files);
        };

        scope.init(iElement, ['file','button','setup']);
      }
    };
  }]);
