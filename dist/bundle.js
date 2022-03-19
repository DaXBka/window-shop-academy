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

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./js/modules/timer.js\");\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__.timer)({\r\n    id: 'timer1',\r\n    timerDays: '.count_1 span',\r\n    timerHours: '.count_2 span',\r\n    timerMinutes: '.count_3 span',\r\n    timerSeconds: '.count_4 span',\r\n});\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__.timer)({\r\n    id: 'timer2',\r\n    timerDays: '.count_1 span',\r\n    timerHours: '.count_2 span',\r\n    timerMinutes: '.count_3 span',\r\n    timerSeconds: '.count_4 span',\r\n});\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/index.js?");

/***/ }),

/***/ "./js/modules/helpers.js":
/*!*******************************!*\
  !*** ./js/modules/helpers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addZero\": () => (/* binding */ addZero)\n/* harmony export */ });\nconst addZero = num => {\r\n    if (num.toString().length < 2) {\r\n        return '0' + num;\r\n    }\r\n    return num;\r\n};\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/modules/helpers.js?");

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./js/modules/helpers.js\");\n\r\n\r\nconst timer = ({ id, timerDays, timerHours, timerMinutes, timerSeconds }) => {\r\n    const timer = document.getElementById(id);\r\n\r\n    const daysTimer = timer.querySelector(timerDays);\r\n    const hoursTimer = timer.querySelector(timerHours);\r\n    const minutesTimer = timer.querySelector(timerMinutes);\r\n    const secondsTimer = timer.querySelector(timerSeconds);\r\n\r\n    const daysRemaining = +timer.dataset.days || 7;\r\n\r\n    let isDeadline = false;\r\n    let idInterval;\r\n\r\n    const getTimeRemaining = () => {\r\n        const dateNow = new Date();\r\n        const dateToRemaining = dateNow.toString().split(' ');\r\n\r\n        dateToRemaining[2] = +dateToRemaining[2] + daysRemaining;\r\n        const dateStop = new Date(dateToRemaining.slice(1, 4));\r\n\r\n        const timeRemaining = (dateStop.getTime() - dateNow.getTime()) / 1000;\r\n        if (timeRemaining < 0) isDeadline = true;\r\n\r\n        const days = Math.floor(timeRemaining / (3600 * 24));\r\n        const hours = Math.floor(timeRemaining / 3600) % 24;\r\n        const minutes = Math.floor(timeRemaining / 60) % 60;\r\n        const seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { days, hours, minutes, seconds };\r\n    };\r\n\r\n    const updateTimer = () => {\r\n        const getTime = getTimeRemaining();\r\n\r\n        if (isDeadline) {\r\n            clearInterval(idInterval);\r\n            return;\r\n        }\r\n\r\n        daysTimer.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addZero)(getTime.days);\r\n        hoursTimer.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addZero)(getTime.hours);\r\n        minutesTimer.txetContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addZero)(getTime.minutes);\r\n        secondsTimer.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addZero)(getTime.seconds);\r\n    };\r\n\r\n    try {\r\n        if (!(timerDays && timerHours && timerMinutes && timerSeconds)) {\r\n            throw new Error('Where is the classes for the timer? (Module: timer.js).');\r\n        }\r\n        if (!(daysTimer && hoursTimer && minutesTimer && secondsTimer)) {\r\n            throw new Error('Classes for modules/timer.js are faulty.');\r\n        }\r\n    } catch (e) {\r\n        return;\r\n    }\r\n\r\n    updateTimer();\r\n\r\n    idInterval = setInterval(updateTimer, 1000);\r\n};\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;