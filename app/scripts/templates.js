(function(module) {
try {
  module = angular.module('mvApp');
} catch (e) {
  module = angular.module('mvApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/directives/mv-pageheader.html',
    '<h2 class="mv-page-title"><span class="title-icon" data-ng-if="icon"><i class="fa fa-{{icon}}"></i></span> <span class="title-label">{{title}}</span></h2><div class="content-wrapper" data-ng-transclude=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('mvApp');
} catch (e) {
  module = angular.module('mvApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/directives/mv-switch-nav.html',
    '<ul><li data-ng-repeat="slide in slides"><button type="button" data-ng-click="selectSlide(slide.title)">{{slide.title}}</button></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('mvApp');
} catch (e) {
  module = angular.module('mvApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/directives/mv-control/checklist.html',
    '<mv-i data-ng-if="enableIcon" icon="{{icon}}"></mv-i><label>{{label}}</label> <span class="mv-control-value"><strong data-ng-show="showValue">{{ngModel}}</strong></span><div class="mv-control-button-area"><button class="mv-btn" type="button" data-ng-switch="setup" data-ng-click="setupToggle($event)"><mv-i icon="angle-down" data-ng-switch-when="false"></mv-i><mv-i icon="angle-up" data-ng-switch-when="true"></mv-i></button></div><ul class="mv-control-setup-area mv-container-fluid" data-ng-class="{open:setup}"><li data-ng-repeat="item in options"><label for="{{id}}-{{$index}}"><mv-row><div class="mv-col xs-10">{{item.label}}</div><div class="mv-control-area mv-col xs-2"><input type="checkbox" class="mv-control-checkbox" id="{{id}}-{{$index}}" data-ng-click="select($index,item,$event)"></div></mv-row></label></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('mvApp');
} catch (e) {
  module = angular.module('mvApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/directives/mv-control/file.html',
    '<mv-i data-ng-if="enableIcon" icon="{{icon}}"></mv-i><label>{{label}}</label> <span class="mv-control-value"><strong data-ng-show="showValue">{{value}}</strong></span><div class="mv-control-button-area"><button type="button" class="mv-btn" data-ng-click="setupToggle($event)"><mv-i icon="{{btnIcon}}"></mv-i></button></div><div class="mv-control-setup-area" data-ng-class="{open:setup}"><ul><li data-ng-if="files.length>0" data-ng-repeat="file in files">{{file.name}}</li></ul><div class="mv-control-file-area"><input type="file" name="fileName"></div><button class="mv-btn mv-control-file-button" type="button" data-ng-click="upload($event)"><mv-i icon="cloud-upload"></mv-i>Upload</button></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('mvApp');
} catch (e) {
  module = angular.module('mvApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/directives/mv-control/input.html',
    '<mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i><label for="{{id}}-control">{{label}}</label> <input type="{{type}}" name="{{name}}" id="{{id}}-control" class="mv-control-input" ng-model="ngModel"><div ng-transclude=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('mvApp');
} catch (e) {
  module = angular.module('mvApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/directives/mv-control/radiogroup.html',
    '<mv-i data-ng-if="enableIcon" icon="{{icon}}"></mv-i><label>{{label}}</label> <span class="mv-control-value"><strong data-ng-show="showValue">{{value}}</strong></span><div class="mv-control-button-area"><button class="mv-btn" type="button" data-ng-switch="setup" data-ng-click="setupToggle($event)"><mv-i icon="angle-down" data-ng-switch-when="false"></mv-i><mv-i icon="angle-up" data-ng-switch-when="true"></mv-i></button></div><ul class="mv-control-setup-area mv-container-fluid" data-ng-class="{open:setup}"><li data-ng-repeat="item in options"><label for="{{id}}-{{$index}}"><mv-row><div class="mv-col xs-10">{{item.label}}</div><div class="mv-control-area mv-col xs-2"><input type="radio" name="{{name}}" class="mv-control-radio" id="{{id}}-{{$index}}" data-ng-click="select($index,item,$event)"></div></mv-row></label></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('mvApp');
} catch (e) {
  module = angular.module('mvApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/directives/mv-control/select.html',
    '<mv-i data-ng-if="enableIcon" icon="{{icon}}"></mv-i><label for="{{id}}-control">{{label}}</label><select id="{{id}}-control" name="{{name}}" class="mv-control-select" data-ng-model="ngModel" data-ng-options="a.{{col}} for a in options"></select><div data-ng-transclude=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('mvApp');
} catch (e) {
  module = angular.module('mvApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/directives/mv-control/text.html',
    '<mv-i ng-if="enableIcon" icon="{{icon}}"></mv-i><label>{{label}}</label> <span class="mv-control-value">{{ngModel}}</span><div ng-transclude=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('mvApp');
} catch (e) {
  module = angular.module('mvApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/directives/mv-control/toggle.html',
    '<mv-i data-ng-if="enableIcon" icon="{{icon}}"></mv-i><label for="{{id}}-control">{{label}}</label><div class="mv-control-value" data-ng-switch="setup"><span data-ng-switch-when="false">{{off}}</span> <span data-ng-switch-when="true">{{on}}</span></div><div><input type="checkbox" id="{{id}}-control" name="toggleName" class="mv-control-toggle" data-ng-model="ngModel"></div><div class="mv-control-button-area"><button class="mv-btn" type="button" data-ng-switch="setup" data-ng-click="setupToggle($event)"><mv-i class="mv-btn-off" icon="toggle-off" data-ng-switch-when="false"></mv-i><mv-i class="mv-btn-on" icon="toggle-on" data-ng-switch-when="true"></mv-i></button></div>');
}]);
})();
