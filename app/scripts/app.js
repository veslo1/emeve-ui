var mvUi = angular.module('mvUi', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'mvUi.Config',
  'mvUi.Core',
  'mvUi.Template',
  'mvUi.Button', // review
  'mvUi.Control', //review
  'mvUi.Control.Toggle', //remove
  'mvUi.Dropdown', //review
  'mvUi.Form',
  'mvUi.Grid', //review
  'mvUi.Icon',
  'mvUi.Table',
  'mvUi.Tooltip', //review
  'mvUi.Progress', // review
  'mvUi.Switch' //review
]);

mvUi.constant("Modernizr",Modernizr);
