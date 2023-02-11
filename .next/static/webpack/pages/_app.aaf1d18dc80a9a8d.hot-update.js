"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameInfo\": function() { return /* binding */ GameInfo; },\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nlet GameInfo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [numCards, setNumCards] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(54);\n    const [numKings, setNumKings] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [playerIndex, setPlayerIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    let gameInfo = {\n        numCards: numCards,\n        setNumCards: setNumCards,\n        numKings: numKings,\n        setNumKings: setNumKings,\n        players: players,\n        setPlayers: setPlayers,\n        playerIndex: playerIndex,\n        setPlayerIndex: setPlayerIndex\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameInfo.Provider, {\n        value: gameInfo,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/najah/kings_cup/src/pages/_app.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/najah/kings_cup/src/pages/_app.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/najah/kings_cup/src/pages/_app.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"3t0yEXEMFHygdgf6JYfU9X6V0/o=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQzhCO0FBRXBELElBQUlHLHlCQUFXSCxvREFBYUEsR0FBRTtBQUV0QixTQUFTSSxJQUFJLEtBQXdCLEVBQUU7UUFBMUIsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBeEI7O0lBRTFCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBRS9DLElBQUlhLFdBQVc7UUFDYlIsVUFBVUE7UUFDVkMsYUFBYUE7UUFDYkMsVUFBVUE7UUFDVkMsYUFBYUE7UUFDYkMsU0FBUUE7UUFDUkMsWUFBWUE7UUFDWkMsYUFBYUE7UUFDYkMsZ0JBQWdCQTtJQUNsQjtJQUlBLHFCQUNFLDhEQUFDWCxTQUFTYSxRQUFRO1FBQUNDLE9BQU9GO2tCQUN4Qiw0RUFBQ0c7c0JBQ0MsNEVBQUNiO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEMsQ0FBQztHQTVCdUJGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBsZXQgR2FtZUluZm8gPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXG4gIGNvbnN0IFtudW1DYXJkcywgc2V0TnVtQ2FyZHNdID0gdXNlU3RhdGUoNTQpXG4gIGNvbnN0IFtudW1LaW5ncywgc2V0TnVtS2luZ3NdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtwbGF5ZXJJbmRleCwgc2V0UGxheWVySW5kZXhdID0gdXNlU3RhdGUoMClcblxuICBsZXQgZ2FtZUluZm8gPSB7XG4gICAgbnVtQ2FyZHM6IG51bUNhcmRzLFxuICAgIHNldE51bUNhcmRzOiBzZXROdW1DYXJkcyxcbiAgICBudW1LaW5nczogbnVtS2luZ3MsXG4gICAgc2V0TnVtS2luZ3M6IHNldE51bUtpbmdzLFxuICAgIHBsYXllcnM6cGxheWVycyxcbiAgICBzZXRQbGF5ZXJzOiBzZXRQbGF5ZXJzLFxuICAgIHBsYXllckluZGV4OiBwbGF5ZXJJbmRleCxcbiAgICBzZXRQbGF5ZXJJbmRleDogc2V0UGxheWVySW5kZXgsXG4gIH1cblxuICBcblxuICByZXR1cm4gKFxuICAgIDxHYW1lSW5mby5Qcm92aWRlciB2YWx1ZT17Z2FtZUluZm99PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9HYW1lSW5mby5Qcm92aWRlcj5cbiAgICBcbiAgKSBcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiR2FtZUluZm8iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJudW1DYXJkcyIsInNldE51bUNhcmRzIiwibnVtS2luZ3MiLCJzZXROdW1LaW5ncyIsInBsYXllcnMiLCJzZXRQbGF5ZXJzIiwicGxheWVySW5kZXgiLCJzZXRQbGF5ZXJJbmRleCIsImdhbWVJbmZvIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIkxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ })

});