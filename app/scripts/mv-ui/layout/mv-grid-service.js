angular.module('mvUi.Layout.Service', [
  'mvUi.Config'
]).service('mvGridService', [
  'mvConfigService',
  function (mvConfig) {

    this.generateSizeClass = function (type, size) {
      var className = type + '-' + size;
      return className;
    };

    this.generateAlignClass = function (type, size, adjustment) {
      var className = type + '-' + adjustment + '-' + size;
      return className;
    };
  }]);
