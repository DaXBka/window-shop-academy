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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./js/modules/timer.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calculator */ \"./js/modules/calculator.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./js/modules/slider.js\");\n/* harmony import */ var _modules_scrollButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollButton */ \"./js/modules/scrollButton.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ \"./js/modules/modal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__.timer)({\r\n    id: 'timer1',\r\n    timerDays: '.count_1 span',\r\n    timerHours: '.count_2 span',\r\n    timerMinutes: '.count_3 span',\r\n    timerSeconds: '.count_4 span',\r\n});\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__.timer)({\r\n    id: 'timer2',\r\n    timerDays: '.count_1 span',\r\n    timerHours: '.count_2 span',\r\n    timerMinutes: '.count_3 span',\r\n    timerSeconds: '.count_4 span',\r\n});\r\n\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_1__.calculator)(3000, {\r\n    id: 'calc',\r\n    selectTypeId: '#calc-type',\r\n    selectMaterialId: '#calc-type-material',\r\n    inputSizeId: '#calc-input',\r\n    inputTotalId: '#calc-total',\r\n});\r\n\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__.slider)({\r\n    blockId: 'benefits',\r\n    wrapper: '.benefits-wrap',\r\n    items: '.benefits__item',\r\n    arrows: '.benefits__arrow',\r\n    arrowLeft: '.benefits__arrow--left',\r\n    arrowRight: '.benefits__arrow--right',\r\n    count: 3,\r\n});\r\n\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__.slider)({\r\n    blockId: 'services',\r\n    wrapper: '.services__wrap',\r\n    items: '.services__item',\r\n    arrows: '.services__arrow',\r\n    arrowLeft: '.services__arrow--left',\r\n    arrowRight: '.services__arrow--right',\r\n    count: 2,\r\n});\r\n\r\n(0,_modules_scrollButton__WEBPACK_IMPORTED_MODULE_3__.scrollButton)();\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_4__.modal)({\r\n    modalClass: '.header-modal',\r\n    overlayClass: '.overlay',\r\n    btnOpenClass: '.button',\r\n    btnCloseClass: '.header-modal__close',\r\n});\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_4__.modal)({\r\n    modalClass: '.services-modal',\r\n    overlayClass: '.overlay',\r\n    btnOpenClass: '.service-button',\r\n    btnCloseClass: '.services-modal__close',\r\n});\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/index.js?");

/***/ }),

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculator\": () => (/* binding */ calculator)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./js/modules/helpers.js\");\n\r\n\r\nconst calculator = (\r\n    price = 100,\r\n    {\r\n        id = 'calc',\r\n        selectTypeId = '#calc-type',\r\n        selectMaterialId = '#calc-type-material',\r\n        inputSizeId = '#calc-input',\r\n        inputTotalId = '#calc-total',\r\n    }\r\n) => {\r\n    const calculatorBlock = document.getElementById(id);\r\n\r\n    try {\r\n        if (!calculatorBlock) {\r\n            throw new Error('Не вижу калькулятор');\r\n        }\r\n    } catch (e) {\r\n        return;\r\n    }\r\n\r\n    const selectType = calculatorBlock.querySelector(selectTypeId);\r\n    const selectMaterial = calculatorBlock.querySelector(selectMaterialId);\r\n    const inputSize = calculatorBlock.querySelector(inputSizeId);\r\n    const total = calculatorBlock.querySelector(inputTotalId);\r\n\r\n    try {\r\n        if (!(selectType && selectMaterial && inputSize && total)) {\r\n            throw new Error('Не были найдены input / select для');\r\n        }\r\n    } catch (e) {\r\n        return;\r\n    }\r\n\r\n    const calculateTotalPrice = () => {\r\n        const typeValue = +selectType.value;\r\n        const materialValue = +selectMaterial.value;\r\n\r\n        let squareValue = 1;\r\n        let totalValue = 0;\r\n\r\n        if (inputSize.value && +inputSize.value > 0) {\r\n            squareValue = +inputSize.value;\r\n        }\r\n\r\n        if (typeValue && materialValue) {\r\n            totalValue = price * typeValue * materialValue * squareValue;\r\n        }\r\n\r\n        if (totalValue !== 0) {\r\n            renderTotal(totalValue);\r\n        } else {\r\n            total.value = '';\r\n        }\r\n        total.classList.remove('active');\r\n    };\r\n\r\n    const renderTotal = num => {\r\n        total.classList.remove('active');\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 500,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                total.value = Math.floor(num * progress);\r\n                if (progress === 1) {\r\n                    total.classList.add('active');\r\n                }\r\n            },\r\n        });\r\n        total.value = num;\r\n    };\r\n\r\n    calculatorBlock.addEventListener('input', e => {\r\n        if (e.target == selectType || e.target == selectMaterial || e.target == inputSize) {\r\n            calculateTotalPrice();\r\n        }\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/modules/calculator.js?");

/***/ }),

/***/ "./js/modules/helpers.js":
/*!*******************************!*\
  !*** ./js/modules/helpers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addZero\": () => (/* binding */ addZero),\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst addZero = num => (num.toString().length < 2 ? '0' + num : num);\r\n\r\nconst animate = ({ timing, draw, duration }) => {\r\n    let start = performance.now();\r\n    requestAnimationFrame(function animate(time) {\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress);\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/modules/helpers.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./js/modules/helpers.js\");\n\r\n\r\nconst modal = ({\r\n    modalClass = '.header-modal',\r\n    overlayClass = '.overlay',\r\n    btnOpenClass = '.button',\r\n    btnCloseClass = '.header-modal__close',\r\n}) => {\r\n    const modalWindow = document.querySelector(modalClass);\r\n    const overlay = document.querySelector(overlayClass);\r\n\r\n    const openModal = () => {\r\n        modalWindow.style.opacity = 0;\r\n        overlay.style.opacity = 0;\r\n\r\n        modalWindow.style.display = 'block';\r\n        overlay.style.display = 'block';\r\n\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 150,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                modalWindow.style.opacity = progress;\r\n                overlay.style.opacity = progress;\r\n            },\r\n        });\r\n    };\r\n\r\n    const closeModal = () => {\r\n        modalWindow.style.opacity = 1;\r\n        overlay.style.opacity = 1;\r\n\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 150,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                modalWindow.style.opacity = 1 - progress;\r\n                overlay.style.opacity = 1 - progress;\r\n\r\n                if (progress === 1) {\r\n                    modalWindow.style.display = '';\r\n                    overlay.style.display = '';\r\n                }\r\n            },\r\n        });\r\n    };\r\n\r\n    document.addEventListener('click', e => {\r\n        if (e.target.closest(btnOpenClass)) {\r\n            e.preventDefault();\r\n            openModal();\r\n        } else if (e.target.closest(overlayClass) || e.target.matches(btnCloseClass)) {\r\n            closeModal();\r\n        }\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/scrollButton.js":
/*!************************************!*\
  !*** ./js/modules/scrollButton.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollButton\": () => (/* binding */ scrollButton)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./js/modules/helpers.js\");\n\r\n\r\nconst scrollButton = () => {\r\n    const firstBlock = document.getElementById('offer');\r\n    const header = document.getElementById('header');\r\n    const nav = document.getElementById('navigation');\r\n    const btn = document.querySelector('.smooth-scroll');\r\n\r\n    const toScrollY = firstBlock.clientHeight + header.clientHeight + nav.clientHeight;\r\n\r\n    let isBtn = false;\r\n\r\n    const changeDisplayBtn = e => {\r\n        if (scrollY < toScrollY) {\r\n            if (!isBtn) {\r\n                btn.style.opacity = 1;\r\n\r\n                if (e) {\r\n                    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                        duration: 200,\r\n                        timing(timeFraction) {\r\n                            return timeFraction;\r\n                        },\r\n                        draw(progress) {\r\n                            btn.style.opacity = 1 - progress;\r\n                            if (progress === 1) {\r\n                                btn.style.display = 'none';\r\n                            }\r\n                        },\r\n                    });\r\n                } else {\r\n                    btn.style.display = 'none';\r\n                }\r\n\r\n                isBtn = true;\r\n            }\r\n        } else {\r\n            if (isBtn) {\r\n                btn.style.opacity = 0;\r\n\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 200,\r\n                    timing(timeFraction) {\r\n                        return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        btn.style.opacity = progress;\r\n                    },\r\n                });\r\n                btn.style.display = 'block';\r\n\r\n                isBtn = false;\r\n            }\r\n        }\r\n    };\r\n\r\n    document.addEventListener('scroll', e => {\r\n        changeDisplayBtn(e);\r\n    });\r\n\r\n    btn.addEventListener('click', () => {\r\n        scrollTo({\r\n            top: 0,\r\n            behavior: 'smooth',\r\n        });\r\n    });\r\n\r\n    changeDisplayBtn();\r\n};\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/modules/scrollButton.js?");

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./js/modules/helpers.js\");\n\r\n\r\nconst slider = ({\r\n    blockId = 'benefits',\r\n    wrapper = '.benefits-wrap',\r\n    items = '.benefits__item',\r\n    arrows = '.benefits__arrow',\r\n    arrowLeft = '.benefits__arrow--left',\r\n    arrowRight = '.benefits__arrow--right',\r\n    count = 3,\r\n}) => {\r\n    const sliderBlock = document.getElementById(blockId);\r\n\r\n    try {\r\n        if (!sliderBlock) {\r\n            throw new Error('SliderBlock has been not found (slider.js)');\r\n        }\r\n    } catch (e) {\r\n        console.error(e);\r\n    }\r\n\r\n    const sliderWrap = sliderBlock.querySelector(wrapper);\r\n    const sliderItems = sliderBlock.querySelectorAll(items);\r\n\r\n    try {\r\n        if (!(sliderWrap && sliderItems)) {\r\n            throw new Error('Where is the slider wrapper OR items? (slider.js)');\r\n        }\r\n    } catch (e) {\r\n        console.error(e);\r\n    }\r\n\r\n    let activeIndex = 0;\r\n\r\n    const renderForMobile = active => {\r\n        sliderWrap.style.justifyContent = 'center';\r\n        sliderWrap.innerHTML = '';\r\n\r\n        sliderWrap.append(sliderItems[active]);\r\n    };\r\n\r\n    const renderForPc = active => {\r\n        sliderWrap.style.justifyContent = '';\r\n        sliderWrap.innerHTML = '';\r\n\r\n        if (count == 3) {\r\n            let nextIndex = active + 1 >= sliderItems.length ? active - sliderItems.length + 1 : active + 1;\r\n            let nextNextIndex = active + 2 >= sliderItems.length ? active - sliderItems.length + 2 : active + 2;\r\n\r\n            sliderWrap.append(sliderItems[active], sliderItems[nextIndex], sliderItems[nextNextIndex]);\r\n        } else if (count == 2) {\r\n            let nextIndex = active + 1 >= sliderItems.length ? active - sliderItems.length + 1 : active + 1;\r\n\r\n            sliderWrap.append(sliderItems[active], sliderItems[nextIndex]);\r\n        }\r\n    };\r\n\r\n    const renderSlider = active => {\r\n        if (document.documentElement.clientWidth > 576) {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 500,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    sliderWrap.style.opacity = 1 - progress;\r\n                },\r\n            });\r\n\r\n            renderForPc(active);\r\n\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 500,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    sliderWrap.style.opacity = progress;\r\n                },\r\n            });\r\n        } else {\r\n            renderForMobile(active);\r\n        }\r\n    };\r\n    sliderBlock.addEventListener('click', e => {\r\n        if (e.target.closest(arrows)) {\r\n            if (e.target.closest(arrowLeft)) {\r\n                activeIndex--;\r\n                if (activeIndex < 0) activeIndex = sliderItems.length - 1;\r\n            } else if (e.target.closest(arrowRight)) {\r\n                activeIndex++;\r\n                if (activeIndex > sliderItems.length - 1) activeIndex = 0;\r\n            }\r\n            renderSlider(activeIndex);\r\n        }\r\n    });\r\n    renderSlider(activeIndex);\r\n};\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/modules/slider.js?");

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./js/modules/helpers.js\");\n\r\n\r\nconst timer = ({ id, timerDays, timerHours, timerMinutes, timerSeconds }) => {\r\n    const timer = document.getElementById(id);\r\n\r\n    const daysTimer = timer.querySelector(timerDays);\r\n    const hoursTimer = timer.querySelector(timerHours);\r\n    const minutesTimer = timer.querySelector(timerMinutes);\r\n    const secondsTimer = timer.querySelector(timerSeconds);\r\n\r\n    const daysRemaining = +timer.dataset.days || 7;\r\n\r\n    let isDeadline = false;\r\n    let idInterval;\r\n\r\n    const getTimeRemaining = () => {\r\n        const dateNow = new Date();\r\n        const dateToRemaining = dateNow.toString().split(' ');\r\n\r\n        dateToRemaining[2] = +dateToRemaining[2] + daysRemaining;\r\n        const dateStop = new Date(dateToRemaining.slice(1, 4));\r\n\r\n        const timeRemaining = (dateStop.getTime() - dateNow.getTime()) / 1000;\r\n        if (timeRemaining < 0) isDeadline = true;\r\n\r\n        const days = Math.floor(timeRemaining / (3600 * 24));\r\n        const hours = Math.floor(timeRemaining / 3600) % 24;\r\n        const minutes = Math.floor(timeRemaining / 60) % 60;\r\n        const seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { days, hours, minutes, seconds };\r\n    };\r\n\r\n    const updateTimer = () => {\r\n        const getTime = getTimeRemaining();\r\n\r\n        if (isDeadline) {\r\n            clearInterval(idInterval);\r\n            return;\r\n        }\r\n\r\n        daysTimer.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addZero)(getTime.days);\r\n        hoursTimer.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addZero)(getTime.hours);\r\n        minutesTimer.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addZero)(getTime.minutes);\r\n        secondsTimer.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addZero)(getTime.seconds);\r\n    };\r\n\r\n    try {\r\n        if (!(timerDays && timerHours && timerMinutes && timerSeconds)) {\r\n            throw new Error('Where is the classes for the timer? (Module: timer.js).');\r\n        }\r\n        if (!(daysTimer && hoursTimer && minutesTimer && secondsTimer)) {\r\n            throw new Error('Classes for modules/timer.js are faulty.');\r\n        }\r\n    } catch (e) {\r\n        return;\r\n    }\r\n\r\n    updateTimer();\r\n\r\n    idInterval = setInterval(updateTimer, 1000);\r\n};\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/modules/timer.js?");

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