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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dosis:wght@200;500;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh; /* to disable jarring effect when height grows*/\\n  padding: 1rem 0.5rem;\\n  padding-bottom: 0;\\n  font-family: \\\"Dosis\\\", sans-serif;\\n  background-color: lightblue;\\n  position: relative;\\n  row-gap: 0.5rem;\\n}\\n\\n.header {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.header__icon {\\n  font-size: 2.25rem;\\n  color: cadetblue;\\n}\\n\\n.header__title {\\n  font-size: 2.25rem;\\n}\\n\\n.weather-form {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 100%;\\n  max-width: 600px;\\n  margin-top: 1rem;\\n  margin-left: auto;\\n  margin-right: auto;\\n  column-gap: 0.7rem;\\n}\\n\\n.city-input {\\n  width: 100%;\\n  padding: 0.7em 1em;\\n  border: none;\\n  border-bottom: 2px solid black;\\n  outline: none;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\n\\n.city-input:valid {\\n  border-bottom-color: green;\\n}\\n\\n.search-button {\\n  display: flex;\\n  align-items: center;\\n  border: none;\\n  border-radius: 50%;\\n  cursor: pointer;\\n  padding: 0.4em;\\n  background-color: rgba(0, 0, 0, 0.3);\\n  font-size: 1.2rem;\\n  color: white;\\n}\\n\\n.search-button:hover {\\n  background-color: rgba(0, 0, 0, 0.4);\\n}\\n\\n.weather-display {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 100%;\\n  max-width: 600px;\\n  margin-top: 2rem;\\n  margin-left: auto;\\n  margin-right: auto;\\n  padding: 1em;\\n  background-color: rgba(0, 0, 0, 0.4);\\n  color: white;\\n  font-family: \\\"Dosis\\\", sans-serif;\\n  font-weight: 200;\\n  position: absolute;\\n  transform: translateY(100px);\\n  opacity: 0;\\n}\\n\\n.country-info {\\n  font-size: 1.2rem;\\n}\\n\\n.weather-name {\\n  font-size: 2rem;\\n  font-weight: 500;\\n}\\n\\n.weather-display__temperature-display {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.temperature {\\n  font-size: 2rem;\\n  font-weight: 500;\\n}\\n\\n.weather-image-container {\\n  width: 80px;\\n  height: 65px;\\n}\\n\\n.weather-image {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  object-position: center;\\n}\\n\\n.line-break {\\n  width: 100%;\\n  max-width: 400px;\\n}\\n\\n.weather-display__extra {\\n  display: flex;\\n  column-gap: 1rem;\\n  margin-top: 1rem;\\n  text-align: center;\\n}\\n\\n.extra-title {\\n  font-weight: 500;\\n}\\n\\n.loader {\\n  border: 5px solid #f3f3f3; /* Light grey */\\n  border-top: 5px solid #3498db; /* Blue */\\n  border-radius: 50%;\\n  width: 70px;\\n  height: 70px;\\n  margin-top: 3rem;\\n  margin-left: auto;\\n  margin-right: auto;\\n  position: absolute;\\n  opacity: 0;\\n}\\n\\n.error {\\n  max-width: 600px;\\n  width: 100%;\\n  margin-top: 2rem;\\n  margin-left: auto;\\n  margin-right: auto;\\n  text-align: center;\\n  padding: 1em;\\n  background-color: rgba(0, 0, 0, 0.4);\\n  color: white;\\n  position: absolute;\\n  opacity: 0;\\n  transform: translateY(100px);\\n}\\n\\n.error__description {\\n  margin-top: 0.5rem;\\n}\\n\\n.footer {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  column-gap: 0.3rem;\\n  padding: 1em 0.5em;\\n  margin-top: auto;\\n}\\n\\n.footer__link {\\n  display: flex;\\n  align-items: center;\\n  border-radius: 50%;\\n  background-color: white;\\n  text-decoration: none;\\n  transition: transform 350ms ease-in-out;\\n}\\n\\n.footer__link:hover {\\n  transform: rotate(360deg);\\n}\\n\\n/* modifiers */\\n.weather-display_visible,\\n.error_visible {\\n  transform: translateY(0);\\n  opacity: 1;\\n  position: initial;\\n  transition: all 750ms ease-in-out;\\n}\\n\\n.loader_visible {\\n  position: initial;\\n  opacity: 1;\\n  animation: spin 2s linear infinite;\\n}\\n\\n/* animations */\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api/getCountry.js":
/*!*******************************!*\
  !*** ./src/api/getCountry.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function getCountry(countryCode) {\n  console.log(\"[getCountry]\")\n  const url = `https://restcountries.com/v3.1/alpha/${countryCode}`\n  const response = await fetch(url, { mode: \"cors\" })\n  return response.json()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCountry);\n\n\n//# sourceURL=webpack://weather/./src/api/getCountry.js?");

/***/ }),

/***/ "./src/api/getWeather.js":
/*!*******************************!*\
  !*** ./src/api/getWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_ID = \"92cdf60f97f8454a811ed6fce5d00d96\"\n\nasync function getWeather(city) {\n  console.log(\"[getWeather]\")\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_ID}&units=metric`\n  const response = await fetch(url, { mode: \"cors\" })\n  if (!response.ok) throw new Error(\"city not found\")\n  return response.json()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n\n//# sourceURL=webpack://weather/./src/api/getWeather.js?");

/***/ }),

/***/ "./src/api/getWeatherImage.js":
/*!************************************!*\
  !*** ./src/api/getWeatherImage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getWeatherImage(iconCode) {\n  console.log(\"[getWeatherImage]\")\n  const url = `http://openweathermap.org/img/wn/${iconCode}@2x.png`\n  return url\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherImage);\n\n\n//# sourceURL=webpack://weather/./src/api/getWeatherImage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_bindEventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/bindEventListeners */ \"./src/modules/bindEventListeners.js\");\n\n\n\n\nmain()\n\nfunction main() {\n  console.log(\"[main]\")\n  ;(0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.loadFooterImage)()\n  ;(0,_modules_bindEventListeners__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n}\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/modules/bindEventListeners.js":
/*!*******************************************!*\
  !*** ./src/modules/bindEventListeners.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/getWeather */ \"./src/api/getWeather.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\n\nfunction bindEventListeners() {\n  console.log(\"[bindEventListeners]\")\n  const weatherForm = document.querySelector(\".weather-form\")\n  weatherForm.addEventListener(\"submit\", handleWeatherFormSubmit)\n}\n\nfunction handleWeatherFormSubmit(event) {\n  console.log(\"[handleWeatherFormSubmit]\")\n  event.preventDefault()\n  const cityInput = event.target.querySelector(\".city-input\")\n  const city = cityInput.value\n  ;(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderLoader)()\n\n  ;(0,_api_getWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(city)\n    .then((weather) => {\n      ;(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderWeather)(weather)\n    })\n    .catch((error) => {\n      console.log(`[handleWeatherFormSubmit] error: ${error.message}`)\n      ;(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderError)()\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bindEventListeners);\n\n\n//# sourceURL=webpack://weather/./src/modules/bindEventListeners.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearScreen\": () => (/* binding */ clearScreen),\n/* harmony export */   \"getDomElements\": () => (/* binding */ getDomElements),\n/* harmony export */   \"loadFooterImage\": () => (/* binding */ loadFooterImage),\n/* harmony export */   \"updateWeatherDOM\": () => (/* binding */ updateWeatherDOM)\n/* harmony export */ });\n/* harmony import */ var _api_getWeatherImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/getWeatherImage */ \"./src/api/getWeatherImage.js\");\n/* harmony import */ var _assets_github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/github.png */ \"./src/assets/github.png\");\n\n\n\nfunction getDomElements() {\n  console.log(\"[getDomElements]\")\n  const weatherDisplay = document.querySelector(\".weather-display\")\n\n  return {\n    weatherDisplay,\n    countryInfo: weatherDisplay.querySelector(\".country-info\"),\n    weatherName: weatherDisplay.querySelector(\".weather-name\"),\n    weatherDescription: weatherDisplay.querySelector(\".weather-description\"),\n    weatherImage: weatherDisplay.querySelector(\".weather-image\"),\n    temperature: weatherDisplay.querySelector(\".temperature\"),\n    minTemperature: weatherDisplay\n      .querySelector(\".min-temperature\")\n      .querySelector(\".extra-weather\"),\n    maxTemperature: weatherDisplay\n      .querySelector(\".max-temperature\")\n      .querySelector(\".extra-weather\"),\n    feelsLike: weatherDisplay\n      .querySelector(\".feels-like\")\n      .querySelector(\".extra-weather\"),\n    loader: document.querySelector(\".loader\"),\n    error: document.querySelector(\".error\"),\n    footer: document.querySelector(\".footer\"),\n  }\n}\n\nfunction updateWeatherDOM(weather, DOM) {\n  console.log(\"[updateWeatherDom]\")\n  DOM.countryInfo.textContent = `${weather.city}, ${weather.countryName}`\n  DOM.weatherName.textContent = weather.name\n  DOM.weatherDescription.textContent = weather.description\n  DOM.weatherImage.src = (0,_api_getWeatherImage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weather.iconCode)\n  DOM.temperature.textContent = `${weather.temperature.toFixed(1)}°C`\n  DOM.minTemperature.textContent = `${weather.minTemperature.toFixed(1)}°C`\n  DOM.maxTemperature.textContent = `${weather.maxTemperature.toFixed(1)}°C`\n  DOM.feelsLike.textContent = `${weather.feelsLike.toFixed(1)}°C`\n}\n\nfunction loadFooterImage() {\n  console.log(\"[loadFooterImage]\")\n  const footerImage = document.querySelector(\".footer__image\")\n  footerImage.src = _assets_github_png__WEBPACK_IMPORTED_MODULE_1__\n}\n\nfunction clearScreen() {\n  console.log(\"[clearScreen]\")\n  const weatherDisplay = document.querySelector(\".weather-display\")\n  const loader = document.querySelector(\".loader\")\n  const error = document.querySelector(\".error\")\n\n  weatherDisplay.classList.remove(\"weather-display_visible\")\n  loader.classList.remove(\"loader_visible\")\n  error.classList.remove(\"error_visible\")\n}\n\n\n\n\n//# sourceURL=webpack://weather/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderError\": () => (/* binding */ renderError),\n/* harmony export */   \"renderLoader\": () => (/* binding */ renderLoader),\n/* harmony export */   \"renderWeather\": () => (/* binding */ renderWeather)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _api_getCountry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/getCountry */ \"./src/api/getCountry.js\");\n\n\n\nasync function renderWeather(weatherSource) {\n  console.log(\"[renderWeather]\")\n  const weather = filterWeather(weatherSource)\n  const countrySource = await (0,_api_getCountry__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weather.countryCode)\n  const country = filterCountry(countrySource)\n  weather.countryName = country.name\n  weather.countryFlag = country.flag\n  const DOM = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getDomElements)()\n  ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateWeatherDOM)(weather, DOM)\n  ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.clearScreen)()\n  DOM.weatherDisplay.classList.add(\"weather-display_visible\")\n}\n\nfunction renderLoader() {\n  console.log(\"[renderLoader]\")\n  const DOM = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getDomElements)()\n  ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.clearScreen)()\n  DOM.loader.classList.add(\"loader_visible\")\n}\n\nfunction renderError() {\n  console.log(\"[renderError]\")\n  const DOM = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getDomElements)()\n  ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.clearScreen)()\n  DOM.error.classList.add(\"error_visible\")\n}\n\nfunction filterWeather({ main, name, sys, weather }) {\n  return {\n    temperature: main.temp,\n    feelsLike: main.feels_like,\n    minTemperature: main.temp_min,\n    maxTemperature: main.temp_max,\n    city: name,\n    countryCode: sys.country,\n    name: weather[0].main,\n    description: weather[0].description,\n    iconCode: weather[0].icon,\n  }\n}\n\nfunction filterCountry(country) {\n  return {\n    name: country[0].name.common,\n    flag: country[0].flag,\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather/./src/modules/render.js?");

/***/ }),

/***/ "./src/assets/github.png":
/*!*******************************!*\
  !*** ./src/assets/github.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a5057d213adc989ae7cb.png\";\n\n//# sourceURL=webpack://weather/./src/assets/github.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;