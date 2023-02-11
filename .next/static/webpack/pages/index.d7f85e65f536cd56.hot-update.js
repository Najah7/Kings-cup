"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/layout */ \"./src/components/Layout/layout.jsx\");\n/* harmony import */ var _components_FirstView_firstView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FirstView/firstView */ \"./src/components/FirstView/firstView.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helper_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helper/game */ \"./helper/game.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { cards  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    let gameInfo = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app__WEBPACK_IMPORTED_MODULE_6__.GameInfo);\n    console.log(gameInfo);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // 前回のプレイデータがLocalStrageにあるかをチェックするため\n        const cardsDataInStorage = localStorage.getItem(\"cards\");\n        const playersDataInStorage = localStorage.getItem(\"players\");\n        c;\n        if (cardsDataInStorage !== 0 && playersDataInStorage) {\n            // ロカールストレージの値をオブジェクトへ\n            const cardsObj = JSON.parse(cardsDataInStorage);\n            // ランダムにカードを選ぶ\n            const randomNum = (0,helper_game__WEBPACK_IMPORTED_MODULE_5__.getRandomNumWithIn)(cardsObj.length - 1);\n            const randomCard = cardsObj[randomNum];\n            // markとnumberだけを扱いやすく変数に\n            const mark = randomCard.mark;\n            const num = randomCard.num;\n            // 続きからプレイするとき用のURLを事前に生成\n            const nextUrl = \"/game/\".concat(mark, \"/\").concat(num);\n            // 続きからするプレイするかのお伺い\n            if (confirm(\"Would you like to continue with your last game? \")) {\n                // 続きのページへ\n                router.push(nextUrl);\n            }\n        }\n        // （player以外の）ゲームに使う初期値をセット\n        localStorage.setItem(\"cards\", JSON.stringify(cards));\n        localStorage.setItem(\"playerIndex\", 0);\n        localStorage.setItem(\"numKing\", 0);\n        return function() {\n            gameInfo.setNumCards((prev)=>prev - 1);\n            console.log(gameInfo);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            console.log(_app__WEBPACK_IMPORTED_MODULE_6__.GameInfo),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FirstView_firstView__WEBPACK_IMPORTED_MODULE_2__.FirstView, {}, void 0, false, {\n                fileName: \"/home/najah/kings_cup/src/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"cy36CiUKZSXZPH6iXOnywEHAiOQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRTUE7QUFQOEM7QUFDUztBQUNoQjtBQUNOO0FBQ1M7QUFDakI7O0FBS2hCLFNBQVNRLEtBQUssS0FBTyxFQUFFO1FBQVQsRUFBQ0MsTUFBSyxFQUFDLEdBQVA7O0lBRTNCLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUV4QixJQUFJTSxXQUFXUixpREFBVUEsQ0FBQ0ksMENBQVFBO0lBRWxDSyxRQUFRQyxHQUFHLENBQUNGO0lBRVpQLGdEQUFTQSxDQUFDLElBQU07UUFFZCxxQ0FBcUM7UUFDckMsTUFBTVUscUJBQXFCQyxhQUFhQyxPQUFPLENBQUM7UUFDaEQsTUFBTUMsdUJBQXVCRixhQUFhQyxPQUFPLENBQUM7UUFFbERFO1FBRUEsSUFBR0osdUJBQXNCLEtBQUtHLHNCQUM5QjtZQUNFLHNCQUFzQjtZQUN0QixNQUFNRSxXQUFXQyxLQUFLQyxLQUFLLENBQUNQO1lBQzVCLGNBQWM7WUFDZCxNQUFNUSxZQUFZaEIsK0RBQWtCQSxDQUFDYSxTQUFTSSxNQUFNLEdBQUc7WUFDdkQsTUFBTUMsYUFBYUwsUUFBUSxDQUFDRyxVQUFVO1lBQ3RDLHlCQUF5QjtZQUN6QixNQUFNRyxPQUFPRCxXQUFXQyxJQUFJO1lBQzVCLE1BQU1DLE1BQU1GLFdBQVdFLEdBQUc7WUFFMUIseUJBQXlCO1lBQ3pCLE1BQU1DLFVBQVUsU0FBaUJELE9BQVJELE1BQUssS0FBTyxPQUFKQztZQUVqQyxtQkFBbUI7WUFDbkIsSUFBR0UsUUFBUSxxREFDWDtnQkFDRSxVQUFVO2dCQUNWbEIsT0FBT21CLElBQUksQ0FBQ0Y7WUFDZCxDQUFDO1FBQ0gsQ0FBQztRQUVELDJCQUEyQjtRQUMzQlosYUFBYWUsT0FBTyxDQUFDLFNBQVNWLEtBQUtXLFNBQVMsQ0FBQ3RCO1FBQzdDTSxhQUFhZSxPQUFPLENBQUMsZUFBZTtRQUNwQ2YsYUFBYWUsT0FBTyxDQUFDLFdBQVc7UUFFaEMsT0FDRSxXQUFXO1lBQ1RuQixTQUFTcUIsV0FBVyxDQUFDQyxDQUFBQSxPQUFRQSxPQUFPO1lBQ3BDckIsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBR0osR0FBRyxFQUFFO0lBRUwscUJBQ0U7O1lBQ0dDLFFBQVFDLEdBQUcsQ0FBQ04sMENBQVFBOzBCQUNuQiw4REFBQ0wsc0VBQVNBOzs7Ozs7O0FBR2xCLENBQUM7R0ExRHVCTTs7UUFFUEgsa0RBQVNBOzs7S0FGRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L2xheW91dCdcbmltcG9ydCB7IEZpcnN0VmlldyB9IGZyb20gJy4uL2NvbXBvbmVudHMvRmlyc3RWaWV3L2ZpcnN0VmlldydcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBnZXRSYW5kb21OdW1XaXRoSW4gfSBmcm9tICdoZWxwZXIvZ2FtZSdcbmltcG9ydCB7R2FtZUluZm99IGZyb20gJy4vX2FwcCdcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2NhcmRzfSkge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgbGV0IGdhbWVJbmZvID0gdXNlQ29udGV4dChHYW1lSW5mbylcblxuICBjb25zb2xlLmxvZyhnYW1lSW5mbylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgLy8g5YmN5Zue44Gu44OX44Os44Kk44OH44O844K/44GMTG9jYWxTdHJhZ2XjgavjgYLjgovjgYvjgpLjg4Hjgqfjg4Pjgq/jgZnjgovjgZ/jgoFcbiAgICBjb25zdCBjYXJkc0RhdGFJblN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FyZHMnKVxuICAgIGNvbnN0IHBsYXllcnNEYXRhSW5TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllcnMnKVxuICAgIFxuICAgIGNcblxuICAgIGlmKGNhcmRzRGF0YUluU3RvcmFnZSAhPT0wICYmIHBsYXllcnNEYXRhSW5TdG9yYWdlKVxuICAgIHtcbiAgICAgIC8vIOODreOCq+ODvOODq+OCueODiOODrOODvOOCuOOBruWApOOCkuOCquODluOCuOOCp+OCr+ODiOOBuFxuICAgICAgY29uc3QgY2FyZHNPYmogPSBKU09OLnBhcnNlKGNhcmRzRGF0YUluU3RvcmFnZSlcbiAgICAgIC8vIOODqeODs+ODgOODoOOBq+OCq+ODvOODieOCkumBuOOBtlxuICAgICAgY29uc3QgcmFuZG9tTnVtID0gZ2V0UmFuZG9tTnVtV2l0aEluKGNhcmRzT2JqLmxlbmd0aCAtIDEpXG4gICAgICBjb25zdCByYW5kb21DYXJkID0gY2FyZHNPYmpbcmFuZG9tTnVtXVxuICAgICAgLy8gbWFya+OBqG51bWJlcuOBoOOBkeOCkuaJseOBhOOChOOBmeOBj+WkieaVsOOBq1xuICAgICAgY29uc3QgbWFyayA9IHJhbmRvbUNhcmQubWFya1xuICAgICAgY29uc3QgbnVtID0gcmFuZG9tQ2FyZC5udW1cblxuICAgICAgLy8g57aa44GN44GL44KJ44OX44Os44Kk44GZ44KL44Go44GN55So44GuVVJM44KS5LqL5YmN44Gr55Sf5oiQXG4gICAgICBjb25zdCBuZXh0VXJsID0gYC9nYW1lLyR7bWFya30vJHtudW19YFxuXG4gICAgICAvLyDntprjgY3jgYvjgonjgZnjgovjg5fjg6zjgqTjgZnjgovjgYvjga7jgYrkvLrjgYRcbiAgICAgIGlmKGNvbmZpcm0oJ1dvdWxkIHlvdSBsaWtlIHRvIGNvbnRpbnVlIHdpdGggeW91ciBsYXN0IGdhbWU/ICcpKVxuICAgICAge1xuICAgICAgICAvLyDntprjgY3jga7jg5rjg7zjgrjjgbhcbiAgICAgICAgcm91dGVyLnB1c2gobmV4dFVybClcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g77yIcGxheWVy5Lul5aSW44Gu77yJ44Ky44O844Og44Gr5L2/44GG5Yid5pyf5YCk44KS44K744OD44OIXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcmRzJywgSlNPTi5zdHJpbmdpZnkoY2FyZHMpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJJbmRleCcsIDApXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ251bUtpbmcnLCAwKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgZ2FtZUluZm8uc2V0TnVtQ2FyZHMocHJldiA9PiBwcmV2IC0gMSlcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZUluZm8pXG4gICAgICB9XG4gICAgKVxuICAgIFxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y29uc29sZS5sb2coR2FtZUluZm8pfVxuICAgICAgICA8Rmlyc3RWaWV3Lz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cbiAgLy8gY2FyZOOBruODh+ODvOOCv+OCkuiqreOBv+i+vOOBv1xuICBjb25zdCB7IGNhcmRzIH0gPSBhd2FpdCBpbXBvcnQoJy9kYXRhL2NhcmRzLmpzb24nKVxuXG5cbiAgLy8g44Oa44O844K45YaF44Gn5L2/44GI44KL44KI44GG44GrcmV0dXJuXG4gIHJldHVybiB7XG4gICAgICBwcm9wczp7XG4gICAgICAgICAgY2FyZHM6IGNhcmRzXG4gICAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiaW50ZXIiLCJMYXlvdXQiLCJGaXJzdFZpZXciLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2V0UmFuZG9tTnVtV2l0aEluIiwiR2FtZUluZm8iLCJIb21lIiwiY2FyZHMiLCJyb3V0ZXIiLCJnYW1lSW5mbyIsImNvbnNvbGUiLCJsb2ciLCJjYXJkc0RhdGFJblN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGxheWVyc0RhdGFJblN0b3JhZ2UiLCJjIiwiY2FyZHNPYmoiLCJKU09OIiwicGFyc2UiLCJyYW5kb21OdW0iLCJsZW5ndGgiLCJyYW5kb21DYXJkIiwibWFyayIsIm51bSIsIm5leHRVcmwiLCJjb25maXJtIiwicHVzaCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZXROdW1DYXJkcyIsInByZXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});