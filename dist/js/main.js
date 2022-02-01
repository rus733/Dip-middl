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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = () => {\r\n  //console.log('timer ');\r\n\r\n  const daysVal = document.querySelector('.count_1 > span');\r\n  const hoursVal = document.querySelector('.count_2 > span');\r\n  const minutesVal = document.querySelector('.count_3 > span');\r\n  const secondesVal = document.querySelector('.count_4 > span');\r\n  const date = new Date();\r\n\r\n  const addZero = (arg) => {\r\n    if (arg > 0 && arg < 10) {\r\n      return '0' + arg;\r\n    } else {\r\n      return arg;\r\n    }\r\n  };\r\n\r\n  // текущее время\r\n  const timeFormat = () => {\r\n    const date = new Date(); // если убрать , не работает\r\n    //const dayWeek = daysName[new Date().getDay() - 1];\r\n    const hours = addZero(date.getHours());\r\n    const minutes = addZero(date.getMinutes());\r\n    const seconds = addZero(date.getSeconds());\r\n    return {\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n    };\r\n  };\r\n\r\n  // остаток времени\r\n\r\n  const getTimeRemaining = () => {\r\n    const year = date.getFullYear() + 1;\r\n    const dateStop = new Date(year, 0, 1).getTime();\r\n    const dateNow = new Date().getTime();\r\n    const timeRemaining = (dateStop - dateNow) / 1000;\r\n    const daysNumber = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    const hoursNumber = Math.floor((timeRemaining / 60 / 60) % 24);\r\n    const minutesNumber = Math.floor((timeRemaining / 60) % 60);\r\n    const secondesNumber = Math.floor(timeRemaining % 60);\r\n\r\n    //console.log(new Date(year, 0, 1));\r\n    //console.log(new Date());\r\n\r\n    return {\r\n      hoursNumber,\r\n      daysNumber,\r\n      minutesNumber,\r\n      secondesNumber,\r\n    };\r\n  };\r\n\r\n  // вывод данных\r\n\r\n  const textDate = () => {\r\n    const time = timeFormat();\r\n    const timer = getTimeRemaining(); //daysNumber\r\n    daysVal.textContent = addZero(timer.daysNumber);\r\n    hoursVal.textContent = addZero(timer.hoursNumber);\r\n    minutesVal.textContent = addZero(timer.minutesNumber);\r\n    secondesVal.textContent = addZero(timer.secondesNumber);\r\n    //   dateBlock.innerHTML = `${time.namePartDay} <br>\r\n    // Сегодня: ${time.dayWeek} <br>\r\n    // Текущее время: ${addZero(time.hours)}:${time.minutes}:${time.seconds} ${time.amPM}<br>\r\n    // До нового года осталось ${timer.daysNumber} ${daysTextForm(timer.daysNumber)}`;\r\n  };\r\n\r\n  textDate();\r\n  setInterval(textDate, 1000);\r\n\r\n  //setInterval(getTimeRemaining, 1000);\r\n};\r\n\r\ntimer();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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