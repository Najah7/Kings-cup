"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/components/Card/card.tsx":
/*!******************************************!*\
  !*** ./src/app/components/Card/card.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.module.css */ \"(app-client)/./src/app/components/Card/card.module.css\");\n/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_card_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Card = (props)=>{\n    _s();\n    const [isFront, setIsFront] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const ClickHandler = ()=>setIsFront((prevState)=>!prevState);\n    console.log(props.isFly);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: props.isFly ? (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().fly) : (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().inner),\n                children: isFront ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().front),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/test-card.png\",\n                        alt: \"表面\",\n                        width: 150,\n                        height: 300,\n                        priority: true,\n                        className: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().img),\n                        onClick: ClickHandler\n                    }, void 0, false, {\n                        fileName: \"/home/najah/kings_cup/src/app/components/Card/card.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/najah/kings_cup/src/app/components/Card/card.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 25\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().back),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/card-back.png\",\n                        alt: \"トランプ裏面\",\n                        width: 150,\n                        height: 300,\n                        priority: true,\n                        className: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().img),\n                        onClick: ClickHandler\n                    }, void 0, false, {\n                        fileName: \"/home/najah/kings_cup/src/app/components/Card/card.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/najah/kings_cup/src/app/components/Card/card.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 25\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/najah/kings_cup/src/app/components/Card/card.tsx\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/najah/kings_cup/src/app/components/Card/card.tsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Card, \"75mC0a9H5ORlEYwYUw95uuDQNmE=\");\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL0NhcmQvY2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUM4QjtBQUNFO0FBQ007QUFFL0IsTUFBTUcsT0FBTyxDQUFDQyxRQUFlOztJQUVoQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUc1QyxNQUFNTSxlQUFlLElBQU1ELFdBQVcsQ0FBQ0UsWUFBYyxDQUFDQTtJQUV0REMsUUFBUUMsR0FBRyxDQUFDTixNQUFNTyxLQUFLO0lBR3ZCLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFJQyxXQUFXVCxNQUFNTyxLQUFLLEdBQUNULDZEQUFVLEdBQUNBLDhEQUFXO3NCQUM5Qyw0RUFBQ1U7Z0JBQUlDLFdBQVdYLCtEQUFZOzBCQUN2Qkcsd0JBQ0csOERBQUNPO29CQUFJQyxXQUFXWCwrREFBWTs4QkFDNUIsNEVBQUNGLG1EQUFLQTt3QkFDTmtCLEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLFFBQVE7d0JBQ1JULFdBQVdYLDZEQUFVO3dCQUNyQnNCLFNBQVNqQjs7Ozs7Ozs7Ozs4Q0FJVCw4REFBQ0s7b0JBQUlDLFdBQVdYLDhEQUFXOzhCQUMzQiw0RUFBQ0YsbURBQUtBO3dCQUNOa0IsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsUUFBUTt3QkFDUlQsV0FBV1gsNkRBQVU7d0JBQ3JCc0IsU0FBU2pCOzs7Ozs7Ozs7OzZCQUVIOzs7Ozs7Ozs7Ozs7QUFNOUIsRUFBQztHQTNDWUo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NhcmQvY2FyZC50c3g/MjQ5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSAnQG11aS9tYXRlcmlhbC9TZWxlY3QvU2VsZWN0SW5wdXQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY2FyZC5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgY29uc3QgQ2FyZCA9IChwcm9wczogYW55KSA9PiB7XG5cbiAgICBjb25zdCBbaXNGcm9udCwgc2V0SXNGcm9udF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG4gICAgY29uc3QgQ2xpY2tIYW5kbGVyID0gKCkgPT4gc2V0SXNGcm9udCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKVxuXG4gICAgY29uc29sZS5sb2cocHJvcHMuaXNGbHkpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuaXNGbHk/c3R5bGVzLmZseTpzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn0+XG4gICAgICAgICAgICAgICAgICAgIHtpc0Zyb250P1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcm9udH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi90ZXN0LWNhcmQucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0n6KGo6Z2iJ1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e0NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2NhcmQtYmFjay5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSfjg4jjg6njg7Pjg5foo4/pnaInXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Q2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ2FyZCIsInByb3BzIiwiaXNGcm9udCIsInNldElzRnJvbnQiLCJDbGlja0hhbmRsZXIiLCJwcmV2U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiaXNGbHkiLCJkaXYiLCJjbGFzc05hbWUiLCJmbHkiLCJjYXJkIiwiaW5uZXIiLCJmcm9udCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicHJpb3JpdHkiLCJpbWciLCJvbkNsaWNrIiwiYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/Card/card.tsx\n"));

/***/ })

});