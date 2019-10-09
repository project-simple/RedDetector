(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("RedDetector", [], factory);
	else if(typeof exports === 'object')
		exports["RedDetector"] = factory();
	else
		root["RedDetector"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/RedDetector.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/RedDetector.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/*!
@author RedCamel / https://github.com/redcamel / webseon@gmail.com
MIT License
Copyright (c) 2019 ~ By RedCamel.
*/
var RedDetector = {}
var navi = window['navigator'],
	agent = navi.userAgent.toLowerCase(),
	platform = navi.platform.toLowerCase(),
	app = navi.appVersion.toLowerCase(),
	device = 'pc',
	isMobile = 0,
	browser, bv, os, osv,
	i, t0,
	ie = function () {
		if (agent.indexOf('edge') > -1) {
			if (agent.indexOf('iemobile') > -1) os = 'winMobile';
			return browser = 'edge', bv = (/edge\/([\d]+)/.exec(agent)[1]);
		} else {
			if (agent.indexOf('msie') < 0 && agent.indexOf('trident') < 0) return;
			if (agent.indexOf('iemobile') > -1) os = 'winMobile';
			return browser = 'ie', bv = agent.indexOf('msie 7') > -1 && agent.indexOf('trident') > -1 ? -1 : agent.indexOf('msie') < 0 ? 11 : parseFloat(/msie ([\d]+)/.exec(agent)[1]);
		}
	},
	whale = function () {
		return agent.indexOf('whale') < 0 ? 0 : (bv = parseFloat(/whale\/([\d]+)/.exec(agent)[1]), browser = 'whale')
	},
	chrome = function () {
		if (agent.indexOf(i = 'chrome') < 0 && agent.indexOf(i = 'crios') < 0) return;
		return browser = 'chrome', bv = parseFloat((i == 'chrome' ? /chrome\/([\d]+)/ : /crios\/([\d]+)/).exec(agent)[1]);
	},
	firefox = function () {
		return agent.indexOf('firefox') < 0 ? 0 : (browser = 'firefox', bv = parseFloat(/firefox\/([\d]+)/.exec(agent)[1]))
	},
	safari = function () {
		return agent.indexOf('safari') < 0 ? 0 : (browser = 'safari', bv = parseFloat(/safari\/([\d]+)/.exec(agent)[1]))
	},
	opera = function () {
		var i;
		return (agent.indexOf(i = 'opera') < 0 && agent.indexOf(i = 'opr') < 0) ? 0 : (browser = 'opera', bv = (i == 'opera') ? parseFloat(/version\/([\d]+)/.exec(agent)[1]) : parseFloat(/opr\/([\d]+)/.exec(agent)[1]));
	},
	naver = function () {
		return agent.indexOf('naver') < 0 ? 0 : browser = 'naver'
	};
if (!RedDetector) RedDetector = {};
if (agent.indexOf('android') > -1) {
	browser = os = 'android',
		device = agent.indexOf('mobile') == -1 ? (browser += 'Tablet', 'tablet') : 'mobile',
		osv = (i = /android ([\d.]+)/.exec(agent)) ? (i = i[1].split('.'), parseFloat(i[0] + '.' + i[1])) : 0,
		isMobile = 1,
	whale() || naver() || opera() || chrome() || firefox() || (bv = i = /safari\/([\d.]+)/.exec(agent) ? parseFloat(i[1]) : 0);
} else if (agent.indexOf(i = 'ipad') > -1 || agent.indexOf(i = 'iphone') > -1) {
	device = i == 'ipad' ? 'tablet' : 'mobile',
		browser = os = i,
		osv = (i = /os ([\d_]+)/.exec(agent)) ? (i = i[1].split('_'), parseFloat(i[0] + '.' + i[1])) : 0,
		isMobile = 1,
	whale() || naver() || opera() || chrome() || firefox() || (bv = (i = /mobile\/([\S]+)/.exec(agent)) ? parseFloat(i[1]) : 0);
} else if (platform.indexOf('win') > -1) {
	for (i in t0 = {
		'5.1': 'xp',
		'6.0': 'vista',
		'6.1': '7',
		'6.2': '8',
		'6.3': '8.1',
		'10.0': '10'
	}) {
		if (agent.indexOf('windows nt ' + i) > -1) {
			osv = t0[i];
			break;
		}
	}
	os = 'win', ie() || whale() || opera() || chrome() || firefox() || safari();
} else if (platform.indexOf('mac') > -1) {
	os = 'mac',
		i = /os x ([\d._]+)/.exec(agent)[1].replace('_', '.').split('.'),
		osv = parseFloat(i[0] + '.' + i[1]), whale() || opera() || chrome() || firefox() || safari();
} else os = app.indexOf('x11') > -1 ? 'unix' : app.indexOf('linux') > -1 ? 'linux' : 0, whale() || chrome() || firefox();
for (i in t0 = {
	device: device,
	isMobile: isMobile == 1,
	browser: browser,
	browserVer: bv,
	os: os,
	osVer: osv,
	down: isMobile ? 'touchstart' : 'mousedown',
	move: isMobile ? 'touchmove' : 'mousemove',
	up: isMobile ? 'touchend' : 'mouseup',
	click: 'click',
	over: 'mouseover',
	out: 'mouseout'
})
	if (t0.hasOwnProperty(i)) RedDetector[i] = t0[i];

/* harmony default export */ __webpack_exports__["default"] = (RedDetector);

/***/ })

/******/ })["default"];
});