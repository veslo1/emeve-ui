var mvUi=angular.module("mvUi.Config",[]).service("mvConfigService",[function(){this.config={component:{btn:{cssClass:"mv-btn","default":{color:"default",component:"component"}},control:{cssClass:"mv-control","default":{icon:"name"},toggle:{cssClass:"mv-control-toggle"}},editor:{cssClass:"mv-editor",options:{buttons:["fullscreen","undo","redo","selectAll","sep","bold","italic","underline","strikeThrough","subscript","superscript","sep","fontFamily","fontSize","color","sep","formatBlock","blockStyle","inlineStyle","removeFormat","sep","align","insertOrderedList","insertUnorderedList","outdent","indent","sep","createLink","insertHorizontalRule","insertImage","insertVideo","table"],language:"pt_br",height:300}},icon:{cssClass:"mv-icon","default":{prefix:"fa"}},form:{cssClass:"mv-form"},layout:{col:{cssClass:"mv-col"},container:{cssStrictClass:"mv-container",cssFluidClass:"mv-container-fluid","default":{mode:"fluid"}},item:{cssClass:"mv-item"},list:{cssClass:"mv-list"},row:{cssClass:"mv-row"}},menu:{dropdown:{cssClass:"mv-dropdown",css:{backdrop:"mv-dropdown-backdrop",header:"mv-dropdown-header",menu:"mv-dropdown-menu",left:"mv-dropdown-menu-left",right:"mv-dropdown-menu-right"}},paginator:{cssClass:"mv-paginator","default":{ngModel:1,maxSize:null,rotate:!0,item:{total:20,perPage:10},page:{num:angular.noop},enable:{links:{direction:!0,boundary:!1}},text:{previous:"Previous",next:"Next",first:"First",last:"Last"}}}},table:{cssClass:"mv-table","default":{normalize:["condensed","hover","striped"]}},window:{modal:{cssClass:"mv-modal",css:{open:"mv-modal-open",body:"mv-modal-body",header:"mv-modal-header",footer:"mv-modal-footer"},"default":{animation:"fade"},templates:{main:"mv-ui/window/modal.html",header:"mv-ui/window/modal-header.html",body:"",footer:""}}}},i18n:{"default":"pt_br"}},this.getConfig=function(){return this.config}}]);angular.module("mvUi.Template",[]).run(["$templateCache",function(n){n.put("mv-switch-nav.html",'<ul>\r\n  <li ng-repeat="slide in slides">\r\n    <button type="button" ng-click="selectSlide(slide.title)">{{slide.title}}</button>\r\n  </li>\r\n</ul>\r\n'),n.put("mv-ui/text.html",'<!--Info (Information)-->\n<mv-i ng-if="enableIcon" name="{{icon}}"></mv-i>\n<label>{{label}}</label>\n<span class="mv-control-value">{{ngModel}}</span>\n<div ng-transclude>\n\n</div>\n'),n.put("mv-ui/control/mv-checklist.html",'<i mv-icon name="{{icon}}" ng-if="enableIcon"></i>\r\n<label>{{label}}</label>\r\n<span class="mv-control-value">\r\n  <strong ng-show="showValue">{{listValue}}</strong>\r\n</span>\r\n<div class="mv-control-button-area">\r\n  <button mv-btn type="button"\r\n          ng-switch="setupArea"\r\n          ng-click="toggleSetupArea($event)">\r\n    <i mv-icon name="angle-down" ng-switch-when="false"></i>\r\n    <i mv-icon name="angle-up" ng-switch-when="true"></i>\r\n  </button>\r\n</div>\r\n<mv-container class="mv-control-setup-area" ng-show="setupArea">\r\n  <mv-row ng-repeat="item in options">\r\n    <mv-col size="{xs:10}">\r\n      <label for="{{id}}-{{$index}}">{{item.label}}</label>\r\n    </mv-col>\r\n    <mv-col size="{xs:2}" class="mv-control-area">\r\n      <input type="checkbox" class="mv-control-checkbox" id="{{id}}-{{$index}}"\r\n             ng-click="selectItem($event,$index,item)">\r\n    </mv-col>\r\n  </mv-row>\r\n</mv-container>\r\n<div ng-transclude></div>\r\n\r\n'),n.put("mv-ui/control/mv-date.html",'<i mv-icon ng-if="enableIcon" name="{{icon}}"></i>\r\n<label>{{label}}</label>\r\n<span class="mv-control-value">\r\n  <strong  ng-show="showValue">{{value | date}}</strong>\r\n</span>\r\n<div class="mv-control-button-area">\r\n  <button mv-btn type="button" ng-class="{\'active\': setupArea}"\r\n          ng-click="toggleSetupArea($event)">\r\n    <i class="mv-icon fa fa-{{btnIcon}}"></i>\r\n  </button>\r\n</div>\r\n<div class="mv-control-setup-area" ng-show="setupArea" ng-transclude>\r\n\r\n</div>\r\n<div class="mv-control-messages text-error">\r\n  <ul mv-icon-list ng-messages="ngModel">\r\n    <li ng-message="$invalid">\r\n      <i mv-icon mv-icon-item name="bell-o"></i>\r\n      Formato inválido de data\r\n    </li>\r\n  </ul>\r\n</div>\r\n'),n.put("mv-ui/control/mv-editor.html",'<i mv-icon name="{{icon}}" ng-if="enableIcon"></i>\n<label>{{label}}</label>\n<span class="mv-control-value">{{description}}</span>\n<div class="mv-control-button-area">\n  <button mv-btn type="button" ng-class="{\'active\': !inlineMode}" ng-if="setupArea"\n          ng-click="toogleToolbarMode($event)">\n    <i class="mv-icon fa fa-wrench"></i>\n  </button>\n  <button mv-btn type="button" ng-class="{\'active\': setupArea}"\n          ng-click="toggleSetupArea($event)">\n    <i class="mv-icon fa fa-{{btnIcon}}"></i>\n  </button>\n</div>\n<div class="mv-control-setup-area" ng-show="setupArea">\n  <textarea froala="froalaOptions" ng-model="ngModel"></textarea>\n</div>\n'),n.put("mv-ui/control/mv-file.html",'<i mv-icon ng-if="enableIcon" name="{{icon}}"></i>\r\n<label>{{label}}</label>\r\n<span class="mv-control-value">\r\n  <strong  ng-show="showValue">{{value}}</strong>\r\n</span>\r\n<div class="mv-control-button-area">\r\n  <button mv-btn type="button" ng-class="{\'active\': setupArea}"\r\n          ng-click="toggleSetupArea($event)">\r\n    <i class="mv-icon fa fa-{{btnIcon}}"></i>\r\n  </button>\r\n</div>\r\n<div class="mv-control-setup-area" ng-show="setupArea">\r\n  <div class="mv-control-file-area" ng-transclude>\r\n\r\n  </div>\r\n</div>\r\n'),n.put("mv-ui/control/mv-filelist.html",'<i mv-icon ng-if="enableIcon" name="{{icon}}"></i>\r\n<label>{{label}}</label>\r\n<span class="mv-control-value">\r\n  <strong  ng-show="showValue">{{value}}</strong>\r\n</span>\r\n<div class="mv-control-button-area">\r\n  <button class="mv-btn" type="button" ng-click="upload($event)" ng-if="files.length>0">\r\n    <i mv-icon name="cloud-upload"></i>\r\n  </button>\r\n  <button mv-btn type="button" ng-class="{\'active\': setupArea}"\r\n          ng-click="toggleSetupArea($event)">\r\n    <i class="mv-icon fa fa-{{btnIcon}}"></i>\r\n  </button>\r\n</div>\r\n<div class="mv-control-setup-area" ng-show="setupArea">\r\n  <ul mv-icon-list>\r\n    <li ng-if="files.length>0" ng-repeat="file in files">\r\n      <i mv-icon name="paperclip"></i>\r\n      {{file.name}}\r\n      <button mv-btn data-component ng-click="removeFile($index)">\r\n        <i mv-icon name="minus"></i>\r\n      </button>\r\n    </li>\r\n  </ul>\r\n  <div class="mv-control-file-area" ng-transclude>\r\n\r\n  </div>\r\n</div>\r\n'),n.put("mv-ui/control/mv-info.html",'<!--Info (Information)-->\r\n<i mv-icon name="{{icon}}" ng-if="enableIcon"></i>\r\n<label>{{label}}</label>\r\n<span class="mv-control-value">{{ngModel}}</span>\r\n<div ng-transclude>\r\n\r\n</div>\r\n'),n.put("mv-ui/control/mv-input.html",'<!--Input (Information)-->\r\n<i mv-icon name="{{icon}}" ng-if="enableIcon"></i>\r\n<label>{{label}}</label>\r\n<div ng-transclude>\r\n\r\n</div>\r\n'),n.put("mv-ui/control/mv-radiogroup.html",'<i mv-icon name="{{icon}}" ng-if="enableIcon"></i>\r\n<label>{{label}}</label>\r\n<span class="mv-control-value">\r\n  <strong ng-show="showValue">{{value}}</strong>\r\n</span>\r\n<div class="mv-control-button-area">\r\n  <button class="mv-btn" type="button"\r\n          ng-switch="setupArea"\r\n          ng-click="toggleSetupArea($event)">\r\n    <i mv-icon name="angle-down" ng-switch-when="false"></i>\r\n    <i mv-icon name="angle-up" ng-switch-when="true"></i>\r\n  </button>\r\n</div>\r\n<ul class="mv-control-setup-area mv-container-fluid" ng-show="setupArea">\r\n  <li ng-repeat="item in options">\r\n    <label for="{{id}}-{{$index}}">\r\n      <mv-row>\r\n        <div class="mv-col xs-10">\r\n          {{item.label}}\r\n        </div>\r\n        <div class="mv-control-area mv-col xs-2">\r\n          <input type="radio" name="{{id}}-group" class="mv-control-radio" id="{{id}}-{{$index}}"\r\n                 ng-click="select($index,item,$event)"/>\r\n        </div>\r\n      </mv-row>\r\n    </label>\r\n  </li>\r\n</ul>\r\n<div ng-transclude></div>\r\n'),n.put("mv-ui/control/mv-select.html",'<i mv-icon ng-if="enableIcon" name="{{icon}}"></i>\r\n<label>{{label}}</label>\r\n<div ng-transclude>\r\n\r\n</div>\r\n'),n.put("mv-ui/control/mv-time.html",'<i mv-icon ng-if="enableIcon" name="{{icon}}"></i>\r\n<label>{{label}}</label>\r\n<span class="mv-control-value">\r\n  <strong  ng-show="showValue">{{value | date}}</strong>\r\n</span>\r\n<div class="mv-control-button-area">\r\n  <button mv-btn type="button" ng-class="{\'active\': setupArea}"\r\n          ng-click="toggleSetupArea($event)">\r\n    <i class="mv-icon fa fa-{{btnIcon}}"></i>\r\n  </button>\r\n</div>\r\n<div class="mv-control-setup-area" ng-show="setupArea" ng-transclude>\r\n\r\n</div>\r\n<div class="mv-control-messages text-error">\r\n  <ul mv-icon-list ng-messages="ngModel">\r\n    <li ng-message="$invalid">\r\n      <i mv-icon mv-icon-item name="bell-o"></i>\r\n      Formato inválido de hora\r\n    </li>\r\n  </ul>\r\n</div>\r\n'),n.put("mv-ui/control/mv-toggle.html",'<i mv-icon ng-if="enableIcon" name="{{icon}}"></i>\r\n<label>{{label}}</label>\r\n\r\n<div class="mv-control-value" ng-switch="ngModel">\r\n  <span ng-switch-when="false">{{off}}</span>\r\n  <span ng-switch-when="true">{{on}}</span>\r\n</div>\r\n<div ng-transclude>\r\n\r\n</div>\r\n<div class="mv-control-button-area">\r\n  <button class="mv-btn" type="button"\r\n          ng-switch="ngModel"\r\n          ng-click="toggleValue($event)">\r\n    <i mv-icon class="mv-btn-off" name="toggle-off" ng-switch-when="false"></i>\r\n    <i mv-icon class="mv-btn-on" name="toggle-on" ng-switch-when="true"></i>\r\n  </button>\r\n</div>\r\n'),n.put("mv-ui/window/modal-header.html",'<button mv-btn data-component class="close" data-color="error" aria-label="fechar" ng-click="close($event)"><span aria-hidden="true">&times;</span></button>\n<h4 class="mv-modal-title" ng-transclude></h4>\n'),n.put("mv-ui/window/modal.html",'<div class="mv-modal-dialog">\n  <section class="mv-modal-content" ng-transclude>\n\n  </section><!-- /.modal-content -->\n</div><!-- /.modal-dialog -->\n')}]),angular.module("EmeveUiApp.Controller",[]).controller("DefaultController",["$scope",function(n){n.list=["um","dois","tres"],n.options=[{url:"/",label:"Item 01"},{url:"/",label:"Item 02"},{url:"/",label:"Item 03"}],n.status="status",n.vai=function(){console.log(n.status)},n.setStatus=function(e){n.status=e}}]).controller("BtnController",["$scope",function(n){n.list=["um","dois","tres"],n.numSala=1,n.blastoise=!0}]).controller("IconController",["$scope","$http",function(n,e){n.icons=[],n.error=!1,n.query={criterio:""},e.get("data/icons.json").success(function(e){n.icons=e.icons}).error(function(){n.icons=[],n.error=!0})}]).controller("FormController",["$scope",function(n){n.colors=[{name:"black",shade:"dark"},{name:"white",shade:"light"},{name:"red",shade:"dark"},{name:"blue",shade:"dark"},{name:"yellow",shade:"light"}],n.colorNames=[{label:"Vermelho",value:"#f00"},{label:"Verde",value:"#0f0"},{label:"Azul",value:"#00f"}],n.mvfData={version:"3.2.0b~Kernel2.5",active:!0,colorPerfil:{},colorFav:[],review:""}}]).controller("EditorController",["$scope",function(n){n.textHtml="",n.froalaOptions={convertMailAddresses:!0,inlineMode:!1,placeholder:"Enter Text Here",language:"pt_br",buttons:["bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize","color","formatBlock","blockStyle","inlineStyle","align","insertOrderedList","insertUnorderedList","outdent","indent","selectAll","createLink","insertImage","insertVideo","table","undo","redo","html","save","insertHorizontalRule","uploadFile","removeFormat","fullscreen"],customButtons:{alert:{title:"Alert",icon:{type:"font",value:"fa fa-info"},callback:function(){alert("Hello!")},refresh:function(){}}}}}]).controller("ModalController",["$scope",function(n){n.status=!1,n.salvar=function(){n.status="Registro salvo"}}]),angular.module("EmeveUiApp.Route",["ngRoute","ngAnimate"]).config(["$routeProvider",function(n){n.when("/",{templateUrl:"views/main.html",controller:"DefaultController"}).when("/btn",{templateUrl:"views/button.html",controller:"BtnController"}).when("/form",{templateUrl:"views/form.html",controller:"FormController"}).when("/control",{templateUrl:"views/form-control.html",controller:"FormController"}).when("/editor",{templateUrl:"views/editor.html",controller:"EditorController"}).when("/icon",{templateUrl:"views/icon.html",controller:"IconController"}).when("/iconlist",{templateUrl:"views/iconlist.html",controller:"IconController"}).when("/modal",{templateUrl:"views/modal.html",controller:"ModalController"}).when("/:controller",{templateUrl:function(n){return"views/"+n.controller+".html"},controller:"DefaultController"}).otherwise({redirectTo:"/"})}]);var EmeveUiApp=angular.module("EmeveUiApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","EmeveUiApp.Controller","EmeveUiApp.Route","mvUi"]);angular.module("mvUi.Progress",[]).directive("mvProgressCirc",["Modernizr",function(n){return{restrict:"A",link:function(e,o){var i=75,l=5,t=o[0];if(n.canvas){var r=angular.element("<p/>");r.attr("style","display:block;position:absolute;padding:1em;top:0;width:"+t.width+"px;"),r.text("Sistema não possui suporte a Canvas"),o.after(r)}else{var a=t.getContext("2d"),s=t.width/2,c=t.height/2,d=t.width/t.height*100-l;a.beginPath(),a.arc(s,c,d,-1.5,Math.PI*(i/50)-1.5,!1),a.lineWidth=l,a.strokeStyle="#ff00cc",a.stroke()}}}}]),angular.module("mvUi.Switch",[]).directive("mvSwitch",["$compile",function(){return{restrict:"EAC",template:"<section ng-transclude></section>",transclude:!0,scope:{ngSwitch:"@"},controller:["$scope","$element","$attrs","$transclude",function(n){n.value="",this.slides=[],this.addSlide=function(n){this.slides.push(n)},this.selectSlide=function(e){n.ngSwitch=e}}],link:function(n,e,o,i){i.slides[0].title}}}]).directive("mvSwitchSlide",["$compile",function(){return{require:"^mvSwitch",restrict:"EAC",template:'<div ng-switch-when="{{title}}" ng-transclude></div>',transclude:!0,scope:{title:"@"},link:function(n,e,o,i){i.addSlide(n)}}}]).directive("mvSwitchNav",["$templateCache",function(n){return{require:"^mvSwitch",restrict:"EAC",template:n.get("mv-switch-nav.html"),transclude:!0,link:function(n,e,o,i){n.slides=i.slides,n.selectSlide=i.selectSlide}}}]),angular.module("mvUi.Tooltip",[]).directive("mvTooltip",[function(){return{restrict:"C",templateUrl:"../../views/directives/mv-pageheader.html",scope:{title:"@",position:"@"},transclude:!0,link:function(n){n.position=angular.isDefined(n.position)?n.position:"top"}}}]),angular.module("mvUi.Core.BtnCheckbox",["mvUi.Config"]).directive("mvBtnCheckbox",["mvConfigService",function(n){return{restrict:"A",require:["?ngModel"],scope:{},link:function(e,o,i,l){n.config.component.btn;e.active=angular.isDefined(i.active)?i.active:"active";var t=l[0];if(t){var r=function(n,o){var i=e.$eval(n);return angular.isDefined(i)?i:o},a=function(){return r(i.on,!0)},s=function(){return r(i.off,!1)};t.$render=function(){o.toggleClass("active",angular.equals(t.$modelValue,a()))},o.bind("click",function(n){n.preventDefault(),e.$apply(function(){t.$setViewValue(o.hasClass("active")?s():a()),t.$render()})})}}}}]),angular.module("mvUi.Core.Btn",["mvUi.Config"]).directive("mvBtn",["mvConfigService",function(n){return{restrict:"A",link:function(e,o,i){var l=n.config.component.btn,t=l.default.color;e.color=angular.isDefined(i.color)?i.color.toLocaleLowerCase():t,e.icon=angular.isDefined(i.icon)?i.icon:!1,o.addClass(l.cssClass),o.addClass(e.color),angular.isDefined(i.border)&&o.addClass(i.border),angular.isDefined(i.component)&&o.addClass(l.default.component),angular.isDefined(i.disabled)&&o.addClass("disabled")}}}]),angular.module("mvUi.Core.BtnGroup",["mvUi.Config"]).directive("mvBtnGroup",["mvConfigService",function(n){return{restrict:"A",link:function(e,o,i){var l=n.config.component.btn,t=l.default.color;e.color=angular.isDefined(i.color)?i.color.toLocaleLowerCase():t,e.icon=angular.isDefined(i.icon)?i.icon:!1,e.active=angular.isDefined(i.active)?!!i.active:!1,o.addClass(l.cssClass),o.addClass(e.color),angular.isDefined(i.border)&&o.addClass(i.border),angular.isDefined(i.component)&&o.addClass(l.default.component),angular.isDefined(i.disabled)&&o.addClass("disabled")}}}]),angular.module("mvUi.Core.BtnModal",["mvUi.Config","mvUi.Window.ModalService"]).directive("mvBtnModal",["mvConfigService","mvModalService",function(n,e){return{restrict:"A",link:function(o,i,l){n.config.component.btn,n.config.component.window.modal;o.target=angular.isDefined(l.target)?l.target:void 0,o.open=function(n){e.open(n,o.target)},i.bind("click",o.open)}}}]),angular.module("mvUi.Core.BtnRadio",["mvUi.Config"]).directive("mvBtnRadio",["mvConfigService",function(n){return{restrict:"A",require:["?ngModel"],scope:{},link:function(e,o,i,l){n.config.component.btn;e.active=angular.isDefined(i.active)?i.active:"active",e.value=angular.isDefined(i.value)?i.value:void 0;var t=l[0];t&&(t.$render=function(){var n=angular.equals(t.$modelValue,e.$eval(e.value));o.toggleClass("active",n)},o.bind("click",function(n){var i=o.hasClass(e.active);n.preventDefault(),e.$apply(function(){t.$setViewValue(i?null:e.$eval(e.value)),t.$render()})}))}}}]),angular.module("mvUi.Core.Icon",["mvUi.Config"]).directive("mvIcon",["mvConfigService",function(n){return{restrict:"A",scope:{},link:function(e,o,i){var l=n.config.component.icon;if(e.name=angular.isDefined(i.name)?i.name:!1,e.prefix=angular.isDefined(i.prefix)?i.prefix:l.default.prefix,o.addClass(l.cssClass),o.addClass(e.prefix),o.addClass(e.prefix+"-"+e.name),angular.isDefined(i.rotate)&&o.addClass(e.prefix+"-rotate-"+i.rotate),angular.isDefined(i.spin)&&o.addClass(e.prefix+"-spin"),angular.isDefined(i.stack)&&o.addClass(e.prefix+"-stack-"+i.stack+"x"),angular.isDefined(i.inverse)&&o.addClass(e.prefix+"-inverse"),angular.isDefined(i.flip)){e.flip=angular.isDefined(i.flip).toLocaleString();var t=e.prefix+"-flip-";switch(e.flip){case"h":o.addClass(t+"horizontal");break;case"v":o.addClass(t+"horizontal");break;case"a":o.addClass(t+"horizontal"),o.addClass(t+"vertical");break;default:o.addClass(t+"horizontal")}}angular.isDefined(i.zoom)&&o.addClass(e.prefix+"-"+i.zoom)}}}]),angular.module("mvUi.Core.IconList",["mvUi.Config"]).directive("mvIconList",["mvConfigService",function(n){return{restrict:"A",scope:{},link:function(e,o,i){var l=n.config.component.icon;e.prefix=angular.isDefined(i.prefix)?i.prefix:l.default.prefix,o.addClass(e.prefix+"-ul");var t=o.children();angular.forEach(t,function(n){var o=angular.element(n.firstChild);o.hasClass(e.prefix)&&!o.hasClass(e.prefix+"-li")&&o.addClass(e.prefix+"-li")})}}}]).directive("mvIconItem",["mvConfigService",function(n){return{restrict:"A",require:["?^^mvIconList"],scope:!1,link:function(e,o,i){var l=n.config.component.icon;e.prefix=angular.isDefined(i.prefix)?i.prefix:l.default.prefix,o.hasClass(e.prefix+"-li")||o.addClass(e.prefix+"-li")}}}]),angular.module("mvUi.Core.IconStack",["mvUi.Config"]).directive("mvIconStack",["mvConfigService",function(n){return{restrict:"A",scope:{grow:"@"},link:function(e,o,i){var l=n.config.component.icon;e.name=angular.isDefined(i.name)?i.name:!1,e.prefix=angular.isDefined(i.prefix)?i.prefix:l.default.prefix,e.grow=angular.isDefined(e.grow)?!!e.grow:!1,o.addClass(e.prefix+"-stack"),o.addClass(e.prefix+"-lg");var t=o.children();angular.forEach(t,function(n,o){n=angular.element(n),e.grow?o+=1:o=2-o,n.addClass(e.prefix+"-stack-"+o+"x")})}}}]),angular.module("mvUi.Control.Checklist",["mvUi.Config","mvUi.Control.Controller"]).directive("mvControlChecklist",["mvConfigService","$templateCache",function(n,e){return{restrict:"A",template:e.get("mv-ui/control/mv-checklist.html"),require:["?^ngModel"],scope:{id:"@",icon:"@",options:"=",ngModel:"="},transclude:!0,controller:"MVControlController",link:function(n,e){n.ngModel=angular.isDefined(n.ngModel)&&angular.isArray(n.ngModel)?n.ngModel:[],n.selectItem=function(e,o,i){var l=i.value,t=n.ngModel.indexOf(l);-1===t?n.ngModel.splice(t,0,l):n.ngModel.splice(t,1)},n.init(e,["checklist","button","setup"])}}}]),angular.module("mvUi.Control.Controller",["mvUi.Config","mvUi.Control.Service"]).controller("MVControlController",["$scope","$element","$attrs","mvConfigService",function(n,e,o,i){n.componentConfig=i.config.component.control,n.setupArea=!1,n.showValue=!0,n.enableIcon=!1,n.icon=angular.isDefined(o.icon)?o.icon:void 0,n.label=angular.isDefined(o.label)?o.label:void 0,n.toggleSetupArea=function(e){return e.preventDefault(),n.setupArea=!n.setupArea,n.setupArea},n.checkMainClass=function(){e.hasClass(n.componentConfig.cssClass)||e.addClass(n.componentConfig.cssClass)},n.setupFunctionality=function(o){e.addClass(n.componentConfig.cssClass+"-"+o)},n.generateSubClass=function(e){return n.componentConfig.cssClass+"-"+e},n.init=function(e,o){n.checkMainClass(),n.setupIcon(),angular.forEach(o,function(o){e.addClass(n.generateSubClass(o))})},n.setupIcon=function(){angular.isDefined(n.icon)&&(this.setupFunctionality("icon"),n.enableIcon=!0)}}]),angular.module("mvUi.Control.Date",["mvUi.Config","mvUi.Control.Controller","mvUi.Control.Service"]).directive("mvControlDate",["mvConfigService","mvControlFileService","$templateCache",function(n,e,o){return{restrict:"A",template:o.get("mv-ui/control/mv-date.html"),require:["?^ngModel"],scope:{id:"@",icon:"@",btnIcon:"@",ngModel:"="},transclude:!0,controller:"MVControlController",link:function(n,e,o,i){n.ngModel=angular.isDefined(n.ngModel)&&angular.isArray(n.ngModel)?n.ngModel:[],n.btnIcon=angular.isDefined(n.btnIcon)?n.btnIcon:"calendar",n.value="";var l=i[0],t=angular.element("<div>");t.addClass("bar");var r=e.find("input");if(r.after(t),angular.isDefined(o.label)){var a=e.find("label");a.attr("for",r.attr("id"))}r.bind("change",function(){n.value=r.val(),l.$setViewValue(r.val()),n.$apply()}),n.init(e,["date","button","setup"])}}}]),angular.module("mvUi.Core.Btn",["mvUi.Config","mvUi.Control.Controller"]).directive("mvControl",["mvConfigService",function(n){return{restrict:"A",controller:"MVControlController",link:function(e,o){var i=n.config.component.control;o.addClass(i.cssClass)}}}]),angular.module("mvUi.Control.Editor",["mvUi.Config","mvUi.Control.Controller","froala"]).directive("mvControlEditor",["mvConfigService","$templateCache",function(n,e){return{restrict:"A",template:e.get("mv-ui/control/mv-editor.html"),require:["?^ngModel"],scope:{icon:"@",btnIcon:"@",description:"@",inlineMode:"@",ngModel:"=",options:"=?"},transclude:!0,controller:"MVControlController",link:function(e,o){e.btnIcon=angular.isDefined(e.btnIcon)?e.btnIcon:"pencil",e.inlineMode=angular.isDefined(e.inlineMode)?!!e.inlineMode:!0,e.ngModel=angular.isDefined(e.ngModel)?e.ngModel:void 0,e.options=angular.isDefined(e.options)?e.options:{},e.setupArea=!0;var i=n.config.component.editor,l=o.find("textarea");e.toogleToolbarMode=function(){e.inlineMode=!e.inlineMode;var n=angular.extend({},i.options,{inlineMode:e.inlineMode});l.editable("destroy"),l.editable(n)},e.init(o,["editor","button","setup"])}}}]),angular.module("mvUi.Control.File",["mvUi.Config","mvUi.Control.Controller","mvUi.Control.Service"]).directive("mvControlFile",["mvConfigService","mvControlFileService","$templateCache",function(n,e,o){return{restrict:"A",template:o.get("mv-ui/control/mv-file.html"),require:["?^ngModel"],scope:{id:"@",icon:"@",url:"@",btnIcon:"@",ngModel:"="},transclude:!0,controller:"MVControlController",link:function(n,e,o,i){n.ngModel=angular.isDefined(n.ngModel)&&angular.isArray(n.ngModel)?n.ngModel:[],n.btnIcon=angular.isDefined(n.btnIcon)?n.btnIcon:"paperclip",n.files=[],n.value="";var l=i[0],t=e.find("input");if(angular.isDefined(o.label)){var r=e.find("label");r.attr("for",t.attr("id"))}t.bind("change",function(){n.files=t[0].files,n.value=n.files[0].name,l.$setViewValue(n.files),n.$apply()}),n.init(e,["file","button","setup"])}}}]).directive("mvControlFileUpload",["mvConfigService","mvControlFileService","$templateCache",function(n,e,o){return{restrict:"A",template:o.get("mv-ui/control/mv-filelist.html"),require:["?^ngModel"],scope:{id:"@",icon:"@",url:"@",btnIcon:"@",ngModel:"="},transclude:!0,controller:"MVControlController",link:function(n,o,i,l){n.ngModel=angular.isDefined(n.ngModel)&&angular.isArray(n.ngModel)?n.ngModel:[],n.btnIcon=angular.isDefined(n.btnIcon)?n.btnIcon:"paperclip",n.files=[];var t=(l[0],o.find("input"));if(angular.isDefined(i.label)){var r=o.find("label");r.attr("for",t.attr("id"))}i.multiple&&t.attr("multiple"),t.bind("change",function(){n.files=t[0].files,console.log(n.files),n.$apply()}),n.upload=function(o){o.preventDefault(),e.upload(n.url,n.files)},n.init(o,["file","button","setup"])}}}]),angular.module("mvUi.Control.Info",["mvUi.Config","mvUi.Control.Controller"]).directive("mvControlInfo",["mvConfigService","$templateCache",function(n,e){return{restrict:"A",template:e.get("mv-ui/control/mv-info.html"),require:["?^ngModel"],scope:{ngModel:"="},transclude:!0,controller:"MVControlController",link:function(n,e){n.init(e,["info"])}}}]),angular.module("mvUi.Control.Input",["mvUi.Config","mvUi.Control.Controller"]).directive("mvControlInput",["mvConfigService","$templateCache",function(n,e){return{restrict:"A",template:e.get("mv-ui/control/mv-input.html"),scope:{},transclude:!0,controller:"MVControlController",link:function(n,e,o){var i=angular.element("<div>");i.addClass("bar");var l=e.find("input");if(l.addClass(n.generateSubClass("input")),l.after(i),angular.isDefined(o.label)){var t=e.find("label");t.attr("for",l.attr("id"))}n.init(e,[])}}}]),angular.module("mvUi.Control.Radiogroup",["mvUi.Config","mvUi.Control.Controller"]).directive("mvControlRadiogroup",["mvConfigService","$templateCache",function(n,e){return{restrict:"A",template:e.get("mv-ui/control/mv-radiogroup.html"),require:["?^ngModel"],scope:{id:"@",icon:"@",options:"=",ngModel:"="},transclude:!0,controller:"MVControlController",link:function(n,e){n.ngModel=angular.isDefined(n.ngModel)&&angular.isArray(n.ngModel)?n.ngModel:void 0,n.select=function(e,o){n.ngModel=o.value,n.value=o.label},n.init(e,["radiogroup","button","setup"])}}}]),angular.module("mvUi.Control.Select",["mvUi.Config","mvUi.Control.Controller"]).directive("mvControlSelect",["mvConfigService","$templateCache",function(n,e){return{restrict:"A",template:e.get("mv-ui/control/mv-select.html"),require:["?^ngModel"],scope:{ngModel:"="},transclude:!0,controller:"MVControlController",link:function(n,e,o){n.ngModel=angular.isDefined(n.ngModel)?!!n.ngModel:void 0;var i=angular.element("<div>");i.addClass("bar");var l=e.find("select");if(l.addClass(n.generateSubClass("select")),l.after(i),angular.isDefined(o.label)){var t=e.find("label");t.attr("for",l.attr("id"))}n.init(e,[])}}}]),angular.module("mvUi.Control.Service",[]).service("mvControlFileService",["$http",function(n){this.response={},this.setResponse=function(n){return this.response=n,this.response},this.upload=function(e,o){n.post(e,o,{headers:{"Content-Type":"multipart/form-data"}}).success(function(n){return this.setResponse(n)}).error(function(n){return this.setResponse(n)})}}]),angular.module("mvUi.Control.Time",["mvUi.Config","mvUi.Control.Controller","mvUi.Control.Service"]).directive("mvControlTime",["mvConfigService","mvControlFileService","$templateCache",function(n,e,o){return{restrict:"A",template:o.get("mv-ui/control/mv-time.html"),require:["?^ngModel"],scope:{id:"@",icon:"@",btnIcon:"@",ngModel:"="},transclude:!0,controller:"MVControlController",link:function(n,e,o,i){n.ngModel=angular.isDefined(n.ngModel)&&angular.isArray(n.ngModel)?n.ngModel:[],n.btnIcon=angular.isDefined(n.btnIcon)?n.btnIcon:"clock-o",n.value="";var l=i[0],t=angular.element("<div>");t.addClass("bar");var r=e.find("input");if(r.after(t),angular.isDefined(o.label)){var a=e.find("label");a.attr("for",r.attr("id"))}r.bind("change",function(){n.value=r.val(),l.$setViewValue(r.val()),n.$apply()}),n.init(e,["time","button","setup"])}}}]),angular.module("mvUi.Control.Toggle",["mvUi.Config","mvUi.Control.Controller"]).directive("mvControlToggle",["mvConfigService","$templateCache",function(n,e){return{restrict:"A",template:e.get("mv-ui/control/mv-toggle.html"),require:["?^ngModel"],scope:{ngModel:"="},transclude:!0,controller:"MVControlController",link:function(n,e,o){n.ngModel=angular.isDefined(n.ngModel)?!!n.ngModel:void 0,n.on=angular.isDefined(o.on)?o.on:"On",n.off=angular.isDefined(o.off)?o.off:"Off";var i=e.find("input");if(i.addClass(n.generateSubClass("toggle")),angular.isDefined(o.label)){var l=e.find("label");l.attr("for",i.attr("id"))}n.toggleValue=function(e){e.preventDefault(),n.ngModel=!n.ngModel},n.init(e,["toggle","button"])}}}]),angular.module("mvUi.Form.Form",["mvUi.Config"]).directive("mvForm",["mvConfigService",function(n){return{restrict:"A",extend:"^form",link:function(e,o,i){var l=n.config.component.form;o.hasClass(l.cssClass)||o.addClass(l.cssClass),angular.isDefined(i.alignIcon)&&o.addClass(l.cssClass+"-icon")}}}]),angular.module("mvUi.Layout.Col",["mvUi.Config","mvUi.Layout.Service"]).directive("mvCol",["mvConfigService","mvGridService","$parse",function(n,e,o){return{restrict:"EA",scope:!1,transclude:!0,link:function(i,l,t,r,a){var s=n.config.component.layout.col;i.layoutObj={},i.size=angular.isDefined(t.size)?o(t.size)(i):{},i.layoutPush=angular.isDefined(t.push)?o(t.push)(i):{},i.layoutPull=angular.isDefined(t.pull)?o(t.pull)(i):{},l.hasClass(s.cssClass)||l.addClass(s.cssClass),0!==Object.keys(i.size).length&&angular.forEach(i.size,function(n,o){var i=e.generateSizeClass(o,n);l.addClass(i)}),0!==Object.keys(i.layoutPush).length&&angular.forEach(i.layoutPush,function(n,o){var i=e.generateAlignClass(o,n,"push");l.addClass(i)}),0!==Object.keys(i.layoutPull).length&&angular.forEach(i.layoutPull,function(n,o){var i=e.generateAlignClass(o,n,"pull");l.addClass(i)}),a(i.$new(),function(n){l.append(n)})}}}]),angular.module("mvUi.Layout.Container",["mvUi.Config"]).directive("mvContainer",["mvConfigService",function(n){return{restrict:"EA",transclude:!0,link:function(e,o,i,l,t){var r=n.config.component.layout.container,a=r.cssFluidClass;e.mode=angular.isDefined(i.mode)?i.mode:r.default.mode,("static"===e.mode||angular.isDefined(i.static))&&(a=r.cssStrictClass),o.addClass(a),t(e.$new(),function(n){o.append(n)})}}}]),angular.module("mvUi.Layout.Service",["mvUi.Config"]).service("mvGridService",["mvConfigService",function(){this.generateSizeClass=function(n,e){var o=n+"-"+e;return o},this.generateAlignClass=function(n,e,o){var i=n+"-"+o+"-"+e;return i}}]),angular.module("mvUi.Layout.Item",["mvUi.Config"]).directive("mvItem",["mvConfigService",function(n){return{restrict:"EA",transclude:!0,link:function(e,o,i,l,t){var r=n.config.component.layout.item;o.hasClass(r.cssClass)||o.addClass(r.cssClass),t(e.$new(),function(n){o.append(n)})}}}]),angular.module("mvUi.Layout.List",["mvUi.Config"]).directive("mvList",["mvConfigService",function(n){return{restrict:"EA",transclude:!0,link:function(e,o,i,l,t){var r=n.config.component.layout.row,a=n.config.component.layout.list;o.hasClass(r.cssClass)||o.addClass(r.cssClass),o.hasClass(a.cssClass)||o.addClass(a.cssClass),t(e.$new(),function(n){o.append(n)})}}}]),angular.module("mvUi.Layout.Row",["mvUi.Config"]).directive("mvRow",["mvConfigService",function(n){return{restrict:"EA",transclude:!0,link:function(e,o,i,l,t){var r=n.config.component.layout.row;if(e.layoutFill=angular.isDefined(i.fill)?JSON.parse(i.fill):!1,o.hasClass(r.cssClass)||o.addClass(r.cssClass),e.layoutFill){var a=o[0].offsetHeight;angular.forEach(o[0].children,function(n){angular.element(n).css("height",a+"px")})}t(e.$new(),function(n){o.append(n)})}}}]),angular.module("mvUi.Menu.Dropdown",["mvUi.Config"]).directive("mvDropdown",["mvConfigService","$document","$compile",function(n,e,o){return{restrict:"A",scope:!0,link:function(i,l,t){var r=n.config.component.menu.dropdown,a=n.config.component.btn,s=angular.element(l.children()[0]),c=angular.element(l.children()[1]);
i.isOpen=!1,l.hasClass(r.cssClass)||l.addClass(r.cssClass),s.hasClass(a.cssClass)||(s.addClass(a.cssClass),s.addClass(a.default.color)),c.hasClass(r.css.menu)||c.addClass(r.css.menu),angular.isDefined(t.backdrop)&&c.addClass(r.css.backdrop),i.registerCloseListeners=function(n){n?(e.bind("click",i.closeCallback),c.bind("mouseenter",i.closeCallback)):c.bind("mouseleave",i.closeCallback)},i.unregisterCloseListeners=function(n){n?(e.unbind("click",i.closeCallback),c.unbind("mouseenter",i.closeCallback)):c.unbind("mouseleave",i.closeCallback)},i.openCallback=function(n){i.isOpen=!0,angular.isDefined(n)&&n.stopPropagation(),l.attr("aria-expanded",i.isOpen),l.addClass("open",i.isOpen),i.registerCloseListeners(Modernizr.touch)},i.closeCallback=function(n){angular.isDefined(n)&&n.stopPropagation(),i.isOpen=!1,l.removeClass("open",i.isOpen),l.attr({"aria-expanded":i.isOpen}),i.unregisterCloseListeners(Modernizr.touch)},i.addCaret=function(){var n=angular.element("<i>");n.attr("mv-icon",""),n.attr("name","ellipsis-v"),s.append(o(n[0])(i))},i.enableAria=function(){l.attr({"aria-haspopup":!0,"aria-expanded":!1})},i.$on("$destroy",function(){s.unbind("click",i.openCallback),c.unbind("mouseleave click",i.closeCallback),i.unregisterCloseListeners(Modernizr.touch)}),i.enableAria(),i.addCaret(),s.on("click",i.openCallback),c.bind("click",i.closeCallback)}}}]),angular.module("mvUi.Menu.Dropdown.Header",["mvUi.Config"]).directive("mvDropdown",["mvConfigService",function(n){return{restrict:"A",scope:!0,link:function(e,o){var i=n.config.component.menu.dropdown;o.addClass(i.css.header)}}}]),angular.module("mvUi.Menu.Paginator",["mvUi.Config"]).directive("mvPaginator",["mvConfigService",function(n){return{restrict:"A",link:function(e,o){var i=n.config.component.menu.paginator;o.hasClass(i.cssClass)||o.addClass(i.cssClass)}}}]),angular.module("mvUi.Table.Table",["mvUi.Config"]).directive("mvTable",["mvConfigService",function(n){return{retrict:"A",scope:{},link:function(e,o,i){var l=n.config.component.table;if(o.hasClass(l.cssClass)||o.addClass(l.cssClass),angular.isDefined(i.bordered)&&o.addClass(l.cssClass+"-bordered"),angular.isDefined(i.condensed)&&o.addClass(l.cssClass+"-condensed"),angular.isDefined(i.hover)&&o.addClass(l.cssClass+"-hover"),angular.isDefined(i.responsive)&&o.addClass(l.cssClass+"-responsive"),angular.isDefined(i.striped)&&o.addClass(l.cssClass+"-striped"),angular.isDefined(i.normal)){var t=l.default.normalize;angular.forEach(t,function(n){o.addClass(l.cssClass+"-"+n)})}}}}]),angular.module("mvUi.Window.ModalBody",["mvUi.Config","mvUi.Window.ModalService"]).directive("mvModalBody",["mvConfigService","mvModalService",function(n,e){return{restrict:"A",require:["^mvModal"],scope:{},transclude:!0,link:function(o,i,l,t,r){var a=n.config.component.window.modal,s=t[0];i.hasClass(a.css.body)||i.addClass(a.css.body),o.close=function(n){e.close(n,s.id)},r(o.$new(),function(n){i.append(n)})}}}]),angular.module("mvUi.Window.Modal",["mvUi.Config","mvUi.Window.ModalService"]).directive("mvModal",["mvConfigService","mvModalService","$templateCache",function(n,e,o){return{restrict:"A",template:o.get(n.config.component.window.modal.templates.main),scope:{id:"@"},transclude:!0,controller:["$scope","$element","$attrs",function(n,o,i){this.id=angular.isDefined(n.id)?n.id:i.id,this.close=function(n){e.close(n,this.id)}}],link:function(o,i,l){var t=n.config.component.window.modal;o.title=angular.isDefined(l.title)?l.title:"",i.hasClass(t.cssClass)||i.addClass(t.cssClass),angular.isDefined(l.open)&&i.addClass(t.css.open),o.close=function(n){e.close(n,i)}}}}]),angular.module("mvUi.Window.ModalFooter",["mvUi.Config","mvUi.Window.ModalService"]).directive("mvModalFooter",["mvConfigService","mvModalService",function(n,e){return{restrict:"A",require:["^mvModal"],transclude:!0,link:function(o,i,l,t,r){var a=n.config.component.window.modal,s=t[0];i.hasClass(a.css.footer)||i.addClass(a.css.footer),o.close=function(n){e.close(n,s.id)},r(o.$new(),function(n){i.append(n)})}}}]),angular.module("mvUi.Window.ModalHeader",["mvUi.Config","mvUi.Window.ModalService"]).directive("mvModalHeader",["mvConfigService","mvModalService","$templateCache",function(n,e,o){return{restrict:"A",require:["^mvModal"],template:o.get(n.config.component.window.modal.templates.header),scope:{},transclude:!0,link:function(o,i,l,t){var r=n.config.component.window.modal,a=t[0];i.hasClass(r.css.header)||i.addClass(r.css.header),o.close=function(n){e.close(n,a.id)}}}}]),angular.module("mvUi.Window.ModalService",["mvUi.Config"]).service("mvModalService",["mvConfigService","$rootScope",function(n,e){var o=this;this.listModal=[],o.config=n.config.component.window.modal,o.getModal=function(n){return angular.element(document.getElementById(n))},o.open=function(n,i){if(angular.isDefined(i)){var l=o.getModal(i);e.$apply(l.addClass(o.config.css.open))}},o.close=function(n,e){if(angular.isDefined(e)){var i=o.getModal(e);i.removeClass(o.config.css.open)}}}]);var mvUi=angular.module("mvUi",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","ngMessages","froala","mvUi.Config","mvUi.Template","mvUi.Core.Icon","mvUi.Core.IconList","mvUi.Core.IconStack","mvUi.Core.Btn","mvUi.Core.BtnRadio","mvUi.Core.BtnCheckbox","mvUi.Core.BtnModal","mvUi.Layout.Col","mvUi.Layout.Item","mvUi.Layout.List","mvUi.Layout.Row","mvUi.Layout.Container","mvUi.Menu.Dropdown","mvUi.Menu.Paginator","mvUi.Table.Table","mvUi.Window.ModalService","mvUi.Window.Modal","mvUi.Window.ModalHeader","mvUi.Window.ModalBody","mvUi.Window.ModalFooter","mvUi.Form.Form","mvUi.Control.Service","mvUi.Control.Controller","mvUi.Control.Toggle","mvUi.Control.Info","mvUi.Control.Input","mvUi.Control.Select","mvUi.Control.Checklist","mvUi.Control.Radiogroup","mvUi.Control.File","mvUi.Control.Date","mvUi.Control.Time","mvUi.Control.Editor"]).constant("Modernizr",Modernizr);