!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/keymap"]=t():e["utils/keymap"]=t()}(globalThis,(()=>(()=>{var e,t,n={922:(e,t,n)=>{"use strict";n.d(t,{Nw:()=>g,vN:()=>p,$j:()=>l,kW:()=>u});const i=coreApis.componentApis.video.playerAgent;var o=n(986),r=n(153),s=n(605);const a=e=>({...lodash.pick(e,"ctrlKey","shiftKey","altKey","metaKey"),bubbles:!0,cancelable:!0,view:unsafeWindow}),l=(e,t)=>{const{event:n}=t,i=a(n);if("string"==typeof e){const t=dq(e);if(!t)return!1;(0,s.simulateClick)(t,i)}else{if(!e)return!1;(0,s.simulateClick)(e,i)}return!0},d=e=>t=>l(e,t),p=e=>()=>i.playerAgent.changeTime("number"==typeof e?e:e());let c;const u=async(e,t)=>{let n=dq(".keymap-tip");if(!n){const o=await i.playerAgent.query.playerArea();if(!o)return;o.insertAdjacentHTML("afterbegin",`\n      <div class="keymap-tip-container">\n        <i class="keymap-tip-icon mdi ${t}"></i>\n        <div class="keymap-tip">${e}</div>\n      </div>\n    `),n=dq(".keymap-tip")}n.innerHTML=e;const o=dq(".keymap-tip-container"),r=dq(o,".mdi");r.classList.remove(...r.classList.values()),r.classList.add("mdi",t),c&&clearTimeout(c),o.classList.add("show"),c=window.setTimeout((()=>{o.classList.remove("show")}),2e3)},m={fullscreen:{displayName:"全屏",run:()=>i.playerAgent.fullscreen()},webFullscreen:{displayName:"网页全屏",run:()=>i.playerAgent.webFullscreen()},wideScreen:{displayName:"宽屏",run:()=>i.playerAgent.widescreen()},volumeUp:{displayName:"增加音量",run:()=>{const e=(0,o.getComponentSettings)("keymap").options.volumeStep,t=i.playerAgent.changeVolume(e);return lodash.isNil(t)?t:(u(`${t}%`,"mdi-volume-high"),!0)}},volumeDown:{displayName:"降低音量",run:()=>{const e=(0,o.getComponentSettings)("keymap").options.volumeStep,t=i.playerAgent.changeVolume(-e);return lodash.isNil(t)?t:(0===t?u("静音","mdi-volume-off"):u(`${t}%`,"mdi-volume-high"),!0)}},mute:{displayName:"静音",run:()=>{const e=i.playerAgent.toggleMute();return lodash.isNil(e)?e:(i.playerAgent.isMute()?u("已静音","mdi-volume-off"):u("已取消静音","mdi-volume-high"),!0)}},pictureInPicture:{displayName:"画中画",run:()=>i.playerAgent.togglePip()},coin:{displayName:"投币",run:d(".video-toolbar .coin, .tool-bar .coin-info, .video-toolbar-module .coin-box, .play-options-ul > li:nth-child(2), .video-toolbar-v1 .coin, .toolbar .coin, .video-toolbar-container .video-coin")},favorite:{displayName:"收藏",run:d(".video-toolbar .collect, .video-toolbar-module .fav-box, .play-options-ul > li:nth-child(3), .video-toolbar-v1 .collect, .video-toolbar-container .video-fav")},pause:{displayName:"暂停/播放",run:()=>i.playerAgent.togglePlay()},like:{displayName:"点赞",run:(()=>{let e=!0;return t=>{const{event:n}=t,i=dq(".video-toolbar .like, .tool-bar .like-info, .video-toolbar-v1 .like, .toolbar .like, .video-toolbar-container .video-like");if(!i)return!1;n.preventDefault();const o=(e,t)=>{const n=a(t),o=new MouseEvent(e,n);i.dispatchEvent(o)};return e=!0,setTimeout((()=>e=!1),200),o("mousedown",n),document.body.addEventListener("keyup",(t=>{t.preventDefault(),o("mouseup",t),e&&o("click",t)}),{once:!0}),!0}})()},danmaku:{displayName:"弹幕开关",run:()=>i.playerAgent.toggleDanmaku()},longJumpBackward:{displayName:"长倒退",run:()=>i.playerAgent.changeTime(-(0,o.getComponentSettings)("keymap").options.longJumpSeconds)},longJumpForward:{displayName:"长前进",run:()=>i.playerAgent.changeTime((0,o.getComponentSettings)("keymap").options.longJumpSeconds)},jumpBackward:{displayName:"倒退",run:()=>i.playerAgent.changeTime(-5)},jumpForward:{displayName:"前进",run:()=>i.playerAgent.changeTime(5)},playerMenu:{displayName:"播放器菜单",run:()=>{const e=i.playerAgent.query.video.container.sync();if(!e)return null;const t=e.getBoundingClientRect();return e.dispatchEvent(new MouseEvent("contextmenu",{bubbles:!0,cancelable:!1,view:unsafeWindow,button:2,buttons:0,clientX:t.x+t.width/2-88.325,clientY:t.y+t.height/2-97})),!0}},seekBegin:{displayName:"回开头",run:()=>i.playerAgent.seek(0)},sendComment:{displayName:"发送评论",ignoreTyping:!1,run:()=>{const{activeElement:e}=document;if(!(e&&e instanceof HTMLTextAreaElement))return null;const t=(()=>{const t=[()=>e.nextElementSibling,()=>e.parentElement.nextElementSibling,()=>dq(".reply-box:focus-within .reply-box-send")].find((e=>null!==e()));return t?t():null})();return t?(t.click(),!0):null}}},[g]=(0,r.registerAndGetData)("keymap.actions",m)},155:(e,t,n)=>{"use strict";n.d(t,{Wb:()=>o,um:()=>r});var i=n(153);const o={fullscreen:"f",webFullscreen:"w",wideScreen:"t",volumeUp:"arrowUp",volumeDown:"arrowDown",mute:"m",pictureInPicture:"p",coin:"c",favorite:"s",pause:"space",like:"l",playerMenu:"`",longJumpForward:"j",longJumpBackward:"shift j",jumpBackward:"",jumpForward:"",danmaku:"d",seekBegin:"0",sendComment:"ctrl enter"},[,r]=(0,i.registerAndGetData)("keymap.presets",o,{Default:{},YouTube:{like:"",pause:"space k",longJumpForward:"l",longJumpBackward:"j",seekBegin:"0 Home"},HTML5Player:{coin:"shift c",danmaku:"shift d",fullscreen:"enter",webFullscreen:"shift enter",pictureInPicture:"shift p",longJumpBackward:"ctrl arrowLeft",longJumpForward:"ctrl arrowRight"},PotPlayer:{coin:"shift c",danmaku:"shift d",fullscreen:"enter",webFullscreen:"6",longJumpBackward:"ctrl arrowLeft",longJumpForward:"ctrl arrowRight",seekBegin:"backspace"}})},122:(e,t,n)=>{"use strict";n.r(t),n.d(t,{loadKeymapSettings:()=>r,toggleKeymapSettings:()=>s});var i=n(605);let o;const r=async e=>{if(o)return;const t=await Promise.resolve().then(n.bind(n,328)).then((e=>e.default));o=(0,i.mountVueComponent)(t),e&&(o.triggerElement=e),document.body.insertAdjacentElement("beforeend",o.$el)},s=async e=>{o||await r(e),o.popupOpen=!o.popupOpen}},50:(e,t,n)=>{var i=n(218)((function(e){return e[1]}));i.push([e.id,".keymap-extra-options {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.keymap-extra-options .keymap-settings-button .be-icon {\n  margin-right: 8px;\n}",""]),e.exports=i},613:(e,t,n)=>{var i=n(218)((function(e){return e[1]}));i.push([e.id,".keymap-settings-popup {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  transition: 0.2s ease-out;\n  width: 550px;\n  top: 50%;\n  left: 50%;\n  z-index: 100002;\n  transform: translateX(-50%) translateY(-50%) scale(0.9);\n  display: flex;\n  flex-direction: column;\n}\nbody.dark .keymap-settings-popup {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .keymap-settings-popup {\n  background-color: #282828;\n  color: #eee;\n}\nbody.dark .keymap-settings-popup {\n  background-color: #222;\n}\n.keymap-settings-popup.open {\n  transform: translateX(-50%) translateY(-50%) scale(1);\n}\n.keymap-settings {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  padding: 12px 12px 0 18px;\n}\n.keymap-settings-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.keymap-settings-header-title {\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-size: 18px;\n}\n.keymap-settings-header-title .be-icon {\n  margin-right: 6px;\n}\n.keymap-settings-header-help, .keymap-settings-header-close {\n  display: flex;\n  padding: 6px;\n  cursor: pointer;\n  transition: 0.2s ease-out;\n  color: inherit;\n}\n.keymap-settings-header-help:hover, .keymap-settings-header-close:hover {\n  color: var(--theme-color);\n}\n.keymap-settings-content {\n  flex: 1 0 auto;\n  max-height: calc(100vh - 200px);\n  overflow: auto;\n  padding-bottom: 12px;\n}\n.keymap-settings-content .keymap-settings-grid .grid-header,\n.keymap-settings-content .keymap-settings-grid .grid-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n  height: 24px;\n  box-sizing: content-box;\n}\n.keymap-settings-content .keymap-settings-grid .grid-header > *,\n.keymap-settings-content .keymap-settings-grid .grid-row > * {\n  flex: 1 0 0;\n  display: flex;\n  align-items: center;\n}\n.keymap-settings-content .keymap-settings-grid .grid-header {\n  margin-bottom: 4px;\n  padding: 4px 0 6px 0;\n  border-bottom: 1px solid rgba(136, 136, 136, 0.1333333333);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background-color: #fff;\n}\nbody.dark .keymap-settings-content .keymap-settings-grid .grid-header {\n  background-color: #222;\n}",""]),e.exports=i},442:(e,t,n)=>{var i=n(218)((function(e){return e[1]}));i.push([e.id,".keymap-settings-grid .grid-row {\n  padding: 2px 0;\n}\n.keymap-settings-grid .grid-row .row-name,\n.keymap-settings-grid .grid-row .row-default-binding,\n.keymap-settings-grid .grid-row .row-preset-binding {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n}\n.keymap-settings-grid .grid-row .row-name::-webkit-scrollbar,\n.keymap-settings-grid .grid-row .row-default-binding::-webkit-scrollbar,\n.keymap-settings-grid .grid-row .row-preset-binding::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n.keymap-settings-grid .grid-row .row-name.not-set, .keymap-settings-grid .grid-row .row-name.overwritten,\n.keymap-settings-grid .grid-row .row-default-binding.not-set,\n.keymap-settings-grid .grid-row .row-default-binding.overwritten,\n.keymap-settings-grid .grid-row .row-preset-binding.not-set,\n.keymap-settings-grid .grid-row .row-preset-binding.overwritten {\n  opacity: 0.25;\n}\n.keymap-settings-grid .grid-row .row-binding, .keymap-settings-grid .grid-row .row-binding input {\n  font-family: monospace, sans-serif;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .be-button {\n  padding: 4px;\n  margin-right: 4px;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .be-icon {\n  margin: 0;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .be-textbox {\n  margin-right: 6px;\n  flex: 1 0 auto;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .custom-binding-edit,\n.keymap-settings-grid .grid-row .row-custom-binding .custom-binding-add {\n  display: flex;\n  align-items: center;\n  flex: 1 0 auto;\n}",""]),e.exports=i},8:(e,t,n)=>{var i=n(218)((function(e){return e[1]}));i.push([e.id,".keymap-tip-container {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  padding: 8px 16px;\n  background-color: rgba(0, 0, 0, 0.6666666667);\n  color: white;\n  pointer-events: none;\n  opacity: 0;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  font-size: 14pt;\n  border-radius: 4px;\n  transition: 0.2s ease-out;\n}\nbody.player-mode-blackmask .keymap-tip-container {\n  z-index: 10017;\n}\n.keymap-tip-container.show {\n  opacity: 1;\n}\n.keymap-tip-container i {\n  line-height: 1;\n  margin-right: 8px;\n  font-size: 18pt;\n}\n\n.bilibili-player .bilibili-player-area .bilibili-player-video-wrap .bilibili-player-volumeHint {\n  background-color: rgba(0, 0, 0, 0.6666666667);\n  color: white;\n}\n.bilibili-player .bilibili-player-area .bilibili-player-video-wrap .bilibili-player-volumeHint-icon {\n  line-height: 1;\n}",""]),e.exports=i},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},332:(e,t,n)=>{"use strict";var i,o=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],l=t.base?r[0]+t.base:r[0],d=n[l]||0,p="".concat(l," ").concat(d);n[l]=d+1;var c=a(p),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==c?(s[c].references++,s[c].updater(u)):s.push({identifier:p,updater:f(u,t),references:1}),i.push(p)}return i}function d(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var p,c=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function u(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=c(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function m(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var g=null,y=0;function f(e,t){var n,i,o;if(t.singleton){var r=y++;n=g||(g=d(t)),i=u.bind(null,n,r,!1),o=u.bind(null,n,r,!0)}else n=d(t),i=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=a(n[i]);s[o].references--}for(var r=l(e,t),d=0;d<n.length;d++){var p=a(n[d]);0===s[p].references&&(s[p].updater(),s.splice(p,1))}n=r}}}},338:(e,t,n)=>{var i=n(8);i&&i.__esModule&&(i=i.default),e.exports="string"==typeof i?i:i.toString()},716:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"keymap-extra-options"},[t("VButton",{ref:"button",staticClass:"keymap-settings-button",on:{mouseover:function(t){return e.loadSettings()},click:function(t){return e.toggleSettings()}}},[t("VIcon",{attrs:{icon:"mdi-keyboard-settings-outline",size:18}}),e._v("\n    快捷键设置\n  ")],1)],1)};i._withStripped=!0;var o=n(648),r=n(122);const s=Vue.extend({components:{VButton:o.VButton,VIcon:o.VIcon},data:()=>({popupOpen:!1}),methods:{async loadSettings(){await(0,r.loadKeymapSettings)(this.$refs.button)},async toggleSettings(){await(0,r.toggleKeymapSettings)(this.$refs.button)}}});var a=n(332),l=n.n(a),d=n(50),p=n.n(d),c={insert:"head",singleton:!1};l()(p(),c);p().locals;const u=(0,n(893).Z)(s,i,[],!1,null,null,null).exports},328:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("VPopup",{staticClass:"keymap-settings-popup be-settings-extra-options",attrs:{fixed:"","trigger-element":e.triggerElement},model:{value:e.popupOpen,callback:function(t){e.popupOpen=t},expression:"popupOpen"}},[t("div",{staticClass:"keymap-settings"},[t("div",{staticClass:"keymap-settings-header"},[t("div",{staticClass:"keymap-settings-header-title"},[t("VIcon",{attrs:{icon:"mdi-keyboard-settings-outline"}}),e._v("\n        快捷键设置\n      ")],1),e._v(" "),t("a",{staticClass:"keymap-settings-header-help",attrs:{href:"https://github.com/the1812/Bilibili-Evolved/blob/preview/registry/lib/components/utils/keymap/help.md",target:"_blank",title:"查看帮助"}},[t("VIcon",{attrs:{size:18,icon:"mdi-help-circle-outline"}})],1),e._v(" "),t("div",{staticClass:"keymap-settings-header-close",attrs:{title:"关闭"}},[t("VIcon",{attrs:{size:18,icon:"close"},on:{click:function(t){e.popupOpen=!1}}})],1)]),e._v(" "),t("div",{staticClass:"keymap-settings-content"},[t("div",{staticClass:"keymap-settings-grid"},[t("div",{staticClass:"grid-header"},[t("div",{staticClass:"header-name"},[e._v("动作")]),e._v(" "),t("div",{staticClass:"header-default-binding"},[e._v("默认按键")]),e._v(" "),t("div",{staticClass:"header-preset-binding"},[t("VDropdown",{attrs:{items:e.presetOptions,"key-mapper":e=>e},scopedSlots:e._u([{key:"item",fn:function({item:t}){return[e._v("\n                "+e._s(t)+"\n              ")]}}]),model:{value:e.selectedPreset,callback:function(t){e.selectedPreset=t},expression:"selectedPreset"}})],1),e._v(" "),t("div",{staticClass:"header-custom-binding"},[e._v("自定义按键")])]),e._v(" "),e._l(e.rows,(function(n){return t("KeymapSettingsRow",{key:n.name,attrs:{row:n,"selected-preset":e.selectedPreset}})}))],2)])])])};i._withStripped=!0;var o=n(986),r=n(648),s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"grid-row"},[t("div",{staticClass:"row-name",attrs:{title:e.row.name}},[e._v("\n    "+e._s(e.row.displayName)+"\n  ")]),e._v(" "),t("div",{staticClass:"row-default-binding row-binding",class:{overwritten:e.isOverwrittern(e.presets[e.selectedPreset],e.customKeyBindings),"not-set":void 0===e.presetBase[e.row.name]}},[e._v("\n    "+e._s(e.showReadonlyKey(e.presetBase))+"\n  ")]),e._v(" "),t("div",{staticClass:"row-preset-binding row-binding",class:{overwritten:e.isOverwrittern(e.customKeyBindings),"not-set":void 0===e.presets[e.selectedPreset][e.row.name]}},[e._v("\n    "+e._s(e.showReadonlyKey(e.presets[e.selectedPreset]))+"\n  ")]),e._v(" "),t("div",{staticClass:"row-custom-binding row-binding"},[e.editable?t("div",{staticClass:"custom-binding-edit"},[t("TextBox",{ref:"customBindingTextBox",attrs:{placeholder:"禁用","change-on-blur":"",text:e.customKeyBindings[e.row.name]},on:{change:e.updateCustomBinding}}),e._v(" "),t("VButton",{attrs:{type:"transparent",title:"删除自定义键位"},on:{click:function(t){return e.removeCustomBinding()}}},[t("VIcon",{attrs:{icon:"mdi-trash-can-outline",size:16}})],1)],1):t("div",{staticClass:"custom-binding-add"},[t("VButton",{attrs:{type:"transparent",title:"添加自定义键位"},on:{click:function(t){return e.addCustomBinding()}}},[t("VIcon",{attrs:{icon:"mdi-plus",size:16}})],1)],1)])])};s._withStripped=!0;var a=n(155);const l=(0,o.getComponentSettings)("keymap").options,d=Vue.extend({components:{TextBox:r.TextBox,VButton:r.VButton,VIcon:r.VIcon},props:{row:{type:Object,required:!0},selectedPreset:{type:String,required:!0}},data:()=>({presets:a.um,presetBase:a.Wb,customKeyBindings:l.customKeyBindings,editable:!1}),created(){this.checkEditable()},methods:{checkEditable(){this.editable=void 0!==this.customKeyBindings[this.row.name]},showReadonlyKey(e){const{name:t}=this.row,n=e[t];return void 0===n?"继承":""===n?"禁用":n},isOverwrittern(){const{name:e}=this.row;for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return n.some((t=>void 0!==t[e]))},async addCustomBinding(){const{name:e}=this.row;this.customKeyBindings[e]="",this.checkEditable(),await this.$nextTick(),this.$refs.customBindingTextBox.focus()},removeCustomBinding(){const{name:e}=this.row;delete this.customKeyBindings[e],this.checkEditable()},updateCustomBinding(e){console.log("update",e);const{name:t}=this.row;this.customKeyBindings[t]=e}}});var p=n(332),c=n.n(p),u=n(442),m=n.n(u),g={insert:"head",singleton:!1};c()(m(),g);m().locals;var y=n(893);const f=(0,y.Z)(d,s,[],!1,null,null,null).exports;var b=n(922);const v=(0,o.getComponentSettings)("keymap").options;console.log(a.um,b.Nw,v.preset,v.customKeyBindings);const h=Vue.extend({components:{VIcon:r.VIcon,VDropdown:r.VDropdown,VPopup:r.VPopup,KeymapSettingsRow:f},props:{triggerElement:{type:HTMLElement,default:null}},data:()=>({popupOpen:!1,actions:b.Nw,presets:a.um,customKeyBindings:v.customKeyBindings}),computed:{selectedPreset:{get:()=>v.preset,set(e){v.preset=e}},rows(){return Object.entries(this.actions).map((e=>{let[t,n]=e;return{name:t,...n}}))},presetOptions(){return Object.keys(this.presets)}}});var w=n(613),k=n.n(w),x={insert:"head",singleton:!1};c()(k(),x);k().locals;const _=(0,y.Z)(h,i,[],!1,null,null,null).exports},893:(e,t,n)=>{"use strict";function i(e,t,n,i,o,r,s,a){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=l):o&&(l=a?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(d.functional){d._injectStyles=l;var p=d.render;d.render=function(e,t){return l.call(t),p(e,t)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,l):[l]}return{exports:e,options:d}}n.d(t,{Z:()=>i})},153:e=>{"use strict";e.exports=coreApis.pluginApis.data},986:e=>{"use strict";e.exports=coreApis.settings},648:e=>{"use strict";e.exports=coreApis.ui},605:e=>{"use strict";e.exports=coreApis.utils}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,exports:{}};return n[e](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var r=Object.create(null);o.r(r);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&i&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>s[e]=()=>n[e]));return s.default=()=>n,o.d(r,s),r},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";o.d(r,{component:()=>y});const e=coreApis.componentApis.styledComponent,t=coreApis.componentApis.define;var n=o(986),i=o(922),s=o(605);const a=coreApis.utils.urls,l=["shift","alt","ctrl","meta"],d=lodash.once((e=>{const t=a.watchlaterUrls.some((e=>(0,s.matchUrlPattern)(e))),n=a.mediaListUrls.some((e=>(0,s.matchUrlPattern)(e))),o={enable:!0,bindings:e};return document.body.addEventListener("keydown",(e=>{o.enable&&o.bindings.forEach((o=>{if(0===o.keys.length)return;if(!1!==o.action.ignoreTyping&&(0,s.isTyping)())return;const r=e.key.toLowerCase(),a=dq(".bilibili-player-sphere-control");if(null!==a&&"none"!==a.style.display&&["w","a","s","d"].includes(r))return;if(l.some((t=>{const n=o.keys.includes(t);if(o.keys.includes(`[${t}]`))return!1;return n!==e[`${t}Key`]})))return;const d=o.keys.filter((e=>!l.includes(e.toLowerCase()))).map((e=>e.toLowerCase()));if(!(d.includes(e.key.toLowerCase())||d.includes(e.code.toLowerCase())))return;const p=o.action.run({binding:o,isWatchlater:t,isMediaList:n,event:e,clickElement:i.$j,changeVideoTime:i.vN,showTip:i.kW}),c=!lodash.isNil(p);(o.action.prevent??c)&&(e.stopPropagation(),e.preventDefault())}))})),o}));var p=o(155);const c=(0,t.defineOptionsMetadata)({longJumpSeconds:{defaultValue:85,displayName:"长跳跃秒数",validator:(0,s.getNumberValidator)(1)},volumeStep:{defaultValue:10,displayName:"音量调整幅度",validator:(0,s.getNumberValidator)(1,100)},customKeyBindings:{defaultValue:{},displayName:"自定义键位",hidden:!0},preset:{defaultValue:"Default",displayName:"预设",hidden:!0}});let u=null;const m=e=>Object.entries(e).map((e=>{let[t,n]=e;return o=t,{keys:n.split(" ").filter((e=>""!==e)),action:i.Nw[o]};var o})),g=(0,e.styledComponentEntry)((()=>Promise.resolve().then(o.t.bind(o,338,23))),(async e=>{let{settings:t}=e;const i=()=>{const e=t.options.preset,n=p.um[e]||{},i=m({...p.Wb,...n,...t.options.customKeyBindings});u?u.bindings=i:u=d(i)};(0,n.addComponentListener)("keymap.preset",i,!0),(0,n.addComponentListener)("keymap.customKeyBindings",i)})),y=(0,t.defineComponentMetadata)({name:"keymap",displayName:"快捷键扩展",tags:[componentsTags.video,componentsTags.utils],entry:g,unload:()=>{u&&(u.enable=!1)},reload:()=>{u&&(u.enable=!0)},description:{"zh-CN":"为脚本的功能和 b 站的功能启用键盘快捷键支持, 快捷键列表可在`快捷键设置`中查看和配置."},extraOptions:()=>Promise.resolve().then(o.bind(o,716)).then((e=>e.default)),options:c,plugin:{displayName:"快捷键扩展 - 搜索支持",setup:e=>{let{addData:t}=e;t("launchBar.actions",(e=>{e.push({name:"keymapSettings",getActions:async()=>[{name:"快捷键扩展设置",description:"Keymap Settings",icon:"mdi-keyboard-settings-outline",action:async()=>{const{toggleKeymapSettings:e}=await Promise.resolve().then(o.bind(o,122));e()}}]})}))}},commitHash:"7e9a93368e3e56b6b8e02e306748fca6a3f58ae9",coreVersion:"2.9.1"})})(),r=r.component})()));