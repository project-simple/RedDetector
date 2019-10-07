"use strict";
/*!
@author RedCamel / https://github.com/redcamel / webseon@gmail.com
MIT License
Copyright (c) 2019 ~ By RedCamel.
*/
;(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
			(global.RedDetector = factory());
}(this, (function () {
	'use strict';
	var result = {}
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
	if (!result) result = {};
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
		//root:document.body.scrollHeight ? document.body : document.documentElement,
		down: isMobile ? 'touchstart' : 'mousedown',
		move: isMobile ? 'touchmove' : 'mousemove',
		up: isMobile ? 'touchend' : 'mouseup',
		click: 'click',
		over: 'mouseover',
		out: 'mouseout'
	})
		if (t0.hasOwnProperty(i)) result[i] = t0[i];
	//Object.defineProperty(result,'root',{
	//	get:function(){return document.body.scrollHeight ? document.body : document.documentElement}
	//});
	return result;
})));
