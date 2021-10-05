/**
 * videojs-vimeo
 * @version 3.0.0
 * @copyright 2016 Benoit Tremblay <trembl.ben@gmail.com>
 * @license MIT
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojsVimeo = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/*! @vimeo/player v2.16.1 | (c) 2021 Vimeo | MIT License | https://github.com/vimeo/player.js */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e="undefined"!=typeof globalThis?globalThis:e||self).Vimeo=e.Vimeo||{},e.Vimeo.Player=t())}(this,function(){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var e="undefined"!=typeof global&&"[object global]"==={}.toString.call(global);function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function c(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function s(e){var t,n=0<arguments.length&&void 0!==e?e:{},r=n.id,o=n.url,i=r||o;if(!i)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(t=i,!isNaN(parseFloat(t))&&isFinite(t)&&Math.floor(t)==t)return"https://vimeo.com/".concat(i);if(c(i))return i.replace("http:","https:");if(r)throw new TypeError("“".concat(r,"” is not a valid video id."));throw new TypeError("“".concat(i,"” is not a vimeo.com url."))}var t=void 0!==Array.prototype.indexOf,n="undefined"!=typeof window&&void 0!==window.postMessage;if(!(e||t&&n))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var o,a,u,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(u(this,"_id","_WeakMap_"+h()+"."+h()),0<arguments.length)throw new TypeError("WeakMap iterable is not supported")}function d(e,t){if(!m(e)||!a.call(e,"_id"))throw new TypeError(t+" method called on incompatible receiver "+typeof e)}function h(){return Math.random().toString().substring(2)}function m(e){return Object(e)===e}(o="undefined"!=typeof self?self:"undefined"!=typeof window?window:l).WeakMap||(a=Object.prototype.hasOwnProperty,u=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n},o.WeakMap=(u(f.prototype,"delete",function(e){if(d(this,"delete"),!m(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)}),u(f.prototype,"get",function(e){if(d(this,"get"),m(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}}),u(f.prototype,"has",function(e){if(d(this,"has"),!m(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)}),u(f.prototype,"set",function(e,t){if(d(this,"set"),!m(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?n[1]=t:u(e,this._id,[e,t]),this}),u(f,"_polyfill",!0),f));var v,p=(function(e){var t,n,r;r=function(){var t,n,r,o,i,a,e=Object.prototype.toString,u="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),t=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(e){t=function(e,t,n){return e[t]=n,e}}function l(e,t){this.fn=e,this.self=t,this.next=void 0}function c(e,t){r.add(e,t),n=n||u(r.drain)}function s(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function f(){for(var e=0;e<this.chain.length;e++)!function(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=s(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function d(e){var n,r=this;if(!r.triggered){r.triggered=!0,r.def&&(r=r.def);try{(n=s(e))?c(function(){var t=new v(r);try{n.call(e,function(){d.apply(t,arguments)},function(){h.apply(t,arguments)})}catch(e){h.call(t,e)}}):(r.msg=e,r.state=1,0<r.chain.length&&c(f,r))}catch(e){h.call(new v(r),e)}}}function h(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,0<t.chain.length&&c(f,t))}function m(e,n,r,o){for(var t=0;t<n.length;t++)!function(t){e.resolve(n[t]).then(function(e){r(t,e)},o)}(t)}function v(e){this.def=e,this.triggered=!1}function p(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function y(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var r=new p(this);this.then=function(e,t){var n={success:"function"!=typeof e||e,failure:"function"==typeof t&&t};return n.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");n.resolve=e,n.reject=t}),r.chain.push(n),0!==r.state&&c(f,r),n.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){d.call(r,e)},function(e){h.call(r,e)})}catch(e){h.call(r,e)}}var g=t({},"constructor",y,!(r={add:function(e,t){a=new l(e,t),i?i.next=a:o=a,i=a,a=void 0},drain:function(){var e=o;for(o=i=n=void 0;e;)e.fn.call(e.self),e=e.next}}));return t(y.prototype=g,"__NPO__",0,!1),t(y,"resolve",function(n){return n&&"object"==typeof n&&1===n.__NPO__?n:new this(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");e(n)})}),t(y,"reject",function(n){return new this(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");t(n)})}),t(y,"all",function(t){var a=this;return"[object Array]"!=e.call(t)?a.reject(TypeError("Not an array")):0===t.length?a.resolve([]):new a(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");var r=t.length,o=Array(r),i=0;m(a,t,function(e,t){o[e]=t,++i===r&&n(o)},e)})}),t(y,"race",function(t){var r=this;return"[object Array]"!=e.call(t)?r.reject(TypeError("Not an array")):new r(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");m(r,t,function(e,t){n(t)},e)})}),y},(n=l)[t="Promise"]=n[t]||r(),e.exports&&(e.exports=n[t])}(v={exports:{}}),v.exports),y=new WeakMap;function g(e,t,n){var r=y.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),y.set(e.element,r)}function w(e,t){return(y.get(e.element)||{})[t]||[]}function b(e,t,n){var r=y.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],y.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),y.set(e.element,r),r[t]&&0===r[t].length}var k=["autopause","autoplay","background","byline","color","controls","dnt","height","id","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function E(r,e){var t=1<arguments.length&&void 0!==e?e:{};return k.reduce(function(e,t){var n=r.getAttribute("data-vimeo-".concat(t));return!n&&""!==n||(e[t]=""===n?1:n),e},t)}function T(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function P(i,e,t){var a=1<arguments.length&&void 0!==e?e:{},u=2<arguments.length?t:void 0;return new Promise(function(t,n){if(!c(i))throw new TypeError("“".concat(i,"” is not a vimeo.com url."));var e="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(i));for(var r in a)a.hasOwnProperty(r)&&(e+="&".concat(r,"=").concat(encodeURIComponent(a[r])));var o=new("XDomainRequest"in window?XDomainRequest:XMLHttpRequest);o.open("GET",e,!0),o.onload=function(){if(404!==o.status)if(403!==o.status)try{var e=JSON.parse(o.responseText);if(403===e.domain_status_code)return T(e,u),void n(new Error("“".concat(i,"” is not embeddable.")));t(e)}catch(e){n(e)}else n(new Error("“".concat(i,"” is not embeddable.")));else n(new Error("“".concat(i,"” was not found.")))},o.onerror=function(){var e=o.status?" (".concat(o.status,")"):"";n(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},o.send()})}function _(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function M(e,t,n){var r,o;e.element.contentWindow&&e.element.contentWindow.postMessage&&(r={method:t},void 0!==n&&(r.value=n),8<=(o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1")))&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin))}function N(n,r){var t,e,o=[];(r=_(r)).event?("error"===r.event&&w(n,r.data.method).forEach(function(e){var t=new Error(r.data.message);t.name=r.data.name,e.reject(t),b(n,r.data.method,e)}),o=w(n,"event:".concat(r.event)),t=r.data):!r.method||(e=function(e,t){var n=w(e,t);if(n.length<1)return!1;var r=n.shift();return b(e,t,r),r}(n,r.method))&&(o.push(e),t=r.value),o.forEach(function(e){try{if("function"==typeof e)return void e.call(n,t);e.resolve(t)}catch(e){}})}var F,x,C,j=new WeakMap,A=new WeakMap,q={},Player=function(){function Player(u){var e,t,l=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Player),window.jQuery&&u instanceof jQuery&&(1<u.length&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),u=u[0]),"undefined"!=typeof document&&"string"==typeof u&&(u=document.getElementById(u)),e=u,!Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"===u.nodeName||(t=u.querySelector("iframe"))&&(u=t),"IFRAME"===u.nodeName&&!c(u.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(j.has(u))return j.get(u);this._window=u.ownerDocument.defaultView,this.element=u,this.origin="*";var r,o=new p(function(i,a){var e;l._onMessage=function(e){if(c(e.origin)&&l.element.contentWindow===e.source){"*"===l.origin&&(l.origin=e.origin);var t=_(e.data);if(t&&"error"===t.event&&t.data&&"ready"===t.data.method){var n=new Error(t.data.message);return n.name=t.data.name,void a(n)}var r=t&&"ready"===t.event,o=t&&"ping"===t.method;if(r||o)return l.element.setAttribute("data-ready","true"),void i();N(l,t)}},l._window.addEventListener("message",l._onMessage),"IFRAME"!==l.element.nodeName&&P(s(e=E(u,n)),e,u).then(function(e){var t,n,r,o=T(e,u);return l.element=o,l._originalElement=u,t=u,n=o,r=y.get(t),y.set(n,r),y.delete(t),j.set(l.element,l),e}).catch(a)});return A.set(this,o),j.set(this.element,this),"IFRAME"===this.element.nodeName&&M(this,"ping"),q.isEnabled&&(r=function(){return q.exit()},this.fullscreenchangeHandler=function(){(q.isFullscreen?g:b)(l,"event:exitFullscreen",r),l.ready().then(function(){M(l,"fullscreenchange",q.isFullscreen)})},q.on("fullscreenchange",this.fullscreenchangeHandler)),this}var e,t,n;return e=Player,(t=[{key:"callMethod",value:function(n,e){var r=this,o=1<arguments.length&&void 0!==e?e:{};return new p(function(e,t){return r.ready().then(function(){g(r,n,{resolve:e,reject:t}),M(r,n,o)}).catch(t)})}},{key:"get",value:function(n){var r=this;return new p(function(e,t){return n=i(n,"get"),r.ready().then(function(){g(r,n,{resolve:e,reject:t}),M(r,n)}).catch(t)})}},{key:"set",value:function(n,r){var o=this;return new p(function(e,t){if(n=i(n,"set"),null==r)throw new TypeError("There must be a value to set.");return o.ready().then(function(){g(o,n,{resolve:e,reject:t}),M(o,n,r)}).catch(t)})}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===w(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){}),g(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");b(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=A.get(this)||new p(function(e,t){t(new Error("Unknown player. Probably unloaded."))});return p.resolve(e)}},{key:"addCuePoint",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:{};return this.callMethod("addCuePoint",{time:e,data:n})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return q.isEnabled?q.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return q.isEnabled?q.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return q.isEnabled?p.resolve(q.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var n=this;return new p(function(e){var t;A.delete(n),j.delete(n.element),n._originalElement&&(j.delete(n._originalElement),n._originalElement.removeAttribute("data-vimeo-initialized")),n.element&&"IFRAME"===n.element.nodeName&&n.element.parentNode&&(n.element.parentNode.parentNode&&n._originalElement&&n._originalElement!==n.element.parentNode?n.element.parentNode.parentNode.removeChild(n.element.parentNode):n.element.parentNode.removeChild(n.element)),n.element&&"DIV"===n.element.nodeName&&n.element.parentNode&&(n.element.removeAttribute("data-vimeo-initialized"),(t=n.element.querySelector("iframe"))&&t.parentNode&&(t.parentNode.parentNode&&n._originalElement&&n._originalElement!==t.parentNode?t.parentNode.parentNode.removeChild(t.parentNode):t.parentNode.removeChild(t))),n._window.removeEventListener("message",n._onMessage),q.isEnabled&&q.off("fullscreenchange",n.fullscreenchangeHandler),e()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&r(e.prototype,t),n&&r(e,n),Player}();return e||(F=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),x={fullscreenchange:F.fullscreenchange,fullscreenerror:F.fullscreenerror},C={request:function(o){return new Promise(function(e,t){function n(){C.off("fullscreenchange",n),e()}C.on("fullscreenchange",n);var r=(o=o||document.documentElement)[F.requestFullscreen]();r instanceof Promise&&r.then(n).catch(t)})},exit:function(){return new Promise(function(t,e){var n,r;C.isFullscreen?(n=function e(){C.off("fullscreenchange",e),t()},C.on("fullscreenchange",n),(r=document[F.exitFullscreen]())instanceof Promise&&r.then(n).catch(e)):t()})},on:function(e,t){var n=x[e];n&&document.addEventListener(n,t)},off:function(e,t){var n=x[e];n&&document.removeEventListener(n,t)}},Object.defineProperties(C,{isFullscreen:{get:function(){return Boolean(document[F.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[F.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[F.fullscreenEnabled])}}}),q=C,function(e){function n(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))}var t=0<arguments.length&&void 0!==e?e:document;[].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach(function(t){try{if(null!==t.getAttribute("data-vimeo-defer"))return;var e=E(t);P(s(e),e,t).then(function(e){return T(e,t)}).catch(n)}catch(e){n(e)}})}(),function(e){var r=0<arguments.length&&void 0!==e?e:document;window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",function(e){if(c(e.origin)&&e.data&&"spacechange"===e.data.event)for(var t=r.querySelectorAll("iframe"),n=0;n<t.length;n++)if(t[n].contentWindow===e.source){t[n].parentElement.style.paddingBottom="".concat(e.data.data[0].bottom,"px");break}}))}()),Player});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
'use strict';

exports.__esModule = true;

var _video = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _video2 = _interopRequireDefault(_video);

var _player = require('@vimeo/player');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _video2.default.getComponent('Component');
var Tech = _video2.default.getComponent('Tech');
var cssInjected = false;

/**
 * Vimeo - Wrapper for Video Player API
 *
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready Ready callback function
 * @extends Tech
 * @class Vimeo
 */

var Vimeo = function (_Tech) {
  _inherits(Vimeo, _Tech);

  function Vimeo(options, ready) {
    _classCallCheck(this, Vimeo);

    var _this = _possibleConstructorReturn(this, _Tech.call(this, options, ready));

    injectCss();
    _this.setPoster(options.poster);
    _this.initVimeoPlayer();
    return _this;
  }

  Vimeo.prototype.initVimeoPlayer = function initVimeoPlayer() {
    var _this2 = this;

    var vimeoOptions = {
      url: this.options_.source.src,
      byline: false,
      portrait: false,
      title: false
    };

    if (this.options_.autoplay) {
      vimeoOptions.autoplay = true;
    }
    if (this.options_.height) {
      vimeoOptions.height = this.options_.height;
    }
    if (this.options_.width) {
      vimeoOptions.width = this.options_.width;
    }
    if (this.options_.maxheight) {
      vimeoOptions.maxheight = this.options_.maxheight;
    }
    if (this.options_.maxwidth) {
      vimeoOptions.maxwidth = this.options_.maxwidth;
    }
    if (this.options_.loop) {
      vimeoOptions.loop = this.options_.loop;
    }

    this._player = new _player2.default(this.el(), vimeoOptions);
    this.initVimeoState();

    ['play', 'pause', 'ended', 'timeupdate', 'progress', 'seeked'].forEach(function (e) {
      _this2._player.on(e, function (progress) {
        if (_this2._vimeoState.progress.duration != progress.duration) {
          _this2.trigger('durationchange');
        }
        _this2._vimeoState.progress = progress;
        _this2.trigger(e);
      });
    });

    this._player.on('pause', function () {
      return _this2._vimeoState.playing = false;
    });
    this._player.on('play', function () {
      _this2._vimeoState.playing = true;
      _this2._vimeoState.ended = false;
    });
    this._player.on('ended', function () {
      _this2._vimeoState.playing = false;
      _this2._vimeoState.ended = true;
    });
    this._player.on('volumechange', function (v) {
      return _this2._vimeoState.volume = v;
    });
    this._player.on('error', function (e) {
      return _this2.trigger('error', e);
    });

    this.triggerReady();
  };

  Vimeo.prototype.initVimeoState = function initVimeoState() {
    var state = this._vimeoState = {
      ended: false,
      playing: false,
      volume: 0,
      progress: {
        seconds: 0,
        percent: 0,
        duration: 0
      }
    };

    this._player.getCurrentTime().then(function (time) {
      return state.progress.seconds = time;
    });
    this._player.getDuration().then(function (time) {
      return state.progress.duration = time;
    });
    this._player.getPaused().then(function (paused) {
      return state.playing = !paused;
    });
    this._player.getVolume().then(function (volume) {
      return state.volume = volume;
    });
    this._player.getPlaybackRate().then(function(playbackRate) {
      return state.playbackRate = playbackRate;
    });
  };

  Vimeo.prototype.createEl = function createEl() {
    var div = _video2.default.createEl('div', {
      id: this.options_.techId
    });

    div.style.cssText = 'width:100%;height:100%;top:0;left:0;position:absolute';
    div.className = 'vjs-vimeo';

    return div;
  };

  Vimeo.prototype.controls = function controls() {
    return true;
  };

  Vimeo.prototype.supportsFullScreen = function supportsFullScreen() {
    return true;
  };

  Vimeo.prototype.src = function src() {
    // @note: Not sure why this is needed but videojs requires it
    return this.options_.source;
  };

  Vimeo.prototype.currentSrc = function currentSrc() {
    return this.options_.source.src;
  };

  // @note setSrc is used in other usecases (YouTube, Html) it doesn't seem required here
  // setSrc() {}

  Vimeo.prototype.currentTime = function currentTime() {
    return this._vimeoState.progress.seconds;
  };

  Vimeo.prototype.setCurrentTime = function setCurrentTime(time) {
    this._player.setCurrentTime(time);
  };

  Vimeo.prototype.volume = function volume() {
    return this._vimeoState.volume;
  };
  Vimeo.prototype.playbackRate = function volume() {
    return this._vimeoState.playbackRate;
  };

  Vimeo.prototype.setVolume = function setVolume(v) {
    return this._player.setVolume(v);
  };

  Vimeo.prototype.duration = function duration() {
    return this._vimeoState.progress.duration;
  };

  Vimeo.prototype.buffered = function buffered() {
    var progress = this._vimeoState.progress;
    return _video2.default.createTimeRange(0, progress.percent * progress.duration);
  };

  Vimeo.prototype.paused = function paused() {
    return !this._vimeoState.playing;
  };

  Vimeo.prototype.pause = function pause() {
    this._player.pause();
  };

  Vimeo.prototype.play = function play() {
    this._player.play();
  };

  Vimeo.prototype.muted = function muted() {
    return this._vimeoState.volume === 0;
  };

  Vimeo.prototype.ended = function ended() {
    return this._vimeoState.ended;
  };

  // Vimeo does has a mute API and native controls aren't being used,
  // so setMuted doesn't really make sense and shouldn't be called.
  // setMuted(mute) {}


  return Vimeo;
}(Tech);

Vimeo.prototype.featuresTimeupdateEvents = true;

Vimeo.isSupported = function () {
  return true;
};

// Add Source Handler pattern functions to this tech
Tech.withSourceHandlers(Vimeo);

Vimeo.nativeSourceHandler = {};

/**
 * Check if Vimeo can play the given videotype
 * @param  {String} type    The mimetype to check
 * @return {String}         'maybe', or '' (empty string)
 */
Vimeo.nativeSourceHandler.canPlayType = function (source) {
  if (source === 'video/vimeo') {
    return 'maybe';
  }

  return '';
};

/*
 * Check Vimeo can handle the source natively
 *
 * @param  {Object} source  The source object
 * @return {String}         'maybe', or '' (empty string)
 * @note: Copied over from YouTube — not sure this is relevant
 */
Vimeo.nativeSourceHandler.canHandleSource = function (source) {
  if (source.type) {
    return Vimeo.nativeSourceHandler.canPlayType(source.type);
  } else if (source.src) {
    return Vimeo.nativeSourceHandler.canPlayType(source.src);
  }

  return '';
};

// @note: Copied over from YouTube — not sure this is relevant
Vimeo.nativeSourceHandler.handleSource = function (source, tech) {
  tech.src(source.src);
};

// @note: Copied over from YouTube — not sure this is relevant
Vimeo.nativeSourceHandler.dispose = function () {};

Vimeo.registerSourceHandler(Vimeo.nativeSourceHandler);

// Since the iframe can't be touched using Vimeo's way of embedding,
// let's add a new styling rule to have the same style as `vjs-tech`
function injectCss() {
  if (cssInjected) {
    return;
  }
  cssInjected = true;
  var css = '\n      .vjs-vimeo iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n    ';
  var head = document.head || document.getElementsByTagName('head')[0];

  var style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);
}

if (typeof videojs.registerTech !== 'undefined') { videojs.registerTech('Vimeo', Vimeo); } else { videojs.registerComponent('Vimeo', Vimeo); }

// Include the version number.
Vimeo.VERSION = '0.0.1';

exports.default = Vimeo;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"@vimeo/player":1}]},{},[2])(2)
});
