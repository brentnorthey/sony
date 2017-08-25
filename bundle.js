/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = qs;
/* harmony export (immutable) */ __webpack_exports__["b"] = $on;
/* unused harmony export $delegate */
/**
 * querySelector wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope] Optional scope element for the selector
 */
function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}

/**
 * addEventListener wrapper
 *
 * @param {Element|Window} target Target Element
 * @param {string} type Event name to bind to
 * @param {Function} callback Event callback
 * @param {boolean} [capture] Capture the event
 */
function $on(target, type, callback, capture) {
  target.addEventListener(type, callback, !!capture);
}

/**
 * Attach a handler to an event for all elements matching a selector.
 *
 * @param {Element} target Element which the event must bubble to
 * @param {string} selector Selector to match
 * @param {string} type Event name
 * @param {Function} handler Function called when the event bubbles to target
 *                           from an element matching selector
 * @param {boolean} [capture] Capture the event
 */
function $delegate(target, selector, type, handler, capture) {
  const dispatchEvent = event => {
    const targetElement = event.target;
    const potentialElements = target.querySelectorAll(selector);
    let i = potentialElements.length;

    while (i--) {
      if (potentialElements[i] === targetElement) {
        handler.call(targetElement, event);
        break;
      }
    }
  };

  $on(target, type, dispatchEvent, !!capture);
}

/**
 * Encode less-than and ampersand characters with entity codes to make user-
 * provided text safe to parse as HTML.
 *
 * @param {string} s String to escape
 *
 * @returns {string} String with unsafe characters escaped with entity codes
 */

const escapeForHTML = s => s.replace(/[&<]/g, c => c === '&' ? '&amp;' : '&lt;');
/* unused harmony export escapeForHTML */



/* Utilities */

const $fetchJSONP = (unique => url =>
    new Promise(rs => {
      const script = document.createElement('script');
      const name = `_jsonp_${unique++}`;

      if (url.match(/\?/)) {
        url += `&callback=${name}`;
      } else {
        url += `?callback=${name}`;
      }

      script.src = url;
      window[name] = json => {
        rs(new Response(JSON.stringify(json)));
        console.log('here');
        script.remove();
        delete window[name];
      };

      document.body.appendChild(script);
    })
)(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = $fetchJSONP;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(0);




__webpack_require__(5);

/* Initialize after DOM is ready */
let init = function () {
  let view = new __WEBPACK_IMPORTED_MODULE_0__view__["a" /* default */]('View');
  let controller = new __WEBPACK_IMPORTED_MODULE_1__controller__["a" /* default */] ('Controller', view);
};

Object(__WEBPACK_IMPORTED_MODULE_2__helpers__["b" /* $on */])(window, 'load', init);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(0);


class View {

  constructor(name) {
    this.name = name;
    this.formInput = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* qs */])('.form__input');
    this.formSubmit = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* qs */])('.form__submit');
    this.totalCount = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* qs */])('.total__count');
    this.countPrev = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* qs */])('.count__prev');
    this.countIndex = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* qs */])('.count__index');
    this.countLength = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* qs */])('.count__length');
    this.countNext = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* qs */])('.count__next');
    this.containerItem = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* qs */])('.container__item');
  }

  bindPrev(handler) {
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* $on */])(this.countPrev, 'click', () => {
      handler();
    });
  }

  bindNext(handler) {
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* $on */])(this.countNext, 'click', () => {
      handler();
    });
  }

  getFormInput() {
    return this.formInput;
  }

  bindSubmit(handler) {
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* $on */])(this.formSubmit, 'click', (e) => {
      e.preventDefault();
      handler();
    });
  }

  getTotalCount() {
    return this.totalCount;
  }

  setCountIndex(index) {
    this.countIndex.innerHTML = index;
  }

  setCountLength(length) {
    this.countLength.innerHTML = length;
  }

  setTotalCount(count) {
    this.totalCount.innerHTML = count;
  }

  renderStream(item) {
    this.containerItem.innerHTML += item.renderItem();
  }

  clearItems() {
    this.containerItem.innerHTML = '';
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item__ = __webpack_require__(4);



class Controller {
  constructor(name, view) {
    this.client_id = 'xzsmhnyi8grqdveqjez2sog16fhcoj';
    this.currentStream = null;
    this.offset = 10;
    this.currentIndex = 1;
    this.currentLength =  0;
    this.name = name;
    this.view = view;
    view.bindPrev(this.prev.bind(this));
    view.bindNext(this.next.bind(this));
    view.bindSubmit(this.submit.bind(this));
  }

  _getClientId() {
    return this.client_id;
  }

  getStream() {
    return this.currentStream;
  }

  setStream(query) {
    let request_url = 'https://api.twitch.tv/kraken/search/streams?q=' + query + '&offset=' + this.getOffset() + '&callback=processData&client_id=' + this._getClientId();
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* $fetchJSONP */])(request_url);
    this.updateData();
  }

  showName() {
    return this.name;
  }

  prev() {
    let stream = this.getStream();
    if (this.getCurrentIndex() == 1 || !stream)
      return;
    let request_url = stream._links.prev + '&callback=processData&client_id=' + this._getClientId();
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* $fetchJSONP */])(request_url);
    this.updateData();
    this.updateCurrentIndex(-1);
    this.view.setCountIndex(this.currentIndex);
    this.renderStream();
  }

  next() {
    let stream = this.getStream();

    if (this.getCurrentIndex() >= this.getCurrentLength() || !stream)
      return;

    let request_url = stream._links.next + '&callback=processData&client_id=' + this._getClientId();
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* $fetchJSONP */])(request_url);

    this.updateData();

    this.updateCurrentIndex(1);
    this.view.setCountIndex(this.getCurrentIndex());
  }

  setTotalCount() {
    let stream = this.getStream();
    this.view.setTotalCount(stream._total);
  }

  setCountIndex() {
    this.view.setCountIndex(this.currentIndex);
  }

  setCountLength() {
      this.view.setCountLength(this.getCurrentLength());
  }

  getCurrentLength(){
    return this.currentLength;
  }

  getCurrentIndex() {
    return this.currentIndex;
  }

  getOffset() {
    return this.offset;
  }

  updateCurrentIndex(val) {
    this.currentIndex = this.currentIndex + val;
  }

  setCurrentIndex(val) {
    this.currentIndex = val;
  }

  setCurrentLength(){
    let stream = this.getStream();
    if (stream)
      this.currentLength = Math.ceil(stream._total / this.offset);
  }

  renderStream() {
    this.view.clearItems();
    this.getStream().streams.forEach((element) => {
      this.view.renderStream(new __WEBPACK_IMPORTED_MODULE_1__item__["a" /* default */](element.game, element.preview.medium, element.game, element.viewers, element.channel.status));
    });
  }

  updateData() {
    setTimeout(() => {
      this.currentStream = document.data;
      this.setCurrentLength();
      this.setCountLength();
      this.setCountIndex();
      this.setTotalCount();
      this.renderStream();
    }, 1000);
  }

  submit() {
    this.setCurrentIndex(1);
    this.setStream(this.view.getFormInput().value, 10);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Controller;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* Item Class */
class Item {
  constructor(name, preview, stream, viewers, desc)
  {
    this.name = name;
    this.preview = preview;
    this.stream = stream;
    this.viewers = viewers;
    this.desc = desc;
  }

  getPreview() {
    return this.preview;
  }

  setPreview(preview) {
    this.preview = preview;
  }

  setName(name)
  {
    this.name = name;
  }

  getName()
  {
    return this.name;
  }

  setStream(stream)
  {
    this.stream = stream;
  }

  getStream()
  {
    return this.stream;
  }

  setViewers(viewers)
  {
    this.viewers = viewers;
  }

  getViewers()
  {
    return this.viewers;
  }

  setDesc(desc)
  {
    this.desc = desc;
  }

  getDesc()
  {
    return this.desc;
  }

  renderItem()
  {
    let output = `<div class="item item--simple">
          <div class="item__preview"><image class="item__preview" src="${this.getPreview()}"/></div>
          <div class="container">
          <div class="item__stream">${this.getStream()}</div>
          <div class="item__name"> ${this.getName()}</div>
          <div class="item__viewers"> ${this.getViewers()} viewers</div>
          <div class="item__desc">${this.getDesc()}</div>
          </div>
          </div>
          </div>`;

    return output;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Item;






/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "html {\n    margin: 0 0 0 0;\n    padding: 0;\n    font-size: 14px;\n}\n\nbody {\n    background: #1E1E1E;\n    color: #ccc;\n    display: flex;\n    justify-content: space-between;\n    font-family: Tahoma, Geneva, Sans-Serif;\n    font-size: 1rem;\n    margin: 0;\n    padding: 0;\n    user-select: none;\n}\n\n.container {\n    margin: .5rem;\n    padding: .5rem;\n}\n\n.container--main {\n    background: #2B2B2B;\n    border: 1px solid orange;\n    margin: 2rem auto;\n    width: 80%;\n}\n\n.container__search {\n    display: flex;\n    background: #3C3F41;\n    border: 1px solid orange;\n    align-items: flex-end;\n    height: 10rem;\n}\n\n.container__control {\n    display: flex;\n    justify-content: space-between;\n}\n\n.container__item {\n    border: 1px solid orange;\n}\n\n.form {\n}\n\n.form--simple {\n}\n\n.form__input {\n    background: #CCC;\n    height: 2rem;\n    min-width: 20rem;\n    max-width: 90%;\n}\n\n.form__submit {\n    height: 2rem;\n}\n\n.form__submit--disabled {\n}\n\n.count {\n    display: flex;\n    justify-content: space-between;\n}\n\n.count__prev {\n    padding: .3rem;\n}\n\n.count__next {\n    padding: .3rem;\n}\n\n.count__index {\n    padding: .3rem;\n}\n\n.count__index:after {\n    content: ' /';\n}\n\n.count__length {\n    padding: .3rem;\n}\n\n.total__count {\n    margin-left: 5px;\n}\n\n.total {\n    display: flex;\n    align-items: center;\n}\n\n.item {\n    display: flex;\n    width: 100%;\n}\n\n.item--simple {\n    padding: 1rem;\n}\n\n.item__preview {\n    background: darkorange;\n    width: 320px;\n    height:180px;\n}\n\n.item__stream {\n    font-size: 2rem;\n}\n\n.item__viewers {\n    display: inline-block;\n    font-size: 1.5rem;\n}\n\n.item__name {\n    display: inline-block;\n    font-size: 1.5rem;\n}\n\n.item__name:after {\n    content: \" - \";\n}\n\n.item__submit {\n}\n\n.item__submit--disabled {\n\n}", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);