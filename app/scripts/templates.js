angular.module("mvUi.Template",[]).run(["$templateCache",function(n){n.put("mv-pageheader.html",'<h2 class="mv-page-title">\n  <span class="title-icon" ng-if="icon">\n    <i class="fa fa-{{icon}}"></i>\n  </span>\n  <span class="title-label">{{title}}</span>\n</h2>\n<div class="content-wrapper" ng-transclude>\n\n</div>\n'),n.put("mv-switch-nav.html",'<ul>\n  <li ng-repeat="slide in slides">\n    <button type="button" ng-click="selectSlide(slide.title)">{{slide.title}}</button>\n  </li>\n</ul>\n'),n.put("mv-control/check.html",'<mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">\n  <strong  ng-show="showValue">{{ngModel}}</strong>\n</span>\n<div class="mv-control-button-area">\n  <button class="mv-btn" type="button"\n          ng-switch="setup"\n          ng-click="setupToggle($event)">\n    <mv-i icon="angle-down" ng-switch-when="false"></mv-i>\n    <mv-i icon="angle-up" ng-switch-when="true"></mv-i>\n  </button>\n</div>\n<ul class="mv-control-setup-area mv-container-fluid" ng-class="{open:setup}">\n  <li ng-repeat="item in options">\n    <label for="{{id}}-{{$index}}">\n    <mv-row>\n    <div class="mv-col xs-10">\n      {{item.label}}\n    </div>\n    <div class="mv-control-area mv-col xs-2">\n      <input type="checkbox" class="mv-control-checkbox" id="{{id}}-{{$index}}"\n        ng-click="select($index,item,$event)"/>\n    </div>\n    </mv-row>\n    </label>\n  </li>\n</ul>\n'),n.put("mv-control/input.html",'<!--Info (Information)-->\n<mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i>\n<label for="{{id}}-control">{{label}}</label>\n<input type="{{type}}" name="{{name}}" id="{{id}}-control" class="mv-control-input"\n       ng-model="ngModel"/>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-control/select.html",'<mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i>\n<label for="{{id}}-control">{{label}}</label>\n<select id="{{id}}-control" name="{{name}}" class="mv-control-select"\n        ng-model="ngModel"\n        ng-options="a.{{col}} for a in options">\n</select>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-control/text.html",'<!--Info (Information)-->\n<mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">{{ngModel}}</span>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-control/toggle.html",'<!--<div class="mv-control mv-control-toggle mv-control-button">-->\n  <mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i>\n  <label for="{{id}}-control">{{label}}</label>\n\n  <div class="mv-control-value" ng-switch="setup">\n    <span ng-switch-when="false">{{off}}</span>\n    <span ng-switch-when="true">{{on}}</span>\n  </div>\n  <div>\n    <input type="checkbox" id="{{id}}-control" name="toggleName" class="mv-control-toggle"\n           ng-model="ngModel"/>\n  </div>\n  <div class="mv-control-button-area">\n    <button class="mv-btn" type="button"\n            ng-switch="setup"\n            ng-click="setupToggle($event)">\n      <mv-i class="mv-btn-off" icon="toggle-off" ng-switch-when="false"></mv-i>\n      <mv-i class="mv-btn-on" icon="toggle-on" ng-switch-when="true"></mv-i>\n    </button>\n  </div>\n<!--</div>-->\n')}]);