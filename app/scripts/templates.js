angular.module("mvUi.Template",[]).run(["$templateCache",function(n){n.put("mv-switch-nav.html",'<ul>\r\n  <li ng-repeat="slide in slides">\r\n    <button type="button" ng-click="selectSlide(slide.title)">{{slide.title}}</button>\r\n  </li>\r\n</ul>\r\n'),n.put("mv-ui/checklist.html",'<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">\n  <strong ng-show="showValue">{{ngModel}}</strong>\n</span>\n<div class="mv-control-button-area">\n  <button class="mv-btn" type="button"\n          ng-switch="setup"\n          ng-click="setupToggle($event)">\n    <mv-i name="angle-down" ng-switch-when="false"></mv-i>\n    <mv-i name="angle-up" ng-switch-when="true"></mv-i>\n  </button>\n</div>\n<mv-container class="mv-control-setup-area" ng-class="{open:setup}">\n  <mv-row ng-repeat="item in options">\n    <mv-col size="{xs:10}">\n      <label for="{{id}}-{{$index}}">{{item.label}}</label>\n    </mv-col>\n    <mv-col size="{xs:2}" class="mv-control-area">\n      <input type="checkbox" class="mv-control-checkbox" id="{{id}}-{{$index}}"\n             ng-click="select($index,item,$event)"/>\n    </mv-col>\n  </mv-row>\n</mv-container>\n\n'),n.put("mv-ui/file.html",'<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">\n  <strong  ng-show="showValue">{{value}}</strong>\n</span>\n<div class="mv-control-button-area">\n  <button type="button" class="mv-btn"\n          ng-click="setupToggle($event)">\n    <mv-i name="{{btnIcon}}"></mv-i>\n  </button>\n</div>\n<div class="mv-control-setup-area" ng-class="{open:setup}">\n  <ul>\n    <li ng-if="files.length>0" ng-repeat="file in files">\n      {{file.name}}\n    </li>\n  </ul>\n  <div class="mv-control-file-area">\n    <input type="file" name="fileName"/>\n  </div>\n  <button class="mv-btn mv-control-file-button" type="button" ng-click="upload($event)">\n    <mv-i name="cloud-upload"></mv-i> Upload\n  </button>\n</div>\n'),n.put("mv-ui/input.html",'<!--Info (Information)-->\n<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label for="{{id}}-control">{{label}}</label>\n<input type="{{type}}" name="{{name}}" id="{{id}}-control" class="mv-control-input"\n       ng-model="ngModel"/>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-ui/radiogroup.html",'<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">\n  <strong  ng-show="showValue">{{value}}</strong>\n</span>\n<div class="mv-control-button-area">\n  <button class="mv-btn" type="button"\n          ng-switch="setup"\n          ng-click="setupToggle($event)">\n    <mv-i name="angle-down" ng-switch-when="false"></mv-i>\n    <mv-i name="angle-up" ng-switch-when="true"></mv-i>\n  </button>\n</div>\n<ul class="mv-control-setup-area mv-container-fluid" ng-class="{open:setup}">\n  <li ng-repeat="item in options">\n    <label for="{{id}}-{{$index}}">\n    <mv-row>\n    <div class="mv-col xs-10">\n      {{item.label}}\n    </div>\n    <div class="mv-control-area mv-col xs-2">\n      <input type="radio" name="{{name}}" class="mv-control-radio" id="{{id}}-{{$index}}"\n        ng-click="select($index,item,$event)"/>\n    </div>\n    </mv-row>\n    </label>\n  </li>\n</ul>\n'),n.put("mv-ui/select.html",'<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label for="{{id}}-control">{{label}}</label>\n<select id="{{id}}-control" name="{{name}}" class="mv-control-select"\n        ng-model="ngModel"\n        ng-options="a.{{col}} for a in options">\n</select>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-ui/text.html",'<!--Info (Information)-->\n<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">{{ngModel}}</span>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-ui/control/mv-toggle.html",'<!--<div class="mv-control mv-control-toggle mv-control-button">-->\n  <mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n  <label for="{{id}}-control">{{label}}</label>\n\n  <div class="mv-control-value" ng-switch="setup">\n    <span ng-switch-when="false">{{off}}</span>\n    <span ng-switch-when="true">{{on}}</span>\n  </div>\n  <div>\n    <input type="checkbox" id="{{id}}-control" name="toggleName" class="mv-control-toggle"\n           ng-model="ngModel"/>\n  </div>\n  <div class="mv-control-button-area">\n    <button class="mv-btn" type="button"\n            ng-switch="setup"\n            ng-click="setupToggle($event)">\n      <mv-i class="mv-btn-off" name="toggle-off" ng-switch-when="false"></mv-i>\n      <mv-i class="mv-btn-on" name="toggle-on" ng-switch-when="true"></mv-i>\n    </button>\n  </div>\n<!--</div>-->\n'),n.put("mv-ui/window/modal-header.html",'<button mv-btn data-component class="close" data-color="error" aria-label="fechar" ng-click="close($event)"><span aria-hidden="true">&times;</span></button>\n<h4 class="mv-modal-title" ng-transclude></h4>\n'),n.put("mv-ui/window/modal.html",'<div class="mv-modal-dialog">\n  <section class="mv-modal-content" ng-transclude>\n\n  </section><!-- /.modal-content -->\n</div><!-- /.modal-dialog -->\n')}]);