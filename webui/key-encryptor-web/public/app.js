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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_encryptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/encryptor.js */ \"./src/utils/encryptor.js\");\n// This file contains the main JavaScript logic for the key encryptor web application.\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const processButton = document.getElementById(\"processButton\");\r\n  const inputField = document.getElementById(\"inputText\");\r\n  const caesarKeyField = document.getElementById(\"caesarKey\");\r\n  const encodeOrDecodeSelect = document.getElementById(\"encodeOrDecode\");\r\n  const resultDiv = document.getElementById(\"result\");\r\n\r\n  processButton.addEventListener(\"click\", () => {\r\n    const inputText = inputField.value;\r\n    const caesarKey = parseInt(caesarKeyField.value) || 0;\r\n    const mode = encodeOrDecodeSelect.value;\r\n\r\n    let output = \"\";\r\n    if (mode === \"encode\") {\r\n      output = encode(inputText, caesarKey);\r\n    } else {\r\n      output = decode(inputText, caesarKey);\r\n    }\r\n    resultDiv.textContent = output;\r\n  });\r\n});\r\n\r\n// Dummy encode function for demonstration\r\nfunction encode(text, key) {\r\n  // Replace with your actual encoding logic\r\n  return `Encoded: ${text} (key: ${key})`;\r\n}\r\n\r\nfunction decode(text, key) {\r\n  // Decoding logic: expects input in the format '1.11.2' (with '.' between codes, '..' for space)\r\n  // Ask user if reversed (for now, assume not reversed, or add UI for it if needed)\r\n  // For demo, assume not reversed and not using reversedMap\r\n  // If you want to support reversed, add a checkbox and use reversedMap/applyReverseCaesarShift\r\n  const reversed = false; // TODO: get from UI if needed\r\n  const parts = text.split(\".\");\r\n  let decoded = \"\";\r\n  for (const code of parts) {\r\n    if (code === \"\") {\r\n      decoded += \" \";\r\n    } else {\r\n      decoded += _utils_encryptor_js__WEBPACK_IMPORTED_MODULE_0__.charMap[code] || code;\r\n    }\r\n  }\r\n  // Apply caesar shift after decoding\r\n  return (0,_utils_encryptor_js__WEBPACK_IMPORTED_MODULE_0__.applyCaesarShift)(decoded, key);\r\n}\r\n\n\n//# sourceURL=webpack://key-encryptor-web/./src/app.js?");

/***/ }),

/***/ "./src/utils/encryptor.js":
/*!********************************!*\
  !*** ./src/utils/encryptor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applyCaesarShift: () => (/* binding */ applyCaesarShift),\n/* harmony export */   applyReverseCaesarShift: () => (/* binding */ applyReverseCaesarShift),\n/* harmony export */   charMap: () => (/* binding */ charMap),\n/* harmony export */   reversedMap: () => (/* binding */ reversedMap)\n/* harmony export */ });\nconst alphabet = 'abcdefghijklmnopqrstuvwxyz';\nconst reversedAlphabet = alphabet.split('').reverse().join('');\nconst charMap = {};\nconst reversedMap = {};\n\nfunction buildMap() {\n    let index = 0;\n    for (let digit = 1; digit <= 9; digit++) {\n        for (let repeat = 1; repeat <= 3; repeat++) {\n            if (index >= 26) {\n                break;\n            }\n            const code = String(digit).repeat(repeat);\n            const letter = alphabet[index];\n            charMap[code] = letter;\n            index++;\n        }\n    }\n}\n\nfunction buildReversedMap() {\n    let index = 0;\n    for (let digit = 1; digit <= 9; digit++) {\n        for (let repeat = 1; repeat <= 3; repeat++) {\n            if (index >= 26) {\n                break;\n            }\n            const code = String(digit).repeat(repeat);\n            const letter = reversedAlphabet[index];\n            reversedMap[code] = letter;\n            index++;\n        }\n    }\n}\n\nfunction applyCaesarShift(txt, key) {\n    let result = '';\n    for (const char of txt) {\n        if (/[a-z]/.test(char)) {\n            const asciiBase = 'a'.charCodeAt(0);\n            const shifted = (char.charCodeAt(0) - asciiBase + key) % 26 + asciiBase;\n            result += String.fromCharCode(shifted);\n        } else {\n            result += char;\n        }\n    }\n    return result;\n}\n\nfunction applyReverseCaesarShift(txt, key) {\n    let result = '';\n    for (const char of txt) {\n        if (/[a-z]/.test(char)) {\n            const mirroredIndex = 25 - (char.charCodeAt(0) - 'a'.charCodeAt(0));\n            const shifted = (mirroredIndex + key) % 26;\n            result += alphabet[shifted];\n        } else {\n            result += char;\n        }\n    }\n    return result;\n}\n\nbuildMap();\nbuildReversedMap();\n\n\n\n//# sourceURL=webpack://key-encryptor-web/./src/utils/encryptor.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;