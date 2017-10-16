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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sorted_js__ = __webpack_require__(1);


let test = ["b (30)", "a", "b (5)", "z"];
let result = Object(__WEBPACK_IMPORTED_MODULE_0__sorted_js__["a" /* fancySort */])(test);
console.log(result);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fancySort;

function comparer(a, b) {
  const ma = /.(\d+)\W*$/.exec(a);
  const mb = /.(\d+)\W*$/.exec(b);
  if (ma == null || mb == null || ma[1] == mb[1]) {
  	return a < b ? -1 : a > b ? 1 : 0;
  } else {
    const na = +ma[1], nb = +mb[1];
    return na < nb ? -1 : na > nb ? 1 : 0;
  }
}

function binaryLookup(ar, i, comparer) {
  if (ar.length == 0) {
    return { found: false, index: 0 };
  }
  let l = 0, r = ar.length - 1;
  while (l < r) {
  	const mid = Math.floor((l + r) / 2);
    if (comparer(ar[mid], i) < 0) {
      l = mid + 1;
    } else {
    	r = mid;
    }
  }
  const result = comparer(ar[l], i);
  if (result === 0) {
  	return { found: true, index: l };
  }
  return {
    found: false,
    index: result < 0 ? l + 1 : l
  };
}

function fancySort(input) {
  return input.reduce((ar, i) => {
    const { index } = binaryLookup(ar, i, comparer);
    ar.splice(index, 0, i);
    return ar;
  }, []);
}



/***/ })
/******/ ]);