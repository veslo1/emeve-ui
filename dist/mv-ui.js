var mvUi=angular.module("mvUi.Config",[]).service("mvConfigService",[function(){this.config={component:{btn:{cssClass:"mv-btn","default":{color:"default",component:"component"}},control:{cssClass:"mv-control","default":{icon:"name"},toggle:{cssClass:"mv-control-toggle"}},icon:{cssClass:"mv-icon","default":{prefix:"fa"}},form:{cssClass:"mv-form"},layout:{col:{cssClass:"mv-col"},container:{cssStrictClass:"mv-container",cssFluidClass:"mv-container-fluid","default":{mode:"fluid"}},item:{cssClass:"mv-item"},list:{cssClass:"mv-list"},row:{cssClass:"mv-row"}},menu:{dropdown:{cssClass:"mv-dropdown",css:{backdrop:"mv-dropdown-backdrop",header:"mv-dropdown-header",menu:"mv-dropdown-menu",left:"mv-dropdown-menu-left",right:"mv-dropdown-menu-right"}},paginator:{cssClass:"mv-paginator","default":{ngModel:1,maxSize:null,rotate:!0,item:{total:20,perPage:10},page:{num:angular.noop},enable:{links:{direction:!0,boundary:!1}},text:{previous:"Previous",next:"Next",first:"First",last:"Last"}}}},table:{cssClass:"mv-table","default":{normalize:["condensed","hover","striped"]}},window:{modal:{cssClass:"mv-modal",css:{open:"mv-modal-open",body:"mv-modal-body",header:"mv-modal-header",footer:"mv-modal-footer"},"default":{animation:"fade"},templates:{main:"mv-ui/window/modal.html",header:"mv-ui/window/modal-header.html",body:"",footer:""}}}}},this.getConfig=function(){return this.config}}]);angular.module("mvUi.Template",[]).run(["$templateCache",function(n){n.put("mv-switch-nav.html",'<ul>\r\n  <li ng-repeat="slide in slides">\r\n    <button type="button" ng-click="selectSlide(slide.title)">{{slide.title}}</button>\r\n  </li>\r\n</ul>\r\n'),n.put("mv-ui/checklist.html",'<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">\n  <strong ng-show="showValue">{{ngModel}}</strong>\n</span>\n<div class="mv-control-button-area">\n  <button class="mv-btn" type="button"\n          ng-switch="setup"\n          ng-click="setupToggle($event)">\n    <mv-i name="angle-down" ng-switch-when="false"></mv-i>\n    <mv-i name="angle-up" ng-switch-when="true"></mv-i>\n  </button>\n</div>\n<mv-container class="mv-control-setup-area" ng-class="{open:setup}">\n  <mv-row ng-repeat="item in options">\n    <mv-col size="{xs:10}">\n      <label for="{{id}}-{{$index}}">{{item.label}}</label>\n    </mv-col>\n    <mv-col size="{xs:2}" class="mv-control-area">\n      <input type="checkbox" class="mv-control-checkbox" id="{{id}}-{{$index}}"\n             ng-click="select($index,item,$event)"/>\n    </mv-col>\n  </mv-row>\n</mv-container>\n\n'),n.put("mv-ui/file.html",'<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">\n  <strong  ng-show="showValue">{{value}}</strong>\n</span>\n<div class="mv-control-button-area">\n  <button type="button" class="mv-btn"\n          ng-click="setupToggle($event)">\n    <mv-i name="{{btnIcon}}"></mv-i>\n  </button>\n</div>\n<div class="mv-control-setup-area" ng-class="{open:setup}">\n  <ul>\n    <li ng-if="files.length>0" ng-repeat="file in files">\n      {{file.name}}\n    </li>\n  </ul>\n  <div class="mv-control-file-area">\n    <input type="file" name="fileName"/>\n  </div>\n  <button class="mv-btn mv-control-file-button" type="button" ng-click="upload($event)">\n    <mv-i name="cloud-upload"></mv-i> Upload\n  </button>\n</div>\n'),n.put("mv-ui/input.html",'<!--Info (Information)-->\n<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label for="{{id}}-control">{{label}}</label>\n<input type="{{type}}" name="{{name}}" id="{{id}}-control" class="mv-control-input"\n       ng-model="ngModel"/>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-ui/radiogroup.html",'<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">\n  <strong  ng-show="showValue">{{value}}</strong>\n</span>\n<div class="mv-control-button-area">\n  <button class="mv-btn" type="button"\n          ng-switch="setup"\n          ng-click="setupToggle($event)">\n    <mv-i name="angle-down" ng-switch-when="false"></mv-i>\n    <mv-i name="angle-up" ng-switch-when="true"></mv-i>\n  </button>\n</div>\n<ul class="mv-control-setup-area mv-container-fluid" ng-class="{open:setup}">\n  <li ng-repeat="item in options">\n    <label for="{{id}}-{{$index}}">\n    <mv-row>\n    <div class="mv-col xs-10">\n      {{item.label}}\n    </div>\n    <div class="mv-control-area mv-col xs-2">\n      <input type="radio" name="{{name}}" class="mv-control-radio" id="{{id}}-{{$index}}"\n        ng-click="select($index,item,$event)"/>\n    </div>\n    </mv-row>\n    </label>\n  </li>\n</ul>\n'),n.put("mv-ui/select.html",'<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label for="{{id}}-control">{{label}}</label>\n<select id="{{id}}-control" name="{{name}}" class="mv-control-select"\n        ng-model="ngModel"\n        ng-options="a.{{col}} for a in options">\n</select>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-ui/text.html",'<!--Info (Information)-->\n<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">{{ngModel}}</span>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-ui/control/mv-info.html",'<!--Info (Information)-->\n<i mv-icon name="{{icon}}" ng-if="enableIcon"></i>\n<label>{{label}}</label>\n<span class="mv-control-value">{{ngModel}}</span>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-ui/control/mv-toggle.html",'<i mv-icon ng-if="enableIcon" name="{{icon}}"></i>\n<label>{{label}}</label>\n\n<div class="mv-control-value" ng-switch="ngModel">\n  <span ng-switch-when="false">{{off}}</span>\n  <span ng-switch-when="true">{{on}}</span>\n</div>\n<div ng-transclude>\n\n</div>\n<div class="mv-control-button-area">\n  <button class="mv-btn" type="button"\n          ng-switch="ngModel"\n          ng-click="toggleValue($event)">\n    <i mv-icon class="mv-btn-off" name="toggle-off" ng-switch-when="false"></i>\n    <i mv-icon class="mv-btn-on" name="toggle-on" ng-switch-when="true"></i>\n  </button>\n</div>\n'),n.put("mv-ui/window/modal-header.html",'<button mv-btn data-component class="close" data-color="error" aria-label="fechar" ng-click="close($event)"><span aria-hidden="true">&times;</span></button>\n<h4 class="mv-modal-title" ng-transclude></h4>\n'),n.put("mv-ui/window/modal.html",'<div class="mv-modal-dialog">\n  <section class="mv-modal-content" ng-transclude>\n\n  </section><!-- /.modal-content -->\n</div><!-- /.modal-dialog -->\n')}]),angular.module("EmeveUiApp.Controller",[]).controller("DefaultController",["$scope",function(n){n.list=["um","dois","tres"],n.options=[{url:"/",label:"Item 01"},{url:"/",label:"Item 02"},{url:"/",label:"Item 03"}],n.status="status",n.vai=function(){console.log(n.status)},n.setStatus=function(e){n.status=e}}]).controller("BtnController",["$scope",function(n){n.list=["um","dois","tres"],n.numSala=1,n.blastoise=!0}]).controller("IconController",["$scope","$http",function(n,e){n.icons=[],n.error=!1,n.criterio="",e.get("data/icons.json").success(function(e){n.icons=e.icons}).error(function(){n.icons=[],n.error=!0})}]).controller("FormController",["$scope",function(n){n.colors=[{name:"black",shade:"dark"},{name:"white",shade:"light"},{name:"red",shade:"dark"},{name:"blue",shade:"dark"},{name:"yellow",shade:"light"}],n.colorNames=[{label:"Vermelho",value:"#f00"},{label:"Verde",value:"#0f0"},{label:"Azul",value:"#00f"}],n.mvfData={version:"3.2.0b~Kernel2.5",active:!0}}]).controller("ModalController",["$scope",function(n){n.status=!1,n.salvar=function(){n.status="Registro salvo"}}]),angular.module("EmeveUiApp.Route",["ngRoute","ngAnimate"]).config(["$routeProvider",function(n){n.when("/",{templateUrl:"views/main.html",controller:"DefaultController"}).when("/btn",{templateUrl:"views/button.html",controller:"BtnController"}).when("/form",{templateUrl:"views/form.html",controller:"FormController"}).when("/control",{templateUrl:"views/form-control.html",controller:"FormController"}).when("/icon",{templateUrl:"views/icon.html",controller:"IconController"}).when("/modal",{templateUrl:"views/modal.html",controller:"ModalController"}).when("/:controller",{templateUrl:function(n){return"views/"+n.controller+".html"},controller:"DefaultController"}).otherwise({redirectTo:"/"})}]);var EmeveUiApp=angular.module("EmeveUiApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","EmeveUiApp.Controller","EmeveUiApp.Route","mvUi"]);angular.module("mvUi.Control",["mvUi.Control.Service","mvUi.Control.Controller","mvUi.Control.Toggle","mvUi.Control.Info"]),angular.module("mvUi.Progress",[]).directive("mvProgressCirc",["Modernizr",function(n){return{restrict:"A",link:function(e,o){var i=75,a=5,l=o[0];if(n.canvas){var t=angular.element("<p/>");t.attr("style","display:block;position:absolute;padding:1em;top:0;width:"+l.width+"px;"),t.text("Sistema não possui suporte a Canvas"),o.after(t)}else{var s=l.getContext("2d"),r=l.width/2,c=l.height/2,d=l.width/l.height*100-a;s.beginPath(),s.arc(r,c,d,-1.5,Math.PI*(i/50)-1.5,!1),s.lineWidth=a,s.strokeStyle="#ff00cc",s.stroke()}}}}]),angular.module("mvUi.Switch",[]).directive("mvSwitch",["$compile",function(){return{restrict:"EAC",template:"<section ng-transclude></section>",transclude:!0,scope:{ngSwitch:"@"},controller:["$scope","$element","$attrs","$transclude",function(n){n.value="",this.slides=[],this.addSlide=function(n){this.slides.push(n)},this.selectSlide=function(e){n.ngSwitch=e}}],link:function(n,e,o,i){i.slides[0].title}}}]).directive("mvSwitchSlide",["$compile",function(){return{require:"^mvSwitch",restrict:"EAC",template:'<div ng-switch-when="{{title}}" ng-transclude></div>',transclude:!0,scope:{title:"@"},link:function(n,e,o,i){i.addSlide(n)}}}]).directive("mvSwitchNav",["$templateCache",function(n){return{require:"^mvSwitch",restrict:"EAC",template:n.get("mv-switch-nav.html"),transclude:!0,link:function(n,e,o,i){n.slides=i.slides,n.selectSlide=i.selectSlide}}}]),angular.module("mvUi.Tooltip",[]).directive("mvTooltip",[function(){return{restrict:"C",templateUrl:"../../views/directives/mv-pageheader.html",scope:{title:"@",position:"@"},transclude:!0,link:function(n){n.position=angular.isDefined(n.position)?n.position:"top"}}}]),angular.module("mvUi.Core.BtnCheckbox",["mvUi.Config"]).directive("mvBtnCheckbox",["mvConfigService",function(n){return{restrict:"A",require:["?ngModel"],scope:{},link:function(e,o,i,a){n.config.component.btn;e.active=angular.isDefined(i.active)?i.active:"active";var l=a[0];if(l){var t=function(n,o){var i=e.$eval(n);return angular.isDefined(i)?i:o},s=function(){return t(i.on,!0)},r=function(){return t(i.off,!1)};l.$render=function(){o.toggleClass("active",angular.equals(l.$modelValue,s()))},o.bind("click",function(n){n.preventDefault(),e.$apply(function(){l.$setViewValue(o.hasClass("active")?r():s()),l.$render()})})}}}}]),angular.module("mvUi.Core.Btn",["mvUi.Config"]).directive("mvBtn",["mvConfigService",function(n){return{restrict:"A",link:function(e,o,i){var a=n.config.component.btn,l=a.default.color;e.color=angular.isDefined(i.color)?i.color.toLocaleLowerCase():l,e.icon=angular.isDefined(i.icon)?i.icon:!1,o.addClass(a.cssClass),o.addClass(e.color),angular.isDefined(i.border)&&o.addClass(i.border),angular.isDefined(i.component)&&o.addClass(a.default.component),angular.isDefined(i.disabled)&&o.addClass("disabled")}}}]),angular.module("mvUi.Core.BtnGroup",["mvUi.Config"]).directive("mvBtnGroup",["mvConfigService",function(n){return{restrict:"A",link:function(e,o,i){var a=n.config.component.btn,l=a.default.color;e.color=angular.isDefined(i.color)?i.color.toLocaleLowerCase():l,e.icon=angular.isDefined(i.icon)?i.icon:!1,e.active=angular.isDefined(i.active)?!!i.active:!1,o.addClass(a.cssClass),o.addClass(e.color),angular.isDefined(i.border)&&o.addClass(i.border),angular.isDefined(i.component)&&o.addClass(a.default.component),angular.isDefined(i.disabled)&&o.addClass("disabled")}}}]),angular.module("mvUi.Core.BtnModal",["mvUi.Config","mvUi.Window.ModalService"]).directive("mvBtnModal",["mvConfigService","mvModalService",function(n,e){return{restrict:"A",link:function(o,i,a){n.config.component.btn,n.config.component.window.modal;o.target=angular.isDefined(a.target)?a.target:void 0,o.open=function(n){e.open(n,o.target)},i.bind("click",o.open)}}}]),angular.module("mvUi.Core.BtnRadio",["mvUi.Config"]).directive("mvBtnRadio",["mvConfigService",function(n){return{restrict:"A",require:["?ngModel"],scope:{},link:function(e,o,i,a){n.config.component.btn;e.active=angular.isDefined(i.active)?i.active:"active",e.value=angular.isDefined(i.value)?i.value:void 0;var l=a[0];l&&(l.$render=function(){var n=angular.equals(l.$modelValue,e.$eval(e.value));o.toggleClass("active",n)},o.bind("click",function(n){var i=o.hasClass(e.active);n.preventDefault(),e.$apply(function(){l.$setViewValue(i?null:e.$eval(e.value)),l.$render()})}))}}}]),angular.module("mvUi.Core.Icon",["mvUi.Config"]).directive("mvIcon",["mvConfigService",function(n){return{restrict:"A",scope:{},link:function(e,o,i){var a=n.config.component.icon;if(e.name=angular.isDefined(i.name)?i.name:!1,e.prefix=angular.isDefined(i.prefix)?i.prefix:a.default.prefix,o.addClass(a.cssClass),o.addClass(e.prefix),o.addClass(e.prefix+"-"+e.name),angular.isDefined(i.rotate)&&o.addClass(e.prefix+"-rotate-"+i.rotate),angular.isDefined(i.spin)&&o.addClass(e.prefix+"-spin"),angular.isDefined(i.stack)&&o.addClass(e.prefix+"-stack-"+i.stack+"x"),angular.isDefined(i.inverse)&&o.addClass(e.prefix+"-inverse"),angular.isDefined(i.flip)){e.flip=angular.isDefined(i.flip).toLocaleString();var l=e.prefix+"-flip-";switch(e.flip){case"h":o.addClass(l+"horizontal");break;case"v":o.addClass(l+"horizontal");break;case"a":o.addClass(l+"horizontal"),o.addClass(l+"vertical");break;default:o.addClass(l+"horizontal")}}angular.isDefined(i.zoom)&&o.addClass(e.prefix+"-"+i.zoom)}}}]),angular.module("mvUi.Core.IconList",["mvUi.Config"]).directive("mvIconList",["mvConfigService",function(n){return{restrict:"A",scope:{},link:function(e,o,i){var a=n.config.component.icon;e.prefix=angular.isDefined(i.prefix)?i.prefix:a.default.prefix,o.addClass(e.prefix+"-ul");var l=o.children();angular.forEach(l,function(n){var o=angular.element(n.firstChild);o.hasClass(e.prefix)&&!o.hasClass(e.prefix+"-li")&&o.addClass(e.prefix+"-li")})}}}]).directive("mvIconItem",["mvConfigService",function(n){return{restrict:"A",require:["?^^mvIconList"],scope:!1,link:function(e,o,i){var a=n.config.component.icon;e.prefix=angular.isDefined(i.prefix)?i.prefix:a.default.prefix,o.hasClass(e.prefix+"-li")||o.addClass(e.prefix+"-li")}}}]),angular.module("mvUi.Core.IconStack",["mvUi.Config"]).directive("mvIconStack",["mvConfigService",function(n){return{restrict:"A",scope:{grow:"@"},link:function(e,o,i){var a=n.config.component.icon;e.name=angular.isDefined(i.name)?i.name:!1,e.prefix=angular.isDefined(i.prefix)?i.prefix:a.default.prefix,e.grow=angular.isDefined(e.grow)?!!e.grow:!1,o.addClass(e.prefix+"-stack"),o.addClass(e.prefix+"-lg");var l=o.children();angular.forEach(l,function(n,o){n=angular.element(n),e.grow?o+=1:o=2-o,n.addClass(e.prefix+"-stack-"+o+"x")})}}}]),angular.module("mvUi.Control.Controller",["mvUi.Config","mvUi.Control.Service"]).controller("mvControlController",["$scope","$element","$attrs","mvConfigService",function(n,e,o,i){n.componentConfig=i.config.component.control,n.setupArea=!1,n.enableIcon=!1,n.icon=angular.isDefined(o.icon)?o.icon:void 0,n.label=angular.isDefined(o.label)?o.label:void 0,n.toggleSetupArea=function(e){return e.preventDefault(),n.setupArea=!n.setupArea,n.setupArea},n.checkMainClass=function(){e.hasClass(n.componentConfig.cssClass)||e.addClass(n.componentConfig.cssClass)},n.setupFunctionality=function(o){e.addClass(n.componentConfig.cssClass+"-"+o)},n.generateSubClass=function(e){return n.componentConfig.cssClass+"-"+e},n.init=function(e,o){n.checkMainClass(),n.setupIcon(),angular.forEach(o,function(o){e.addClass(n.generateSubClass(o))})},n.setupIcon=function(){angular.isDefined(n.icon)&&(this.setupFunctionality("icon"),n.enableIcon=!0)}}]),angular.module("mvUi.Core.Btn",["mvUi.Config","mvUi.Control.Controller"]).directive("mvControl",["mvConfigService",function(n){return{restrict:"A",controller:"mvControlController",link:function(e,o){var i=n.config.component.control;o.addClass(i.cssClass)}}}]),angular.module("mvUi.Control.Info",["mvUi.Config","mvUi.Control.Controller"]).directive("mvControlInfo",["mvConfigService","$templateCache",function(n,e){return{restrict:"A",template:e.get("mv-ui/control/mv-info.html"),require:["?^ngModel"],scope:{ngModel:"="},transclude:!0,controller:"mvControlController",link:function(n,e){n.init(e,["info"])}}}]),angular.module("mvUi.Control.Service",[]).service("mvControlFileService",["$http",function(n){this.response={},this.setResponse=function(n){return this.response=n,this.response},this.upload=function(e,o){n.post(e,o,{headers:{"Content-Type":"multipart/form-data"}}).success(function(n){return this.setResponse(n)}).error(function(n){return this.setResponse(n)})}}]),angular.module("mvUi.Control.Toggle",["mvUi.Config","mvUi.Control.Controller"]).directive("mvControlToggle",["mvConfigService","$templateCache",function(n,e){return{restrict:"A",template:e.get("mv-ui/control/mv-toggle.html"),require:["?^ngModel"],scope:{ngModel:"="},transclude:!0,controller:"mvControlController",link:function(n,e,o){n.ngModel=angular.isDefined(n.ngModel)?!!n.ngModel:void 0,n.on=angular.isDefined(o.on)?o.on:"On",n.off=angular.isDefined(o.off)?o.off:"Off";var i=e.find("input");if(i.addClass(n.generateSubClass("toggle")),angular.isDefined(o.label)){var a=e.find("label");a.attr("for",i.attr("id"))}n.toggleValue=function(e){e.preventDefault(),n.ngModel=!n.ngModel},n.init(e,["toggle","button"])}}}]),angular.module("mvUi.Form.Form",["mvUi.Config"]).directive("mvForm",["mvConfigService",function(n){return{restrict:"A",extend:"^form",link:function(e,o,i){var a=n.config.component.form;o.hasClass(a.cssClass)||o.addClass(a.cssClass),angular.isDefined(i.alignIcon)&&o.addClass(a.cssClass+"-icon")}}}]),angular.module("mvUi.Layout.Col",["mvUi.Config","mvUi.Layout.Service"]).directive("mvCol",["mvConfigService","mvGridService","$parse",function(n,e,o){return{restrict:"EA",scope:!1,transclude:!0,link:function(i,a,l,t,s){var r=n.config.component.layout.col;i.layoutObj={},i.size=angular.isDefined(l.size)?o(l.size)(i):{},i.layoutPush=angular.isDefined(l.push)?o(l.push)(i):{},i.layoutPull=angular.isDefined(l.pull)?o(l.pull)(i):{},a.hasClass(r.cssClass)||a.addClass(r.cssClass),0!==Object.keys(i.size).length&&angular.forEach(i.size,function(n,o){var i=e.generateSizeClass(o,n);a.addClass(i)}),0!==Object.keys(i.layoutPush).length&&angular.forEach(i.layoutPush,function(n,o){var i=e.generateAlignClass(o,n,"push");a.addClass(i)}),0!==Object.keys(i.layoutPull).length&&angular.forEach(i.layoutPull,function(n,o){var i=e.generateAlignClass(o,n,"pull");a.addClass(i)}),s(i.$new(),function(n){a.append(n)})}}}]),angular.module("mvUi.Layout.Container",["mvUi.Config"]).directive("mvContainer",["mvConfigService",function(n){return{restrict:"EA",transclude:!0,link:function(e,o,i,a,l){var t=n.config.component.layout.container,s=t.cssFluidClass;e.mode=angular.isDefined(i.mode)?i.mode:t.default.mode,("static"===e.mode||angular.isDefined(i.static))&&(s=t.cssStrictClass),o.addClass(s),l(e.$new(),function(n){o.append(n)})}}}]),angular.module("mvUi.Layout.Service",["mvUi.Config"]).service("mvGridService",["mvConfigService",function(){this.generateSizeClass=function(n,e){var o=n+"-"+e;return o},this.generateAlignClass=function(n,e,o){var i=n+"-"+o+"-"+e;return i}}]),angular.module("mvUi.Layout.Item",["mvUi.Config"]).directive("mvItem",["mvConfigService",function(n){return{restrict:"EA",transclude:!0,link:function(e,o,i,a,l){var t=n.config.component.layout.item;o.hasClass(t.cssClass)||o.addClass(t.cssClass),l(e.$new(),function(n){o.append(n)})}}}]),angular.module("mvUi.Layout.List",["mvUi.Config"]).directive("mvList",["mvConfigService",function(n){return{restrict:"EA",transclude:!0,link:function(e,o,i,a,l){var t=n.config.component.layout.row,s=n.config.component.layout.list;o.hasClass(t.cssClass)||o.addClass(t.cssClass),o.hasClass(s.cssClass)||o.addClass(s.cssClass),l(e.$new(),function(n){o.append(n)})}}}]),angular.module("mvUi.Layout.Row",["mvUi.Config"]).directive("mvRow",["mvConfigService",function(n){return{restrict:"EA",transclude:!0,link:function(e,o,i,a,l){var t=n.config.component.layout.row;if(e.layoutFill=angular.isDefined(i.fill)?JSON.parse(i.fill):!1,o.hasClass(t.cssClass)||o.addClass(t.cssClass),e.layoutFill){var s=o[0].offsetHeight;angular.forEach(o[0].children,function(n){angular.element(n).css("height",s+"px")})}l(e.$new(),function(n){o.append(n)})}}}]),angular.module("mvUi.Menu.Dropdown",["mvUi.Config"]).directive("mvDropdown",["mvConfigService","$document","$compile",function(n,e,o){return{restrict:"A",scope:!0,link:function(i,a,l){var t=n.config.component.menu.dropdown,s=n.config.component.btn,r=angular.element(a.children()[0]),c=angular.element(a.children()[1]);i.isOpen=!1,a.hasClass(t.cssClass)||a.addClass(t.cssClass),r.hasClass(s.cssClass)||(r.addClass(s.cssClass),r.addClass(s.default.color)),c.hasClass(t.css.menu)||c.addClass(t.css.menu),angular.isDefined(l.backdrop)&&c.addClass(t.css.backdrop),i.registerCloseListeners=function(n){n?(e.bind("click",i.closeCallback),c.bind("mouseenter",i.closeCallback)):c.bind("mouseleave",i.closeCallback)},i.unregisterCloseListeners=function(n){n?(e.unbind("click",i.closeCallback),c.unbind("mouseenter",i.closeCallback)):c.unbind("mouseleave",i.closeCallback)},i.openCallback=function(n){i.isOpen=!0,angular.isDefined(n)&&n.stopPropagation(),a.attr("aria-expanded",i.isOpen),a.addClass("open",i.isOpen),i.registerCloseListeners(Modernizr.touch)},i.closeCallback=function(n){angular.isDefined(n)&&n.stopPropagation(),i.isOpen=!1,a.removeClass("open",i.isOpen),a.attr({"aria-expanded":i.isOpen}),i.unregisterCloseListeners(Modernizr.touch)},i.addCaret=function(){var n=angular.element("<i>");n.attr("mv-icon",""),n.attr("name","ellipsis-v"),r.append(o(n[0])(i))},i.enableAria=function(){a.attr({"aria-haspopup":!0,"aria-expanded":!1})},i.$on("$destroy",function(){r.unbind("click",i.openCallback),c.unbind("mouseleave click",i.closeCallback),i.unregisterCloseListeners(Modernizr.touch)}),i.enableAria(),i.addCaret(),r.on("click",i.openCallback),c.bind("click",i.closeCallback)}}}]),angular.module("mvUi.Menu.Dropdown.Header",["mvUi.Config"]).directive("mvDropdown",["mvConfigService",function(n){return{restrict:"A",scope:!0,link:function(e,o){var i=n.config.component.menu.dropdown;o.addClass(i.css.header)}}}]),angular.module("mvUi.Menu.Paginator",["mvUi.Config"]).directive("mvPaginator",["mvConfigService",function(n){return{restrict:"A",link:function(e,o){var i=n.config.component.menu.paginator;o.hasClass(i.cssClass)||o.addClass(i.cssClass)}}}]),angular.module("mvUi.Table.Table",["mvUi.Config"]).directive("mvTable",["mvConfigService",function(n){return{retrict:"A",scope:{},link:function(e,o,i){var a=n.config.component.table;if(o.hasClass(a.cssClass)||o.addClass(a.cssClass),angular.isDefined(i.bordered)&&o.addClass(a.cssClass+"-bordered"),angular.isDefined(i.condensed)&&o.addClass(a.cssClass+"-condensed"),angular.isDefined(i.hover)&&o.addClass(a.cssClass+"-hover"),angular.isDefined(i.responsive)&&o.addClass(a.cssClass+"-responsive"),angular.isDefined(i.striped)&&o.addClass(a.cssClass+"-striped"),angular.isDefined(i.normal)){var l=a.default.normalize;angular.forEach(l,function(n){o.addClass(a.cssClass+"-"+n)})}}}}]),angular.module("mvUi.Window.ModalBody",["mvUi.Config","mvUi.Window.ModalService"]).directive("mvModalBody",["mvConfigService","mvModalService",function(n,e){return{restrict:"A",require:["^mvModal"],scope:{},transclude:!0,link:function(o,i,a,l,t){var s=n.config.component.window.modal,r=l[0];i.hasClass(s.css.body)||i.addClass(s.css.body),o.close=function(n){e.close(n,r.id)},t(o.$new(),function(n){i.append(n)})}}}]),angular.module("mvUi.Window.Modal",["mvUi.Config","mvUi.Window.ModalService"]).directive("mvModal",["mvConfigService","mvModalService","$templateCache",function(n,e,o){return{restrict:"A",template:o.get(n.config.component.window.modal.templates.main),scope:{id:"@"},transclude:!0,controller:["$scope","$element","$attrs",function(n,o,i){this.id=angular.isDefined(n.id)?n.id:i.id,this.close=function(n){e.close(n,this.id)}}],link:function(o,i,a){var l=n.config.component.window.modal;o.title=angular.isDefined(a.title)?a.title:"",i.hasClass(l.cssClass)||i.addClass(l.cssClass),angular.isDefined(a.open)&&i.addClass(l.css.open),o.close=function(n){e.close(n,i)}}}}]),angular.module("mvUi.Window.ModalFooter",["mvUi.Config","mvUi.Window.ModalService"]).directive("mvModalFooter",["mvConfigService","mvModalService",function(n,e){return{restrict:"A",require:["^mvModal"],transclude:!0,link:function(o,i,a,l,t){var s=n.config.component.window.modal,r=l[0];i.hasClass(s.css.footer)||i.addClass(s.css.footer),o.close=function(n){e.close(n,r.id)},t(o.$new(),function(n){i.append(n)})}}}]),angular.module("mvUi.Window.ModalHeader",["mvUi.Config","mvUi.Window.ModalService"]).directive("mvModalHeader",["mvConfigService","mvModalService","$templateCache",function(n,e,o){return{restrict:"A",require:["^mvModal"],template:o.get(n.config.component.window.modal.templates.header),scope:{},transclude:!0,link:function(o,i,a,l){var t=n.config.component.window.modal,s=l[0];i.hasClass(t.css.header)||i.addClass(t.css.header),o.close=function(n){e.close(n,s.id)}}}}]),angular.module("mvUi.Window.ModalService",["mvUi.Config"]).service("mvModalService",["mvConfigService","$rootScope",function(n,e){var o=this;this.listModal=[],o.config=n.config.component.window.modal,o.getModal=function(n){return angular.element(document.getElementById(n))},o.open=function(n,i){if(angular.isDefined(i)){var a=o.getModal(i);e.$apply(a.addClass(o.config.css.open))}},o.close=function(n,e){if(angular.isDefined(e)){var i=o.getModal(e);i.removeClass(o.config.css.open)}}}]);var mvUi=angular.module("mvUi",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","mvUi.Config","mvUi.Template","mvUi.Core.Icon","mvUi.Core.IconList","mvUi.Core.IconStack","mvUi.Core.Btn","mvUi.Core.BtnRadio","mvUi.Core.BtnCheckbox","mvUi.Core.BtnModal","mvUi.Layout.Col","mvUi.Layout.Item","mvUi.Layout.List","mvUi.Layout.Row","mvUi.Layout.Container","mvUi.Menu.Dropdown","mvUi.Menu.Paginator","mvUi.Table.Table","mvUi.Window.ModalService","mvUi.Window.Modal","mvUi.Window.ModalHeader","mvUi.Window.ModalBody","mvUi.Window.ModalFooter","mvUi.Form.Form","mvUi.Control"]).constant("Modernizr",Modernizr);