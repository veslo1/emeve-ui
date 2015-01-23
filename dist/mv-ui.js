var mvUi=angular.module("mvUi.Config",[]).service("mvConfigService",[function(){this.config={component:{btn:{cssClass:"mv-btn","default":{color:"default",component:"component"}},icon:{cssClass:"mv-icon","default":{prefix:"fa"}},form:{cssClass:"mv-form"},layout:{col:{cssClass:"mv-col"},container:{cssStrictClass:"mv-container",cssFluidClass:"mv-container-fluid","default":{mode:"fluid"}},item:{cssClass:"mv-item"},list:{cssClass:"mv-list"},row:{cssClass:"mv-row"}},menu:{dropdown:{cssClass:"mv-dropdown",css:{backdrop:"mv-dropdown-backdrop",header:"mv-dropdown-header",menu:"mv-dropdown-menu",left:"mv-dropdown-menu-left",right:"mv-dropdown-menu-right"}}},table:{cssClass:"mv-table","default":{normalize:["condensed","hover","striped"]}}}},this.getConfig=function(){return this.config}}]);angular.module("mvUi.Template",[]).run(["$templateCache",function(n){n.put("mv-switch-nav.html",'<ul>\r\n  <li ng-repeat="slide in slides">\r\n    <button type="button" ng-click="selectSlide(slide.title)">{{slide.title}}</button>\r\n  </li>\r\n</ul>\r\n'),n.put("mv-ui/checklist.html",'<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">\n  <strong ng-show="showValue">{{ngModel}}</strong>\n</span>\n<div class="mv-control-button-area">\n  <button class="mv-btn" type="button"\n          ng-switch="setup"\n          ng-click="setupToggle($event)">\n    <mv-i name="angle-down" ng-switch-when="false"></mv-i>\n    <mv-i name="angle-up" ng-switch-when="true"></mv-i>\n  </button>\n</div>\n<mv-container class="mv-control-setup-area" ng-class="{open:setup}">\n  <mv-row ng-repeat="item in options">\n    <mv-col size="{xs:10}">\n      <label for="{{id}}-{{$index}}">{{item.label}}</label>\n    </mv-col>\n    <mv-col size="{xs:2}" class="mv-control-area">\n      <input type="checkbox" class="mv-control-checkbox" id="{{id}}-{{$index}}"\n             ng-click="select($index,item,$event)"/>\n    </mv-col>\n  </mv-row>\n</mv-container>\n\n'),n.put("mv-ui/file.html",'<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">\n  <strong  ng-show="showValue">{{value}}</strong>\n</span>\n<div class="mv-control-button-area">\n  <button type="button" class="mv-btn"\n          ng-click="setupToggle($event)">\n    <mv-i name="{{btnIcon}}"></mv-i>\n  </button>\n</div>\n<div class="mv-control-setup-area" ng-class="{open:setup}">\n  <ul>\n    <li ng-if="files.length>0" ng-repeat="file in files">\n      {{file.name}}\n    </li>\n  </ul>\n  <div class="mv-control-file-area">\n    <input type="file" name="fileName"/>\n  </div>\n  <button class="mv-btn mv-control-file-button" type="button" ng-click="upload($event)">\n    <mv-i name="cloud-upload"></mv-i> Upload\n  </button>\n</div>\n'),n.put("mv-ui/input.html",'<!--Info (Information)-->\n<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label for="{{id}}-control">{{label}}</label>\n<input type="{{type}}" name="{{name}}" id="{{id}}-control" class="mv-control-input"\n       ng-model="ngModel"/>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-ui/radiogroup.html",'<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">\n  <strong  ng-show="showValue">{{value}}</strong>\n</span>\n<div class="mv-control-button-area">\n  <button class="mv-btn" type="button"\n          ng-switch="setup"\n          ng-click="setupToggle($event)">\n    <mv-i name="angle-down" ng-switch-when="false"></mv-i>\n    <mv-i name="angle-up" ng-switch-when="true"></mv-i>\n  </button>\n</div>\n<ul class="mv-control-setup-area mv-container-fluid" ng-class="{open:setup}">\n  <li ng-repeat="item in options">\n    <label for="{{id}}-{{$index}}">\n    <mv-row>\n    <div class="mv-col xs-10">\n      {{item.label}}\n    </div>\n    <div class="mv-control-area mv-col xs-2">\n      <input type="radio" name="{{name}}" class="mv-control-radio" id="{{id}}-{{$index}}"\n        ng-click="select($index,item,$event)"/>\n    </div>\n    </mv-row>\n    </label>\n  </li>\n</ul>\n'),n.put("mv-ui/select.html",'<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label for="{{id}}-control">{{label}}</label>\n<select id="{{id}}-control" name="{{name}}" class="mv-control-select"\n        ng-model="ngModel"\n        ng-options="a.{{col}} for a in options">\n</select>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-ui/text.html",'<!--Info (Information)-->\n<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">{{ngModel}}</span>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-ui/control/mv-toggle.html",'<!--<div class="mv-control mv-control-toggle mv-control-button">-->\n  <mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n  <label for="{{id}}-control">{{label}}</label>\n\n  <div class="mv-control-value" ng-switch="setup">\n    <span ng-switch-when="false">{{off}}</span>\n    <span ng-switch-when="true">{{on}}</span>\n  </div>\n  <div>\n    <input type="checkbox" id="{{id}}-control" name="toggleName" class="mv-control-toggle"\n           ng-model="ngModel"/>\n  </div>\n  <div class="mv-control-button-area">\n    <button class="mv-btn" type="button"\n            ng-switch="setup"\n            ng-click="setupToggle($event)">\n      <mv-i class="mv-btn-off" name="toggle-off" ng-switch-when="false"></mv-i>\n      <mv-i class="mv-btn-on" name="toggle-on" ng-switch-when="true"></mv-i>\n    </button>\n  </div>\n<!--</div>-->\n')}]),angular.module("EmeveUiApp.Controller",[]).controller("DefaultController",["$scope",function(n){n.list=["um","dois","tres"],n.options=[{url:"/",label:"Item 01"},{url:"/",label:"Item 02"},{url:"/",label:"Item 03"}],n.status="status",n.vai=function(){console.log(n.status)},n.setStatus=function(e){n.status=e}}]).controller("BtnController",["$scope",function(n){n.list=["um","dois","tres"],n.numSala=1,n.blastoise=!0}]).controller("IconController",["$scope","$http",function(n,e){n.icons=[],n.error=!1,n.criterio="",e.get("data/icons.json").success(function(e){n.icons=e.icons}).error(function(){n.icons=[],n.error=!0})}]).controller("FormController",["$scope",function(n){n.colors=[{name:"black",shade:"dark"},{name:"white",shade:"light"},{name:"red",shade:"dark"},{name:"blue",shade:"dark"},{name:"yellow",shade:"light"}],n.colorNames=[{label:"Vermelho",value:"#f00"},{label:"Verde",value:"#0f0"},{label:"Azul",value:"#00f"}],n.mvfData={version:"3.2.0b~Kernel2.5"}}]),angular.module("EmeveUiApp.Route",["ngRoute","ngAnimate"]).config(["$routeProvider",function(n){n.when("/",{templateUrl:"views/main.html",controller:"DefaultController"}).when("/btn",{templateUrl:"views/button.html",controller:"BtnController"}).when("/form",{templateUrl:"views/form.html",controller:"FormController"}).when("/control",{templateUrl:"views/form-control.html",controller:"FormController"}).when("/icon",{templateUrl:"views/icon.html",controller:"IconController"}).when("/:controller",{templateUrl:function(n){return"views/"+n.controller+".html"},controller:"DefaultController"}).otherwise({redirectTo:"/"})}]);var EmeveUiApp=angular.module("EmeveUiApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","EmeveUiApp.Controller","EmeveUiApp.Route","mvUi"]);angular.module("mvUi.Control",[]).service("mvControlFileService",["$http",function(n){this.response={},this.setResponse=function(n){return this.response=n,this.response},this.upload=function(e,i){n.post(e,i,{headers:{"Content-Type":"multipart/form-data"}}).success(function(n){return this.setResponse(n)}).error(function(n){return this.setResponse(n)})}}]).controller("MvControlController",["$scope","$element","$attrs",function(n,e){this.mainClass="mv-control",this.setup=!1,this.getSetup=function(){return this.setup},this.genSubClass=function(n){return this.mainClass+"-"+n},this.checkMainClass=function(){e.hasClass(this.mainClass)||e.addClass(this.mainClass)},this.setupFunctionality=function(n){e.addClass("mv-control-"+n)},this.setupToggle=function(n){return n.preventDefault(),this.setup=!this.setup,this.setup},this.init=function(n,e){this.checkMainClass(),angular.forEach(e,function(e){n.addClass(this.genSubClass(e))})}}]),angular.module("mvUi.Core",["mvUi.Core.Icon","mvUi.Core.IconList","mvUi.Core.IconStack","mvUi.Core.Btn","mvUi.Core.BtnRadio","mvUi.Core.BtnCheckbox"]),angular.module("mvUi.Form",["mvUi.Form.Form"]),angular.module("mvUi.Layout",["mvUi.Layout.Col","mvUi.Layout.Item","mvUi.Layout.List","mvUi.Layout.Row","mvUi.Layout.Container"]),angular.module("mvUi.Menu",["mvUi.Menu.Dropdown"]),angular.module("mvUi.Progress",[]).directive("mvProgressCirc",["Modernizr",function(n){return{restrict:"A",link:function(e,i){var a=75,t=5,o=i[0];if(n.canvas){var l=angular.element("<p/>");l.attr("style","display:block;position:absolute;padding:1em;top:0;width:"+o.width+"px;"),l.text("Sistema não possui suporte a Canvas"),i.after(l)}else{var s=o.getContext("2d"),r=o.width/2,c=o.height/2,u=o.width/o.height*100-t;s.beginPath(),s.arc(r,c,u,-1.5,Math.PI*(a/50)-1.5,!1),s.lineWidth=t,s.strokeStyle="#ff00cc",s.stroke()}}}}]),angular.module("mvUi.Switch",[]).directive("mvSwitch",["$compile",function(){return{restrict:"EAC",template:"<section ng-transclude></section>",transclude:!0,scope:{ngSwitch:"@"},controller:["$scope","$element","$attrs","$transclude",function(n){n.value="",this.slides=[],this.addSlide=function(n){this.slides.push(n)},this.selectSlide=function(e){n.ngSwitch=e}}],link:function(n,e,i,a){a.slides[0].title}}}]).directive("mvSwitchSlide",["$compile",function(){return{require:"^mvSwitch",restrict:"EAC",template:'<div ng-switch-when="{{title}}" ng-transclude></div>',transclude:!0,scope:{title:"@"},link:function(n,e,i,a){a.addSlide(n)}}}]).directive("mvSwitchNav",["$templateCache",function(n){return{require:"^mvSwitch",restrict:"EAC",template:n.get("mv-switch-nav.html"),transclude:!0,link:function(n,e,i,a){n.slides=a.slides,n.selectSlide=a.selectSlide}}}]),angular.module("mvUi.Table",["mvUi.Table.Table"]),angular.module("mvUi.Tooltip",[]).directive("mvTooltip",[function(){return{restrict:"C",templateUrl:"../../views/directives/mv-pageheader.html",scope:{title:"@",position:"@"},transclude:!0,link:function(n){n.position=angular.isDefined(n.position)?n.position:"top"}}}]),angular.module("mvUi.Control.Toggle",["mvUi.Control"]).directive("mvToggle",["$templateCache",function(n){return{restrict:"E",template:n.get("mv-control/toggle.html"),scope:{label:"@",icon:"@",off:"@",on:"@",ngModel:"="},transclude:!0,controller:"MvControlController",link:function(n,e,i,a){e.find("input");n.enableIcon=!1,n.setup=angular.isDefined(n.ngModel)?!!n.ngModel:a.getSetup(),n.on=angular.isDefined(n.on)?n.on:"On",n.off=angular.isDefined(n.off)?n.off:"Off",n.setupToggle=function(e){n.setup=a.setupToggle(e),n.ngModel=n.setup},a.checkMainClass(),a.setupFunctionality("toggle"),a.setupFunctionality("button"),angular.isDefined(n.icon)&&(a.setupFunctionality("icon"),n.enableIcon=!0)}}}]),angular.module("mvUi.Form.Form",["mvUi.Config"]).directive("mvForm",["mvConfigService",function(n){return{restrict:"A",extend:"^form",link:function(e,i,a){var t=n.config.component.form;i.hasClass(t.cssClass)||i.addClass(t.cssClass),angular.isDefined(a.alignIcon)&&i.addClass(t.cssClass+"-icon")}}}]),angular.module("mvUi.Core.BtnCheckbox",["mvUi.Config"]).directive("mvBtnCheckbox",["mvConfigService",function(){return{restrict:"C",require:["?ngModel"],scope:{active:"@?",on:"@?",off:"@?"},controller:["$scope","$element","$attrs",function(n){n.active=angular.isDefined(n.active)?n.active:"active"}],link:function(n,e,i,a){function t(){return l(i.on,!0)}function o(){return l(i.off,!1)}function l(e,i){var a=n.$eval(e);return angular.isDefined(a)?a:i}e.addClass("mv-btn");var s=a[0];s&&(s.$render=function(){e.toggleClass("active",angular.equals(s.$modelValue,t()))},e.bind("click",function(i){i.preventDefault(),n.$apply(function(){s.$setViewValue(e.hasClass("active")?o():t()),s.$render()})}))}}}]),angular.module("mvUi.Core.Btn",["mvUi.Config"]).directive("mvBtn",["mvConfigService",function(n){return{restrict:"A",link:function(e,i,a){var t=n.config.component.btn,o=t.default.color;e.color=angular.isDefined(a.color)?a.color.toLocaleLowerCase():o,e.icon=angular.isDefined(a.icon)?a.icon:!1,i.addClass(t.cssClass),i.addClass(e.color),angular.isDefined(a.border)&&i.addClass(a.border),angular.isDefined(a.component)&&i.addClass(t.default.component),angular.isDefined(a.disabled)&&i.addClass("disabled")}}}]),angular.module("mvUi.Core.BtnGroup",["mvUi.Config"]).directive("mvBtnGroup",["mvConfigService",function(n){return{restrict:"A",link:function(e,i,a){var t=n.config.component.btn,o=t.default.color;e.color=angular.isDefined(a.color)?a.color.toLocaleLowerCase():o,e.icon=angular.isDefined(a.icon)?a.icon:!1,e.active=angular.isDefined(a.active)?!!a.active:!1,i.addClass(t.cssClass),i.addClass(e.color),angular.isDefined(a.border)&&i.addClass(a.border),angular.isDefined(a.component)&&i.addClass(t.default.component),angular.isDefined(a.disabled)&&i.addClass("disabled")}}}]),angular.module("mvUi.Core.BtnRadio",["mvUi.Config"]).directive("mvBtnRadio",["mvConfigService",function(){return{restrict:"C",require:["?ngModel"],scope:{active:"@?",value:"@?"},link:function(n,e,i,a){e.addClass("mv-btn");var t=a[0];t&&(n.active=angular.isDefined(n.active)?n.active:"active",t.$render=function(){var i=angular.equals(t.$modelValue,n.$eval(n.value));e.toggleClass("active",i)},e.bind("click",function(i){var a=e.hasClass(n.active);i.preventDefault(),n.$apply(function(){t.$setViewValue(a?null:n.$eval(n.value)),t.$render()})}))}}}]),angular.module("mvUi.Core.Icon",["mvUi.Config"]).directive("mvIcon",["mvConfigService",function(n){return{restrict:"A",scope:{},link:function(e,i,a){var t=n.config.component.icon;if(e.name=angular.isDefined(a.name)?a.name:!1,e.prefix=angular.isDefined(a.prefix)?a.prefix:t.default.prefix,i.addClass(t.cssClass),i.addClass(e.prefix),i.addClass(e.prefix+"-"+e.name),angular.isDefined(a.rotate)&&i.addClass(e.prefix+"-rotate-"+a.rotate),angular.isDefined(a.spin)&&i.addClass(e.prefix+"-spin"),angular.isDefined(a.stack)&&i.addClass(e.prefix+"-stack-"+a.stack+"x"),angular.isDefined(a.inverse)&&i.addClass(e.prefix+"-inverse"),angular.isDefined(a.flip)){e.flip=angular.isDefined(a.flip).toLocaleString();var o=e.prefix+"-flip-";switch(e.flip){case"h":i.addClass(o+"horizontal");break;case"v":i.addClass(o+"horizontal");break;case"a":i.addClass(o+"horizontal"),i.addClass(o+"vertical");break;default:i.addClass(o+"horizontal")}}angular.isDefined(a.zoom)&&i.addClass(e.prefix+"-"+a.zoom)}}}]),angular.module("mvUi.Core.IconList",["mvUi.Config"]).directive("mvIconList",["mvConfigService",function(n){return{restrict:"A",scope:{},link:function(e,i,a){var t=n.config.component.icon;e.prefix=angular.isDefined(a.prefix)?a.prefix:t.default.prefix,i.addClass(e.prefix+"-ul");var o=i.children();angular.forEach(o,function(n){var i=angular.element(n.firstChild);i.hasClass(e.prefix)&&!i.hasClass(e.prefix+"-li")&&i.addClass(e.prefix+"-li")})}}}]),angular.module("mvUi.Core.IconStack",["mvUi.Config"]).directive("mvIconStack",["mvConfigService",function(n){return{restrict:"A",scope:{grow:"@"},link:function(e,i,a){var t=n.config.component.icon;e.name=angular.isDefined(a.name)?a.name:!1,e.prefix=angular.isDefined(a.prefix)?a.prefix:t.default.prefix,e.grow=angular.isDefined(e.grow)?!!e.grow:!1,i.addClass(e.prefix+"-stack"),i.addClass(e.prefix+"-lg");var o=i.children();angular.forEach(o,function(n,i){n=angular.element(n),e.grow?i+=1:i=2-i,n.addClass(e.prefix+"-stack-"+i+"x")})}}}]),angular.module("mvUi.Layout.Col",["mvUi.Config","mvUi.Layout.Service"]).directive("mvCol",["mvConfigService","mvGridService","$parse",function(n,e,i){return{restrict:"EA",scope:!1,transclude:!0,link:function(a,t,o,l,s){var r=n.config.component.layout.col;a.layoutObj={},a.size=angular.isDefined(o.size)?i(o.size)(a):{},a.layoutPush=angular.isDefined(o.push)?i(o.push)(a):{},a.layoutPull=angular.isDefined(o.pull)?i(o.pull)(a):{},t.hasClass(r.cssClass)||t.addClass(r.cssClass),0!==Object.keys(a.size).length&&angular.forEach(a.size,function(n,i){var a=e.generateSizeClass(i,n);t.addClass(a)}),0!==Object.keys(a.layoutPush).length&&angular.forEach(a.layoutPush,function(n,i){var a=e.generateAlignClass(i,n,"push");t.addClass(a)}),0!==Object.keys(a.layoutPull).length&&angular.forEach(a.layoutPull,function(n,i){var a=e.generateAlignClass(i,n,"pull");t.addClass(a)}),s(a.$new(),function(n){t.append(n)})}}}]),angular.module("mvUi.Layout.Container",["mvUi.Config"]).directive("mvContainer",["mvConfigService",function(n){return{restrict:"EA",transclude:!0,link:function(e,i,a,t,o){var l=n.config.component.layout.container,s=l.cssFluidClass;e.mode=angular.isDefined(a.mode)?a.mode:l.default.mode,("static"===e.mode||angular.isDefined(a.static))&&(s=l.cssStrictClass),i.addClass(s),o(e.$new(),function(n){i.append(n)})}}}]),angular.module("mvUi.Layout.Service",["mvUi.Config"]).service("mvGridService",["mvConfigService",function(){this.generateSizeClass=function(n,e){var i=n+"-"+e;return i},this.generateAlignClass=function(n,e,i){var a=n+"-"+i+"-"+e;return a}}]),angular.module("mvUi.Layout.Item",["mvUi.Config"]).directive("mvItem",["mvConfigService",function(n){return{restrict:"EA",transclude:!0,link:function(e,i,a,t,o){var l=n.config.component.layout.item;i.hasClass(l.cssClass)||i.addClass(l.cssClass),o(e.$new(),function(n){i.append(n)})}}}]),angular.module("mvUi.Layout.List",["mvUi.Config"]).directive("mvList",["mvConfigService",function(n){return{restrict:"EA",transclude:!0,link:function(e,i,a,t,o){var l=n.config.component.layout.row,s=n.config.component.layout.list;i.hasClass(l.cssClass)||i.addClass(l.cssClass),i.hasClass(s.cssClass)||i.addClass(s.cssClass),o(e.$new(),function(n){i.append(n)})}}}]),angular.module("mvUi.Layout.Row",["mvUi.Config"]).directive("mvRow",["mvConfigService",function(n){return{restrict:"EA",transclude:!0,link:function(e,i,a,t,o){var l=n.config.component.layout.row;if(e.layoutFill=angular.isDefined(a.fill)?JSON.parse(a.fill):!1,i.hasClass(l.cssClass)||i.addClass(l.cssClass),e.layoutFill){var s=i[0].offsetHeight;angular.forEach(i[0].children,function(n){angular.element(n).css("height",s+"px")})}o(e.$new(),function(n){i.append(n)})}}}]),angular.module("mvUi.Menu.Dropdown",["mvUi.Config"]).directive("mvDropdown",["mvConfigService","$document","$compile",function(n,e,i){return{restrict:"A",scope:!0,link:function(a,t,o){var l=n.config.component.menu.dropdown,s=n.config.component.btn,r=angular.element(t.children()[0]),c=angular.element(t.children()[1]);a.isOpen=!1,t.hasClass(l.cssClass)||t.addClass(l.cssClass),r.hasClass(s.cssClass)||(r.addClass(s.cssClass),r.addClass(s.default.color)),c.hasClass(l.css.menu)||c.addClass(l.css.menu),angular.isDefined(o.backdrop)&&c.addClass(l.css.backdrop),a.registerCloseListeners=function(n){n?(e.bind("click",a.closeCallback),c.bind("mouseenter",a.closeCallback)):c.bind("mouseleave",a.closeCallback)},a.unregisterCloseListeners=function(n){n?(e.unbind("click",a.closeCallback),c.unbind("mouseenter",a.closeCallback)):c.unbind("mouseleave",a.closeCallback)},a.openCallback=function(n){a.isOpen=!0,angular.isDefined(n)&&n.stopPropagation(),t.attr("aria-expanded",a.isOpen),t.addClass("open",a.isOpen),a.registerCloseListeners(Modernizr.touch)},a.closeCallback=function(n){angular.isDefined(n)&&n.stopPropagation(),console.log(a.isOpen),a.isOpen=!1,t.removeClass("open",a.isOpen),t.attr({"aria-expanded":a.isOpen}),a.unregisterCloseListeners(Modernizr.touch)},a.addCaret=function(){var n=angular.element("<i>");n.attr("mv-icon",""),n.attr("name","ellipsis-v"),r.append(i(n[0])(a))},a.enableAria=function(){t.attr({"aria-haspopup":!0,"aria-expanded":!1})},a.$on("$destroy",function(){r.unbind("click",a.openCallback),c.unbind("mouseleave click",a.closeCallback),a.unregisterCloseListeners(Modernizr.touch)}),a.enableAria(),a.addCaret(),r.on("click",a.openCallback),c.bind("click",a.closeCallback)}}}]),angular.module("mvUi.Menu.Dropdown.Header",["mvUi.Config"]).directive("mvDropdown",["mvConfigService",function(n){return{restrict:"A",scope:!0,link:function(e,i){var a=n.config.component.menu.dropdown;i.addClass(a.css.header)}}}]),angular.module("mvUi.Table.Table",["mvUi.Config"]).directive("mvTable",["mvConfigService",function(n){return{retrict:"A",scope:{},link:function(e,i,a){var t=n.config.component.table;if(i.hasClass(t.cssClass)||i.addClass(t.cssClass),angular.isDefined(a.bordered)&&i.addClass(t.cssClass+"-bordered"),angular.isDefined(a.condensed)&&i.addClass(t.cssClass+"-condensed"),angular.isDefined(a.hover)&&i.addClass(t.cssClass+"-hover"),angular.isDefined(a.responsive)&&i.addClass(t.cssClass+"-responsive"),angular.isDefined(a.striped)&&i.addClass(t.cssClass+"-striped"),angular.isDefined(a.normal)){var o=t.default.normalize;angular.forEach(o,function(n){i.addClass(t.cssClass+"-"+n)})}}}}]);var mvUi=angular.module("mvUi",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","mvUi.Config","mvUi.Core","mvUi.Template","mvUi.Form","mvUi.Layout","mvUi.Menu","mvUi.Table"]);mvUi.constant("Modernizr",Modernizr);