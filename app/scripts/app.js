var mvUi = angular.module('mvUi', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'mvUi.Config',
  'mvUi.Core',
  'mvUi.Template',
  //'mvUi.Control', //review
  //'mvUi.Control.Toggle', //remove
  //'mvUi.Dropdown', //review
  'mvUi.Form',
  'mvUi.Layout', //review
  'mvUi.Table',
  //'mvUi.Tooltip', //review
  //'mvUi.Progress', // review
  //'mvUi.Switch' //review
]);

mvUi.constant("Modernizr", Modernizr);
