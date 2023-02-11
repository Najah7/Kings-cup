"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/game";
exports.ids = ["pages/game"];
exports.modules = {

/***/ "./src/pages/game/index.js":
/*!*********************************!*\
  !*** ./src/pages/game/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// NOTE: Static Renderingの値（message）\nconst Game = ({ cards  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { number  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Game Page\"\n            }, void 0, false, {\n                fileName: \"/home/najah/kings_cup/src/pages/game/index.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: `++++++++${number}`\n            }, void 0, false, {\n                fileName: \"/home/najah/kings_cup/src/pages/game/index.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: cards.map((card)=>card[\"emoji\"])\n            }, void 0, false, {\n                fileName: \"/home/najah/kings_cup/src/pages/game/index.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n// NOTE:この関数は最後に記述しても最初に実行される仕様になっている。\n// NOTE:そして、この関数はクライアントのブラウザには送信されないので、クライアントに送信したくない、処理や情報も使うことができる。\n// NOTE:サーバレンダリングの関数が記述されたコンポーネントはデプロイ時にレンダリングされる。\nasync function getStaticProps() {\n    // NOTE:外部の場合：const res = await fecth(<URL>)\n    //                  const data = await res.json()\n    // cardのデータを読み込み\n    const { cards  } = await __webpack_require__.e(/*! import() */ \"data_cards_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../data/cards.json */ \"./data/cards.json\", 19));\n    // ページ内で使えるようにreturn\n    return {\n        props: {\n            cards: cards\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FtZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBRXhDLG9DQUFvQztBQUNwQyxNQUFNQyxPQUFPLENBQUMsRUFBQ0MsTUFBSyxFQUFDLEdBQUs7SUFDdEIsTUFBTUMsU0FBU0gsc0RBQVNBO0lBRXhCLE1BQU0sRUFBQ0ksT0FBTSxFQUFDLEdBQUdELE9BQU9FLEtBQUs7SUFFN0IscUJBQ0k7OzBCQUNBLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBRyxDQUFDLFFBQVEsRUFBRUgsT0FBTyxDQUFDOzs7Ozs7MEJBQ3ZCLDhEQUFDRzswQkFBR0wsTUFBTU0sR0FBRyxDQUFDQyxDQUFBQSxPQUFRQSxJQUFJLENBQUMsUUFBUTs7Ozs7Ozs7QUFJM0M7QUFFQSxpRUFBZVIsSUFBSUEsRUFBQTtBQUVuQixzQ0FBc0M7QUFDdEMscUVBQXFFO0FBQ3JFLGtEQUFrRDtBQUMzQyxlQUFlUyxpQkFBaUI7SUFDbkMsNENBQTRDO0lBQzVDLGlEQUFpRDtJQUVqRCxnQkFBZ0I7SUFDaEIsTUFBTSxFQUFFUixNQUFLLEVBQUUsR0FBRyxNQUFNLHVLQUFPO0lBRy9CLG9CQUFvQjtJQUNwQixPQUFPO1FBQ0hTLE9BQU07WUFDRlQsT0FBT0E7UUFDWDtJQUNKO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tpbmdzX2N1cC8uL3NyYy9wYWdlcy9nYW1lL2luZGV4LmpzPzllYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG4vLyBOT1RFOiBTdGF0aWMgUmVuZGVyaW5n44Gu5YCk77yIbWVzc2FnZe+8iVxuY29uc3QgR2FtZSA9ICh7Y2FyZHN9KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IHtudW1iZXJ9ID0gcm91dGVyLnF1ZXJ5XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8aDE+R2FtZSBQYWdlPC9oMT5cbiAgICAgICAgPHA+e2ArKysrKysrKyR7bnVtYmVyfWB9PC9wPlxuICAgICAgICA8cD57Y2FyZHMubWFwKGNhcmQgPT4gY2FyZFsnZW1vamknXSl9PC9wPlxuICAgICAgICA8Lz5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVxuXG4vLyBOT1RFOuOBk+OBrumWouaVsOOBr+acgOW+jOOBq+iomOi/sOOBl+OBpuOCguacgOWIneOBq+Wun+ihjOOBleOCjOOCi+S7leanmOOBq+OBquOBo+OBpuOBhOOCi+OAglxuLy8gTk9URTrjgZ3jgZfjgabjgIHjgZPjga7plqLmlbDjga/jgq/jg6njgqTjgqLjg7Pjg4jjga7jg5bjg6njgqbjgrbjgavjga/pgIHkv6HjgZXjgozjgarjgYTjga7jgafjgIHjgq/jg6njgqTjgqLjg7Pjg4jjgavpgIHkv6HjgZfjgZ/jgY/jgarjgYTjgIHlh6bnkIbjgoTmg4XloLHjgoLkvb/jgYbjgZPjgajjgYzjgafjgY3jgovjgIJcbi8vIE5PVEU644K144O844OQ44Os44Oz44OA44Oq44Oz44Kw44Gu6Zai5pWw44GM6KiY6L+w44GV44KM44Gf44Kz44Oz44Od44O844ON44Oz44OI44Gv44OH44OX44Ot44Kk5pmC44Gr44Os44Oz44OA44Oq44Oz44Kw44GV44KM44KL44CCXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgLy8gTk9URTrlpJbpg6jjga7loLTlkIjvvJpjb25zdCByZXMgPSBhd2FpdCBmZWN0aCg8VVJMPilcbiAgICAvLyAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICAvLyBjYXJk44Gu44OH44O844K/44KS6Kqt44G/6L6844G/XG4gICAgY29uc3QgeyBjYXJkcyB9ID0gYXdhaXQgaW1wb3J0KCcvZGF0YS9jYXJkcy5qc29uJylcblxuXG4gICAgLy8g44Oa44O844K45YaF44Gn5L2/44GI44KL44KI44GG44GrcmV0dXJuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgY2FyZHM6IGNhcmRzXG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkdhbWUiLCJjYXJkcyIsInJvdXRlciIsIm51bWJlciIsInF1ZXJ5IiwiaDEiLCJwIiwibWFwIiwiY2FyZCIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/game/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/game/index.js"));
module.exports = __webpack_exports__;

})();