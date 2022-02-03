/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('5 february 2022');\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  //console.log('modal');\r\n  const btnBlock = document.querySelector('.btn-block ');\r\n  const btnSm = document.querySelectorAll('.btn-sm');\r\n  const headerModal = document.querySelector('.header-modal'); //btn-sm\r\n  const servicesModal = document.querySelector('.services-modal');\r\n\r\n  const overlay = document.querySelector('.overlay'); //.services-modal__close\r\n  const headerModalClose = headerModal.querySelector('.header-modal__close');\r\n  const servicesModalClose = servicesModal.querySelector('.services-modal__close');\r\n\r\n  btnBlock.addEventListener('click', () => {\r\n    overlay.style.display = 'flex';\r\n    headerModal.classList.remove('header-modal');\r\n  });\r\n\r\n  headerModalClose.addEventListener('click', () => {\r\n    overlay.style.display = 'none';\r\n    headerModal.classList.add('header-modal');\r\n  });\r\n\r\n  btnSm.forEach((el) => {\r\n    el.addEventListener('click', () => {\r\n      overlay.style.display = 'flex';\r\n      servicesModal.classList.remove('services-modal');\r\n    });\r\n  });\r\n\r\n  servicesModalClose.addEventListener('click', () => {\r\n    overlay.style.display = 'none';\r\n    servicesModal.classList.add('services-modal');\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  // const daysVal = document.querySelector('.count_1 > span');\r\n  // const hoursVal = document.querySelector('.count_2 > span');\r\n  // const minutesVal = document.querySelector('.count_3 > span');\r\n  // const secondesVal = document.querySelector('.count_4 > span');\r\n  const daysVal = document.querySelectorAll('.count_1');\r\n  const hoursVal = document.querySelectorAll('.count_2');\r\n  const minutesVal = document.querySelectorAll('.count_3');\r\n  const secondesVal = document.querySelectorAll('.count_4 ');\r\n  let idInterval = 0;\r\n  const dayForms = [' День ', ' Дня ', ' Дней '];\r\n  const hoursForms = [' Час ', ' часа ', ' Часов '];\r\n  const minutesForms = [' Минута ', ' Минуты ', ' Минут '];\r\n  const secondesForms = [' Секунда ', ' Секунды ', ' Секунд '];\r\n  const date = new Date();\r\n  //\r\n\r\n  const declOfNum = (n, textForms) => {\r\n    n = Math.abs(n) % 100;\r\n    let n1 = n % 10;\r\n    if (n > 10 && n < 20) {\r\n      return textForms[2];\r\n    }\r\n    if (n1 > 1 && n1 < 5) {\r\n      return textForms[1];\r\n    }\r\n    if (n1 == 1) {\r\n      return textForms[0];\r\n    }\r\n    return textForms[2];\r\n  };\r\n\r\n  // const addZero = (arg) => {\r\n  //   if (arg < 10) {\r\n  //     return '0' + arg;\r\n  //   } else {\r\n  //     return arg;\r\n  //   }\r\n  // };\r\n  const addZero = (arg) => (arg < 10 ? '0' + arg : arg);\r\n\r\n  // остаток времени\r\n\r\n  const getTimeRemaining = () => {\r\n    //const year = date.getFullYear() + 1;\r\n    const dateStop = new Date(deadline); //.getTime();\r\n    const dateNow = new Date(); //.getTime();\r\n    const diff = (dateStop - dateNow) / 1000;\r\n    let days = diff > 0 ? Math.floor(diff / 60 / 60 / 24) : 0;\r\n    let hours = diff > 0 ? Math.floor((diff / 60 / 60) % 24) : 0;\r\n    let minutes = diff > 0 ? Math.floor((diff / 60) % 60) : 0;\r\n    let secondes = diff > 0 ? Math.floor(diff % 60) : 0;\r\n\r\n    if (diff <= 0) {\r\n      clearInterval(idInterval);\r\n      days = 0;\r\n      hours = 0;\r\n      minutes = 0;\r\n      secondes = 0;\r\n    }\r\n\r\n    return {\r\n      diff,\r\n      days,\r\n      hours,\r\n      minutes,\r\n      secondes,\r\n    };\r\n  };\r\n\r\n  // вывод данных\r\n\r\n  const updateClock = () => {\r\n    //const time = timeFormat();\r\n    const getTime = getTimeRemaining(); //\r\n    // const days = addZero(getTime.days);\r\n    // const hours = addZero(getTime.hours);\r\n    // const minutes = addZero(getTime.minutes);\r\n    // const secondes = addZero(getTime.secondes);\r\n\r\n    daysVal.forEach((el) => {\r\n      el.innerHTML = `${declOfNum(getTime.days, dayForms)}:</br> <span>${addZero(getTime.days)}</span>`;\r\n    });\r\n    hoursVal.forEach((el) => {\r\n      el.innerHTML = `${declOfNum(getTime.hours, hoursForms)}:</br> <span>${addZero(getTime.hours)}</span>`;\r\n    });\r\n\r\n    minutesVal.forEach((el) => {\r\n      el.innerHTML = `${declOfNum(getTime.minutes, minutesForms)}:</br> <span>${addZero(getTime.minutes)}</span>`;\r\n    });\r\n\r\n    secondesVal.forEach((el) => {\r\n      el.innerHTML = `${declOfNum(getTime.secondes, secondesForms)}:</br> <span>${addZero(getTime.secondes)}</span>`;\r\n    });\r\n  };\r\n\r\n  updateClock();\r\n\r\n  idInterval = setInterval(updateClock, 1000);\r\n};\r\n\r\ntimer();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;