angular.module('mvUi.Control', [
  'mvUi.Control.Service',
  'mvUi.Control.Controller',
  'mvUi.Control.Toggle',
  'mvUi.Control.Info',
  'mvUi.Control.Input',
  'mvUi.Control.Select',
  'mvUi.Control.Checklist',
  'mvUi.Control.RadioGroup'
]);



/*

  .directive('mvRadioGroup', [
    '$templateCache',
    function ($templateCache) {
      return {
        restrict: 'E',
        template: $templateCache.get('mv-control/radiogroup.html'),
        scope: {
          label: '@',
          icon: '@',
          id: '@',
          name: '@',
          showValue: '@',
          options: '=',
          ngModel: '='
        },
        transclude: true,
        controller: 'MvControlController',
        link: function (scope, iElement, iAttr, mvCtrl) {
          scope.enableIcon = false;
          scope.setup = mvCtrl.getSetup();
          scope.showValue = angular.isDefined(scope.showValue) ? !!scope.showValue : true;
          scope.value = '';
          scope.ngModel = angular.isDefined(scope.ngModel) ? scope.ngModel : [];
          scope.name = angular.isDefined(scope.name) ? scope.name : scope.id;

          scope.setupToggle = function ($event) {
            scope.setup = mvCtrl.setupToggle($event);
          };

          scope.select = function (index, item, $event) {
            scope.ngModel = item;
            scope.value = item.label;
          };

          //init
          mvCtrl.checkMainClass();
          mvCtrl.setupFunctionality('radiogroup');
          mvCtrl.setupFunctionality('button');
          mvCtrl.setupFunctionality('setup');

          //enable icon
          if (angular.isDefined(scope.icon)) {
            mvCtrl.setupFunctionality('icon');
            scope.enableIcon = true;
          }
        }
      };
    }])
  .directive('mvFile', [
    '$templateCache','mvControlFileService',
    function ($templateCache, mvControlFileService) {
      return {
        restrict: 'E',
        template: $templateCache.get('mv-control/file.html'),
        scope: {
          label: '@',
          icon: '@',
          btnIcon: '@',
          id: '@',
          url: '@',
          name: '@',
          showValue: '@',
          multiple: '@',
          options: '=',
          ngModel: '='
        },
        transclude: true,
        controller: 'MvControlController',
        link: function (scope, iElement, iAttr, mvCtrl) {
          scope.enableIcon = false;
          scope.value = '';
          scope.setup = mvCtrl.getSetup();
          scope.showValue = angular.isDefined(scope.showValue) ? !!scope.showValue : true;
          scope.ngModel = angular.isDefined(scope.ngModel) ? scope.ngModel : [];
          scope.name = angular.isDefined(scope.name) ? scope.name : scope.id;
          scope.btnIcon = angular.isDefined(scope.btnIcon) ? scope.btnIcon : 'paperclip';
          scope.multiple = angular.isDefined(scope.multiple) ? true : false;
          scope.files = [];
          var inputFile = iElement.find('input');

          inputFile.bind('change', function () {
            scope.files = inputFile[0].files;
            scope.$apply();
          });

          if(scope.multiple){
            inputFile.attr('multiple');
          }

          scope.upload = function ($event) {
            $event.preventDefault();
            mvControlFileService.upload(scope.url, scope.files);
          };

          scope.setupToggle = function ($event) {
            scope.setup = mvCtrl.setupToggle($event);
          };

          //init
          mvCtrl.checkMainClass();
          mvCtrl.setupFunctionality('file');
          mvCtrl.setupFunctionality('button');
          mvCtrl.setupFunctionality('setup');

          //enable icon
          if (angular.isDefined(scope.icon)) {
            mvCtrl.setupFunctionality('icon');
            scope.enableIcon = true;
          }
        }
      };
    }]);
*/

/*
 .directive('mvInfo', [
 '$templateCache',
 function ($templateCache) {
 return {
 restrict: 'E',
 template: $templateCache.get('mv-control/text.html'),
 scope: {
 display: '@',
 label: '@',
 icon: '@',
 ngModel: '='
 },
 transclude: true,
 controller: 'MvControlController',
 link: function (scope, iElement, iAttr, mvCtrl) {
 var control = iElement.find('input');
 scope.enableIcon = false;

 //init
 mvCtrl.checkMainClass();
 control.addClass(mvCtrl.genSubClass('info'));

 //enable icon
 if (angular.isDefined(scope.icon)) {
 mvCtrl.setupFunctionality('icon');
 scope.enableIcon = true;
 }
 }
 };
 }])


 .directive('mvInput', [
 '$templateCache',
 function ($templateCache) {
 return {
 restrict: 'E',
 template: $templateCache.get('mv-control/input.html'),
 scope: {
 label: '@',
 icon: '@',
 id: '@',
 type: '@',
 //name: '@',
 ngModel: '='
 },
 extend: 'input',
 transclude: true,
 controller: 'MvControlController',
 link: function (scope, iElement, iAttr, mvCtrl) {
 var control = iElement.find('input');
 scope.enableIcon = false;
 scope.type = angular.isDefined(scope.type) ? scope.type : 'text';

 //init
 mvCtrl.checkMainClass();
 control.addClass(mvCtrl.genSubClass(scope.type));

 //enable icon
 if (angular.isDefined(scope.icon)) {
 mvCtrl.setupFunctionality('icon');
 scope.enableIcon = true;
 }

 }
 };
 }])


 .directive('mvSelect', [
 '$templateCache',
 function ($templateCache) {
 return {
 restrict: 'E',
 template: $templateCache.get('mv-control/select.html'),
 scope: {
 label: '@',
 icon: '@',
 id: '@',
 name: '@',
 col: '@',
 options: '=',
 ngModel: '='
 },
 transclude: true,
 controller: 'MvControlController',
 link: function (scope, iElement, iAttr, mvCtrl) {
 scope.enableIcon = false;

 //init
 mvCtrl.checkMainClass();
 mvCtrl.setupFunctionality('toggle');
 mvCtrl.setupFunctionality('button');

 //enable icon
 if (angular.isDefined(scope.icon)) {
 mvCtrl.setupFunctionality('icon');
 scope.enableIcon = true;
 }
 }
 };
 }])

 .directive('mvCheckList', [
 '$templateCache',
 function ($templateCache) {
 return {
 restrict: 'E',
 template: $templateCache.get('mv-control/checklist.html'),
 scope: {
 label: '@',
 icon: '@',
 id: '@',
 showValue: '@',
 options: '=',
 ngModel: '='
 },
 transclude: true,
 controller: 'MvControlController',
 link: function (scope, iElement, iAttr, mvCtrl) {
 //scope.enableIcon = false;
 scope.setup = mvCtrl.getSetup();
 scope.showValue = angular.isDefined(scope.showValue) ? !!scope.showValue : false;
 scope.ngModel = angular.isDefined(scope.ngModel) ? scope.ngModel : [];

 scope.setupToggle = function ($event) {
 scope.setup = mvCtrl.setupToggle($event);
 };

 scope.select = function (index, item, $event) {
 //var itemIndex = scope.ngModel.indexOf(item);

 if (index === -1) {
 scope.ngModel.splice(index, 0, item);
 } else {
 scope.ngModel.splice(index, 1);
 }
 };

 //init
 mvCtrl.checkMainClass();
 mvCtrl.setupFunctionality('checklist');
 mvCtrl.setupFunctionality('button');
 mvCtrl.setupFunctionality('setup');

 //enable icon
 if (angular.isDefined(scope.icon)) {
 mvCtrl.setupFunctionality('icon');
 scope.enableIcon = true;
 }
 }
 };
 }])
 */
