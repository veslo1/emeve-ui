angular.module('mvUi.Control.Controller', [
  'mvUi.Config',
  'mvUi.Control.Service'
]).controller('mvControlController', [
  '$scope',
  '$element',
  '$attrs',
  'mvConfigService',
  function ($scope, $element, $attrs, mvConfig) {

    var self = this;

    /** @type {mvUi.config.component.control|*}*/
    $scope.componentConfig = mvConfig.config.component.control;

    /**
     * Open setup area
     * @type {boolean}
     */
    $scope.setupArea = false;

    /**
     * Habilita ícones
     * @type {boolean}
     */
    $scope.enableIcon = false;
    $scope.icon = angular.isDefined($attrs.icon) ? $attrs.icon : undefined;

    /**
     * Label of controller
     * @type {string}
     */
    $scope.label = angular.isDefined($attrs.label) ? $attrs.label : undefined;


    /**
     * Toggle setup area
     * @param value Actual value of setup
     * @returns retorna o valor do próprio setup
     */
    $scope.toggleSetupArea = function ($event) {
      $event.preventDefault();
      $scope.setupArea = !$scope.setupArea;
      return $scope.setupArea;
    };

    /**
     * Analize if the class mv-control exist
     */
    $scope.checkMainClass = function () {
      if (!$element.hasClass($scope.componentConfig.cssClass)) {
        $element.addClass($scope.componentConfig.cssClass);
      }
    };

    /**
     * Enable a property for display use. It let to css customize the component
     * @param property class to increment
     */
    $scope.setupFunctionality = function (property) {
      $element.addClass($scope.componentConfig.cssClass + '-' + property);
    };


    /**
     * Generate subclass for use in element
     * @param subclass
     * @returns {string}
     */
    $scope.generateSubClass = function (subclass) {
      return $scope.componentConfig.cssClass + '-' + subclass;
    };

    /**
     * Enable common configuration
     * @param control iElement
     * @param subclass Array de subclasses
     */
    $scope.init = function (control, subclass) {
      $scope.checkMainClass();
      $scope.setupIcon();
      angular.forEach(subclass, function (sc) {
        control.addClass($scope.generateSubClass(sc));
      });
    };

    /**
     * Enable a icon to apear in directive
     */
    $scope.setupIcon = function () {
      if (angular.isDefined($scope.icon)) {
        this.setupFunctionality('icon');
        $scope.enableIcon = true;
      }
    };

  }]);
