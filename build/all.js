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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ \"./src/js/modules/ui.js\");\n/* harmony import */ var _modules_postMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/postMethod */ \"./src/js/modules/postMethod.js\");\n/* harmony import */ var _modules_getMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getMethod */ \"./src/js/modules/getMethod.js\");\n/* harmony import */ var _modules_patchMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/patchMethod */ \"./src/js/modules/patchMethod.js\");\n/* harmony import */ var _modules_deleteMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/deleteMethod */ \"./src/js/modules/deleteMethod.js\");\n/* harmony import */ var _modules_complete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/complete */ \"./src/js/modules/complete.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/filter */ \"./src/js/modules/filter.js\");\n/* harmony import */ var _modules_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/select */ \"./src/js/modules/select.js\");\n\n\n\n\n\n\n\n\n\n\n\nasync function engine () {\n\tconst url = \"http://localhost:8888/todos\";\n\n\t_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].start();\n\n\tconsole.log();\n\tconst { form, screenInput } = _modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\tawait (0,_modules_postMethod__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(form, screenInput, url);\n\tawait (0,_modules_getMethod__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"], url);\n\tawait (0,_modules_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_modules_patchMethod__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _modules_deleteMethod__WEBPACK_IMPORTED_MODULE_4__[\"default\"],_modules_complete__WEBPACK_IMPORTED_MODULE_5__[\"default\"],url);\n\tawait (0,_modules_filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n\t\tdocument.querySelectorAll(\"[data-filter]\"),\n\t\turl,\n\t\t_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\t\t_modules_patchMethod__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \n\t\t_modules_deleteMethod__WEBPACK_IMPORTED_MODULE_4__[\"default\"], \n\t\t_modules_complete__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n\t)\n\t\n}\n\nengine();\n\n//# sourceURL=webpack://crud/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/complete.js":
/*!************************************!*\
  !*** ./src/js/modules/complete.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(url, checkArr, id) {\n\tcheckArr.forEach((check, index) => {\n\t\tcheck.addEventListener(\"change\", async () => {\n\t\t\tasync function checkState(state) {\n\t\t\t\tawait fetch(`${url}/${parseInt(id[index].textContent)}`, {\n\t\t\t\t\tmethod: \"PATCH\",\n\t\t\t\t\theaders: {\n\t\t\t\t\t\t\"content-type\": \"application/json\"\n\t\t\t\t\t},\n\t\t\t\t\tbody: JSON.stringify({ isComplete: state ? true : false })\n\t\t\t\t})\n\t\t\t}\n\n\t\t\tif (check.checked) {\n\t\t\t\tcheckState(true);\n\t\t\t} else {\n\t\t\t\tcheckState(false);\n\t\t\t}\n\t\t});\n\t});\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/complete.js?");

/***/ }),

/***/ "./src/js/modules/deleteMethod.js":
/*!****************************************!*\
  !*** ./src/js/modules/deleteMethod.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/js/modules/modal.js\");\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(removeBtnArray, url) {\n\tremoveBtnArray.forEach(btn => {\n\t\tbtn.addEventListener(\"click\", () => {\n\t\t\t(0,_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\n\t\t\tdocument.addEventListener(\"click\", async (e) => {\n\t\t\t\tif(e.target.classList.contains(\"btnYes\")){\n\t\t\t\tconst fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);\n\t\t\t\tconst fakeVal = btn.parentElement.parentElement.firstElementChild.lastElementChild.value;\n\t\t\t\tawait fetch(`http://localhost:8888/history`, {\n\t\t\t\t\tmethod: \"POST\",\n\t\t\t\t\theaders: {\n\t\t\t\t\t\t\"content-type\": \"application/json\"\n\t\t\t\t\t},\n\t\t\t\t\tbody: JSON.stringify({title: fakeVal, isComplete: true}) \n\t\t\t\t})\n\t\t\t\tbtn.parentElement.parentElement.remove();\n\t\t\t\tawait fetch(`${url}/${fakeID}`, {\n\t\t\t\t\tmethod: \"DELETE\"\n\t\t\t\t});\n\t\t\t\t}\n\t\t\t})\n\t\t});\n\t});\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/deleteMethod.js?");

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select */ \"./src/js/modules/select.js\");\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(btnArray, url, UI, PATCH, DELETE,  COMPLETE) {\n\tbtnArray.forEach(btn => {\n\t\tbtn.addEventListener(\"click\", async () => {\n\t\t\tlet filterURL;\n\t\t\tUI.listsBlock.innerHTML = \"\";\n\n\t\t\tif (btn.dataset.filter === \"filterComplete\") {\n\t\t\t\tfilterURL = `${url}?isComplete=true`;\n\t\t\t} else if (btn.dataset.filter === \"filterUnComplete\") {\n\t\t\t\tfilterURL = `${url}?isComplete=false`;\n\t\t\t} else if (btn.dataset.filter === \"filterAll\") {\n\t\t\t\tfilterURL = url;\n\t\t\t}else if (btn.dataset.filter === \"filterDelate\") {\n\t\t\t\tfilterURL = \"http://localhost:8888/history\";\n\t\t\t}\n\n\t\t\treturn await fetch(filterURL)\n\t\t\t.then(data => data.json())\n\t\t\t.then(data => data.forEach(obj => UI.toHTML(obj.id, obj.title, obj.isComplete)))\n\t\t\t.then(() => (0,_select__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(PATCH, DELETE, COMPLETE, url));\n\t\t});\n\t});\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/filter.js?");

/***/ }),

/***/ "./src/js/modules/getMethod.js":
/*!*************************************!*\
  !*** ./src/js/modules/getMethod.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(ui, url) {\n\treturn await fetch(url)\n\t\t.then(data => data.json())\n\t\t.then(data => data.forEach(obj => ui.toHTML(obj.id, obj.title, obj.isComplete)))\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/getMethod.js?");

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"removeModal\": () => (/* binding */ removeModal)\n/* harmony export */ });\nfunction modal(){\r\n    const root = document.getElementById(\"root\");\r\n    const modal = document.createElement(\"div\");\r\n    const modalChild = document.createElement(\"div\");\r\n    const modalBtn = document.createElement(\"div\")\r\n    const h3 = document.createElement(\"h3\");\r\n    const btn1 = document.createElement(\"button\");\r\n    const btn2 = document.createElement(\"button\");\r\n    h3.textContent = \"Are you sure ?\"\r\n    btn1.textContent = \"Yes\";\r\n    btn2.textContent = \"No\";\r\n    modal.className = \"modal\";\r\n    modalChild.className = \"modalChild\";\r\n    modalBtn.className = \"modalBtn\";\r\n    btn1.className = \"btnYes\";\r\n    btn2.className = \"btnNo\";\r\n    modalChild.append(h3, modalBtn);\r\n    modalBtn.append(btn1, btn2)\r\n    modal.append(modalChild);\r\n    root.append(modal);\r\n    \r\n    btn1.addEventListener(\"click\", removeModal);\r\n    btn2.addEventListener(\"click\", removeModal);\r\n}\r\n\r\nfunction  removeModal() {\r\n    const modal = document.querySelector(\".modal\");\r\n    modal.remove();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://crud/./src/js/modules/modal.js?");

/***/ }),

/***/ "./src/js/modules/patchMethod.js":
/*!***************************************!*\
  !*** ./src/js/modules/patchMethod.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(editBtnArray, saveBtnArray, content, url) {\n\teditBtnArray.forEach((editBtn, index) => {\n\t\teditBtn.addEventListener(\"click\", () => {\n\t\t\teditBtn.style.display = \"none\";\n\t\t\tsaveBtnArray[index].style.display = \"inline-block\";\n\t\t\tconst fakeID = parseInt(content[index].children[0].textContent);\n\t\t\tconst input = content[index].children[1];\n\t\t\tinput.classList.add(\"edit\");\n\t\t\tinput.removeAttribute(\"readonly\");\n\n\t\t\tsaveBtnArray[index].addEventListener(\"click\", async () => {\n\t\t\t\tawait fetch(`${url}/${fakeID}`, {\n\t\t\t\t\tmethod: \"PATCH\",\n\t\t\t\t\theaders: {\n\t\t\t\t\t\t\"content-type\": \"application/json\"\n\t\t\t\t\t},\n\t\t\t\t\tbody: JSON.stringify({ title: input.value.trim() })\n\t\t\t\t})\n\t\t\t});\n\t\t});\n\t})\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/patchMethod.js?");

/***/ }),

/***/ "./src/js/modules/postMethod.js":
/*!**************************************!*\
  !*** ./src/js/modules/postMethod.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(form, input, url) {\n\tform.addEventListener(\"submit\", async (e) => {\n\t\te.preventDefault();\n\n\t\tif (input.value.trim() !== \"\") {\n\t\t\tawait fetch(url, {\n\t\t\t\tmethod: \"POST\",\n\t\t\t\theaders: {\n\t\t\t\t\t\"content-type\": \"application/json\"\n\t\t\t\t},\n\t\t\t\tbody: JSON.stringify({ title: input.value.trim(), isComplete: false })\n\t\t\t})\n\t\t}\n\n\t\te.target.reset();\n\t});\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/postMethod.js?");

/***/ }),

/***/ "./src/js/modules/select.js":
/*!**********************************!*\
  !*** ./src/js/modules/select.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(PATCH, DELETE, COMPLETE, url) {\n\tPATCH(\n\t\tdocument.querySelectorAll(\".editBtn\"),\n\t\tdocument.querySelectorAll(\".saveBtn\"),\n\t\tdocument.querySelectorAll(\".listsBlockItemContent\"),\n\t\turl\n\t);\n\tDELETE(\n\t\tdocument.querySelectorAll(\".removeBtn\"),\n\t\turl\n\t);\n\tCOMPLETE(\n\t\turl,\n\t\tdocument.querySelectorAll(\".buttons input\"),\n\t\tdocument.querySelectorAll(\".listsBlockItemContent\")\n\t);\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/select.js?");

/***/ }),

/***/ "./src/js/modules/ui.js":
/*!******************************!*\
  !*** ./src/js/modules/ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\ttitle: document.createElement(\"h1\"),\n\tsubTitle: document.createElement(\"p\"),\n\tform: document.createElement(\"form\"),\n\tscreenBlock: document.createElement(\"div\"),\n\tscreenInput: document.createElement(\"input\"),\n\tscreenAddBtn: document.createElement(\"button\"),\n\tlistsBlock: document.createElement(\"div\"),\n\tfilterWrapper: document.createElement(\"div\"),\n\tfilterComplete: document.createElement(\"button\"),\n\tfilterUnComplete: document.createElement(\"button\"),\n\tfilterAll: document.createElement(\"button\"),\n\tfilterDelate: document.createElement(\"button\"),\n\n\telementOptions() {\n\t\tthis.title.textContent = \"CRUD\";\n\t\tthis.subTitle.textContent = \"Asyn Application\";\n\n\t\tthis.form.id = \"app-form\";\n\t\tthis.screenBlock.id = \"screenBlock\";\n\t\tthis.screenInput.type = \"text\";\n\t\tthis.screenInput.placeholder = \"Type here...\";\n\t\tthis.screenAddBtn.classList.add(\"fa\", \"fa-plus-circle\")\n\t\tthis.screenAddBtn.id = \"screenAddBtn\";\n\t\tthis.listsBlock.id = \"listBlock\";\n\n\t\tthis.filterWrapper.id = \"filterWrapper\";\n\t\tthis.filterComplete.setAttribute(\"data-filter\", \"filterComplete\");\n\t\tthis.filterUnComplete.setAttribute(\"data-filter\", \"filterUnComplete\");\n\t\tthis.filterAll.setAttribute(\"data-filter\", \"filterAll\");\n\t\tthis.filterDelate.setAttribute(\"data-filter\", \"filterDelate\");\n\n\t\tthis.filterComplete.textContent = \"Complete\";\n\t\tthis.filterUnComplete.textContent = \"Uncomplete\";\n\t\tthis.filterDelate.textContent = \"Delate\";\n\t\tthis.filterAll.textContent = \"ALL\";\n\t},\n\n\tappendElements() {\n\t\troot.append(this.title, this.subTitle, this.form, this.listsBlock, this.filterWrapper);\n\t\tthis.form.append(this.screenBlock);\n\t\tthis.screenBlock.append(this.screenInput, this.screenAddBtn);\n\t\tthis.filterWrapper.append(this.filterComplete, this.filterUnComplete, this.filterDelate, this.filterAll);\n\t},\n\n\ttoHTML(id, value, state = false) {\n\t\tthis.listsBlock.innerHTML += `\n\t\t\t<div class=\"listsBlockItem\">\n\t\t\t\t<div class=\"listsBlockItemContent\">\n\t\t\t\t\t<span>${id}</span>\n\t\t\t\t\t<input type=\"text\" value=\"${value}\" readonly>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"item${id}\" ${state ? \"checked\" : \"\"}>\n\t\t\t\t\t<button class=\"removeBtn fa fa-trash\"></button>\n\t\t\t\t\t<button class=\"editBtn fa fa-pencil\"></button>\n\t\t\t\t\t<button class=\"saveBtn fa fa-save\"></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`;\n\t},\n\n\tstart() {\n\t\tthis.elementOptions();\n\t\tthis.appendElements();\n\t}\n});\n\n//# sourceURL=webpack://crud/./src/js/modules/ui.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;