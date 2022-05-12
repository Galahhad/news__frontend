/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./getCategories.js":
/*!**************************!*\
  !*** ./getCategories.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCategories\": function() { return /* binding */ getCategories; }\n/* harmony export */ });\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialState */ \"./initialState.js\");\n/* harmony import */ var _render_categoriesRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/categoriesRender */ \"./render/categoriesRender.js\");\n\n\nvar getCategories = function getCategories() {\n  fetch(\"http://localhost:3000/categories\").then(function (res) {\n    return res.json();\n  }).then(function (cats) {\n    _initialState__WEBPACK_IMPORTED_MODULE_0__.initialState.cat = cats;\n    (0,_render_categoriesRender__WEBPACK_IMPORTED_MODULE_1__.renderCats)();\n  });\n};\n\n//# sourceURL=webpack:///./getCategories.js?");

/***/ }),

/***/ "./getNews.js":
/*!********************!*\
  !*** ./getNews.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNews\": function() { return /* binding */ getNews; }\n/* harmony export */ });\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialState */ \"./initialState.js\");\n/* harmony import */ var _render_getNewsRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/getNewsRender */ \"./render/getNewsRender.js\");\n\n\nvar getNews = function getNews() {\n  fetch(\"http://localhost:3000/news\").then(function (res) {\n    return res.json();\n  }).then(function (news) {\n    _initialState__WEBPACK_IMPORTED_MODULE_0__.initialState.news = news;\n    (0,_render_getNewsRender__WEBPACK_IMPORTED_MODULE_1__.render)();\n  });\n};\n\n//# sourceURL=webpack:///./getNews.js?");

/***/ }),

/***/ "./getNewsByCategory.js":
/*!******************************!*\
  !*** ./getNewsByCategory.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNewsByCat\": function() { return /* binding */ getNewsByCat; }\n/* harmony export */ });\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialState */ \"./initialState.js\");\n/* harmony import */ var _render_getNewsRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/getNewsRender */ \"./render/getNewsRender.js\");\n\n\nvar getNewsByCat = function getNewsByCat(id) {\n  console.log(_initialState__WEBPACK_IMPORTED_MODULE_0__.initialState.news);\n  fetch(\"http://localhost:3000/news/categories/\".concat(id)).then(function (res) {\n    return res.json();\n  }).then(function (news) {\n    _initialState__WEBPACK_IMPORTED_MODULE_0__.initialState.news = news;\n    (0,_render_getNewsRender__WEBPACK_IMPORTED_MODULE_1__.render)();\n  });\n};\n\n//# sourceURL=webpack:///./getNewsByCategory.js?");

/***/ }),

/***/ "./getNewsById.js":
/*!************************!*\
  !*** ./getNewsById.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNewsById\": function() { return /* binding */ getNewsById; }\n/* harmony export */ });\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialState */ \"./initialState.js\");\n/* harmony import */ var _render_getNewsRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/getNewsRender */ \"./render/getNewsRender.js\");\n\n\nvar getNewsById = function getNewsById(id) {\n  fetch(\"http://localhost:3000/news/\".concat(id)).then(function (res) {\n    return res.json();\n  }).then(function (news) {\n    _initialState__WEBPACK_IMPORTED_MODULE_0__.initialState.news = news;\n    (0,_render_getNewsRender__WEBPACK_IMPORTED_MODULE_1__.render)();\n  });\n};\n\n//# sourceURL=webpack:///./getNewsById.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _render_addHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/addHeader */ \"./render/addHeader.js\");\n/* harmony import */ var _render_addCenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/addCenter */ \"./render/addCenter.js\");\n/* harmony import */ var _getNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNews */ \"./getNews.js\");\n/* harmony import */ var _getNewsById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNewsById */ \"./getNewsById.js\");\n/* harmony import */ var _getCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getCategories */ \"./getCategories.js\");\n/* harmony import */ var _getNewsByCategory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getNewsByCategory */ \"./getNewsByCategory.js\");\n/* harmony import */ var _render_addFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./render/addFooter */ \"./render/addFooter.js\");\n/* harmony import */ var _render_getNewsRender__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./render/getNewsRender */ \"./render/getNewsRender.js\");\n\n\n\n\n\n\n\n\n\n(0,_render_addHeader__WEBPACK_IMPORTED_MODULE_1__.addHeader)();\n(0,_render_addCenter__WEBPACK_IMPORTED_MODULE_2__.addCenter)();\n(0,_getNews__WEBPACK_IMPORTED_MODULE_3__.getNews)();\n(0,_getNewsById__WEBPACK_IMPORTED_MODULE_4__.getNewsById)();\n(0,_getCategories__WEBPACK_IMPORTED_MODULE_5__.getCategories)();\n(0,_getNewsByCategory__WEBPACK_IMPORTED_MODULE_6__.getNewsByCat)();\n(0,_render_addFooter__WEBPACK_IMPORTED_MODULE_7__.addFooter)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./initialState.js":
/*!*************************!*\
  !*** ./initialState.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; }\n/* harmony export */ });\nvar initialState = {\n  news: [],\n  cat: [],\n  comments: []\n};\nconsole.log(initialState);\n\n//# sourceURL=webpack:///./initialState.js?");

/***/ }),

/***/ "./render/addCenter.js":
/*!*****************************!*\
  !*** ./render/addCenter.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCenter\": function() { return /* binding */ addCenter; }\n/* harmony export */ });\n/* harmony import */ var _assets_Jameson_Img_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/Jameson_Img.png */ \"../assets/Jameson_Img.png\");\n\nvar addCenter = function addCenter() {\n  var headerWrap = document.querySelector(\".header\");\n  var centerWrap = document.createElement(\"div\");\n  centerWrap.classList.add(\"center_wrap\");\n  var leftBar = document.createElement(\"div\");\n  leftBar.classList.add(\"left_bar\");\n  var leftImgWrap = document.createElement(\"div\");\n  leftImgWrap.classList.add(\"left_img_wrap\");\n  var jamesonImg = document.createElement(\"img\");\n  jamesonImg.classList.add(\"jameson_img\");\n  jamesonImg.src = _assets_Jameson_Img_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  jamesonImg.alt = \"JJJameson\";\n  var jamesonQuote = document.createElement(\"p\");\n  jamesonQuote.classList.add(\"jameson_quote\");\n  jamesonQuote.textContent = \"\\\"Какой аванс? За присутствие? Уволен!\\\"\";\n  var jamesonAuthor = document.createElement(\"p\");\n  jamesonAuthor.classList.add(\"jameson_author\");\n  jamesonAuthor.textContent = \"© JJ Jameson\";\n  var newsContainer = document.createElement(\"div\");\n  newsContainer.classList.add(\"news_container\");\n  var newsTitle = document.createElement(\"h1\");\n  newsTitle.classList.add(\"news_title\");\n  newsTitle.textContent = \"Новости\";\n  var rightBar = document.createElement(\"div\");\n  rightBar.classList.add(\"right_bar\");\n  var categoryTitle = document.createElement(\"h2\");\n  categoryTitle.textContent = \"Категории\";\n  categoryTitle.classList.add(\"category_title\");\n  headerWrap.after(centerWrap);\n  centerWrap.append(leftBar, newsContainer, rightBar);\n  newsContainer.append(newsTitle);\n  rightBar.append(categoryTitle);\n  leftBar.append(leftImgWrap);\n  leftImgWrap.append(jamesonImg, jamesonQuote);\n  jamesonQuote.append(jamesonAuthor);\n};\n\n//# sourceURL=webpack:///./render/addCenter.js?");

/***/ }),

/***/ "./render/addFooter.js":
/*!*****************************!*\
  !*** ./render/addFooter.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addFooter\": function() { return /* binding */ addFooter; }\n/* harmony export */ });\nvar addFooter = function addFooter() {\n  var centerWrap = document.querySelector(\".center_wrap\");\n  var footer = document.createElement(\"div\");\n  footer.classList.add(\"footer\");\n  var infoWrap = document.createElement(\"ul\");\n  infoWrap.classList.add(\"info_wrap\");\n  var mainText = document.createElement(\"li\");\n  mainText.textContent = \"О нас\";\n  var infoText = document.createElement(\"li\");\n  infoText.textContent = \"Свяжитесь с нами\";\n  var assets = document.createElement(\"li\");\n  assets.textContent = \"Контактная информация: +7 (800) - 333 - 43 - 34\";\n  assets.classList.add(\"assets\");\n  centerWrap.after(footer);\n  footer.append(infoWrap);\n  infoWrap.append(mainText, infoText, assets);\n};\n\n//# sourceURL=webpack:///./render/addFooter.js?");

/***/ }),

/***/ "./render/addHeader.js":
/*!*****************************!*\
  !*** ./render/addHeader.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addHeader\": function() { return /* binding */ addHeader; }\n/* harmony export */ });\n/* harmony import */ var _assets_Daily_Bugle_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/Daily_Bugle.png */ \"../assets/Daily_Bugle.png\");\n\nvar addHeader = function addHeader() {\n  var root = document.querySelector(\"#root\");\n  var headerWrap = document.createElement(\"div\");\n  headerWrap.classList.add(\"header\");\n  var headerLogoWrap = document.createElement(\"div\");\n  headerLogoWrap.classList.add(\"header_logo_wrap\");\n  var headerLogo = document.createElement(\"img\");\n  headerLogo.src = _assets_Daily_Bugle_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  headerLogo.alt = \"Daily Bugle Logo\";\n  var headerInfo = document.createElement(\"div\");\n  headerInfo.classList.add(\"header_info\");\n  headerInfo.textContent = \"\\\"У нас самые правдивые новости.\\\"\";\n  root.append(headerWrap);\n  headerWrap.append(headerLogoWrap, headerInfo);\n  headerLogoWrap.append(headerLogo);\n};\n\n//# sourceURL=webpack:///./render/addHeader.js?");

/***/ }),

/***/ "./render/categoriesRender.js":
/*!************************************!*\
  !*** ./render/categoriesRender.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderCats\": function() { return /* binding */ renderCats; }\n/* harmony export */ });\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../initialState */ \"./initialState.js\");\n/* harmony import */ var _getNewsByCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getNewsByCategory */ \"./getNewsByCategory.js\");\n\n\nvar renderCats = function renderCats() {\n  var rightBar = document.querySelector('.right_bar');\n  var categoriesList = document.createElement(\"ul\");\n  categoriesList.className = \"categories_list\";\n  _initialState__WEBPACK_IMPORTED_MODULE_0__.initialState.cat.forEach(function (cats) {\n    var categoriesItem = document.createElement(\"li\");\n    categoriesItem.className = \"categories_item\";\n    categoriesItem.textContent = cats.categoriesName;\n    categoriesItem.addEventListener(\"click\", function () {\n      return (0,_getNewsByCategory__WEBPACK_IMPORTED_MODULE_1__.getNewsByCat)(cats._id);\n    });\n    categoriesList.append(categoriesItem);\n  });\n  rightBar.append(categoriesList);\n};\n\n//# sourceURL=webpack:///./render/categoriesRender.js?");

/***/ }),

/***/ "./render/getNewsRender.js":
/*!*********************************!*\
  !*** ./render/getNewsRender.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var _assets_spider_man_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/spider-man-1.jpg */ \"../assets/spider-man-1.jpg\");\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../initialState */ \"./initialState.js\");\n/* harmony import */ var _getNewsById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getNewsById */ \"./getNewsById.js\");\n\n\n\nvar render = function render() {\n  // main.textContent = \"\";\n  var newsWrapper = document.querySelector(\".news_container\");\n  console.log(newsWrapper);\n\n  if (Array.isArray(_initialState__WEBPACK_IMPORTED_MODULE_1__.initialState.news)) {\n    newsWrapper.textContent = \"\";\n    _initialState__WEBPACK_IMPORTED_MODULE_1__.initialState.news.forEach(function (news) {\n      var newsContent = document.createElement(\"div\");\n      newsContent.classList.add(\"news_content\");\n      newsContent.textContent = news.title; // console.log(news)\n\n      newsContent.addEventListener(\"click\", function () {\n        (0,_getNewsById__WEBPACK_IMPORTED_MODULE_2__.getNewsById)(news._id);\n      });\n      newsWrapper.append(newsContent);\n    });\n  } else {\n    newsWrapper.textContent = \"\";\n    var oneNewsContainer = document.createElement(\"div\");\n    oneNewsContainer.classList.add(\"one-news__container\");\n    var newsImage = document.createElement(\"img\");\n    newsImage.classList.add(\"news__image\");\n    newsImage.src = _assets_spider_man_1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    var newsContent = document.createElement(\"div\");\n    newsContent.classList.add(\"news__content\");\n    oneNewsContainer.append(newsImage, newsContent);\n    var newsTitle = document.createElement(\"h1\");\n    newsTitle.classList.add(\"news__title\");\n    newsTitle.textContent = _initialState__WEBPACK_IMPORTED_MODULE_1__.initialState.news.title;\n    var newsCategory = document.createElement(\"div\");\n    newsCategory.classList.add(\"news__category\");\n    newsCategory.textContent = _initialState__WEBPACK_IMPORTED_MODULE_1__.initialState.news.category.categoriesName;\n    var newsText = document.createElement(\"div\");\n    newsText.classList.add(\"news__text\");\n    newsText.textContent = _initialState__WEBPACK_IMPORTED_MODULE_1__.initialState.news.text;\n    newsContent.append(newsTitle, newsCategory, newsText);\n    var commentsContainer = document.createElement(\"div\");\n    commentsContainer.classList.add(\"comments__container\");\n    var commentsList = document.createElement(\"ul\");\n    commentsList.classList.add(\"comments__list\");\n    newsWrapper.append(oneNewsContainer);\n  }\n};\n\n//# sourceURL=webpack:///./render/getNewsRender.js?");

/***/ }),

/***/ "../assets/Daily_Bugle.png":
/*!*********************************!*\
  !*** ../assets/Daily_Bugle.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e964fce9b0b57dbcd79eb2baf8154ac2.png\");\n\n//# sourceURL=webpack:///../assets/Daily_Bugle.png?");

/***/ }),

/***/ "../assets/Jameson_Img.png":
/*!*********************************!*\
  !*** ../assets/Jameson_Img.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f0ec859e8cb4eeec1fb791ec298ef8c0.png\");\n\n//# sourceURL=webpack:///../assets/Jameson_Img.png?");

/***/ }),

/***/ "../assets/spider-man-1.jpg":
/*!**********************************!*\
  !*** ../assets/spider-man-1.jpg ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d7f2d6169d5f7e99da3a905134102902.jpg\");\n\n//# sourceURL=webpack:///../assets/spider-man-1.jpg?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style.css?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
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