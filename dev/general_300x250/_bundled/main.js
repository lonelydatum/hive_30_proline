(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

function batter(obj) {
	var speed = arguments.length <= 1 || arguments[1] === undefined ? .3 : arguments[1];

	console.log(obj);
	var tl = new TimelineMax();
	TweenLite.to(".hero_batter_bg", .3, { opacity: 1 });
	TweenLite.from([".batter_all"], 2, { x: obj.bat, ease: Power2.easeOut });
	TweenLite.from([".ball"], 2, { x: obj.ball, ease: Power2.easeOut });
	var list = [".hero_batter_1", ".hero_batter_3", ".hero_batter_5", ".hero_batter_7", ".hero_batter_9"];
	list.map(function (item, index) {

		var time = "-=" + index * .01;
		var notIt = list.filter(function (f) {
			return f !== item;
		});
		tl.add("frame", time);
		tl.to(notIt, speed, { opacity: 0 }, "frame");
		tl.set(item, { opacity: 1 }, "frame");
	});

	return tl;
}

exports.size = size;
exports.batter = batter;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function rand(min, max) {
	var diff = max - min;
	return Math.random() * diff + min;
}

function elements(list) {
	var tl = new TimelineMax();

	tl.from(".all", .8, { x: -250, opacity: .2 }, 0);
	list.map(function (item, index) {

		tl.from(item, index * .08 + .1, { x: -190, y: "+=" + rand(20, 40), ease: Power3.easeOut }, 0.3);
	});
}

function start() {
	TweenLite.defaultEase = Power3.easeInOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	var list = [".helmet_fb", ".soccer", ".net", ".basketball", ".skate", ".bat", ".helmat_bb", ".cleats", ".glove"];

	elements(list);

	tl.from(".t1_a", .01, { opacity: 0 }, "+=.8");
	tl.from([".t1_b", ".t1_c"], .01, { opacity: 0 }, "+=.7");

	tl.add("f2", 3.3);
	tl.to(".frame1", .3, { opacity: 0 }, "f2");
	tl.set(".frame2", { opacity: 1 }, "f2");

	tl.add("phone_move");
	tl.from('.phone', .4, { y: "+=100", ease: Power3.easeOut }, "phone_move");
	tl.from('.illust', .3, { scale: 0 }, "phone_move+=.3");

	tl.from(['.t2', '.legal'], .01, { opacity: 0 }, "+=.3");
	tl.from('.cta', .1, { opacity: 0 }, "+=1.4");
	tl.to('.cta', .2, { opacity: 0 }, "+=2.3");
	tl.from('.cta2', .3, { opacity: 0 });

	// tl.from('.legal', .3, {opacity:0}, "+=.1")

	// tl.gotoAndPlay("f2")
}

// batter()

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map