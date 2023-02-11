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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/layout */ \"./src/components/Layout/layout.jsx\");\n/* harmony import */ var _components_FirstView_firstView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FirstView/firstView */ \"./src/components/FirstView/firstView.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helper_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helper/game */ \"./helper/game.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { cards  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    let gameInfo = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app__WEBPACK_IMPORTED_MODULE_6__.GameInfo);\n    console.log(gameInfo);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // 前回のプレイデータがLocalStrageにあるかをチェックするため\n        const cardsDataInStorage = localStorage.getItem(\"cards\");\n        const playersDataInStorage = localStorage.getItem(\"players\");\n        const test = ()=>{\n            if (cardsDataInStorage) return true;\n        };\n        console.log(test());\n        if (cardsDataInStorage && playersDataInStorage) {\n            // ロカールストレージの値をオブジェクトへ\n            const cardsObj = JSON.parse(cardsDataInStorage);\n            // ランダムにカードを選ぶ\n            const randomNum = (0,helper_game__WEBPACK_IMPORTED_MODULE_5__.getRandomNumWithIn)(cardsObj.length - 1);\n            const randomCard = cardsObj[randomNum];\n            // markとnumberだけを扱いやすく変数に\n            const mark = randomCard.mark;\n            const num = randomCard.num;\n            // 続きからプレイするとき用のURLを事前に生成\n            const nextUrl = \"/game/\".concat(mark, \"/\").concat(num);\n            // 続きからするプレイするかのお伺い\n            if (confirm(\"Would you like to continue with your last game? \")) {\n                // 続きのページへ\n                router.push(nextUrl);\n            }\n        }\n        // （player以外の）ゲームに使う初期値をセット\n        localStorage.setItem(\"cards\", JSON.stringify(cards));\n        localStorage.setItem(\"playerIndex\", 0);\n        localStorage.setItem(\"numKing\", 0);\n        return function() {\n            gameInfo.setNumCards((prev)=>prev - 1);\n            console.log(gameInfo);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            console.log(_app__WEBPACK_IMPORTED_MODULE_6__.GameInfo),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FirstView_firstView__WEBPACK_IMPORTED_MODULE_2__.FirstView, {}, void 0, false, {\n                fileName: \"/home/najah/kings_cup/src/pages/index.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"cy36CiUKZSXZPH6iXOnywEHAiOQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRTUE7QUFQOEM7QUFDUztBQUNoQjtBQUNOO0FBQ1M7QUFDakI7O0FBS2hCLFNBQVNRLEtBQUssS0FBTyxFQUFFO1FBQVQsRUFBQ0MsTUFBSyxFQUFDLEdBQVA7O0lBRTNCLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUV4QixJQUFJTSxXQUFXUixpREFBVUEsQ0FBQ0ksMENBQVFBO0lBRWxDSyxRQUFRQyxHQUFHLENBQUNGO0lBRVpQLGdEQUFTQSxDQUFDLElBQU07UUFFZCxxQ0FBcUM7UUFDckMsTUFBTVUscUJBQXFCQyxhQUFhQyxPQUFPLENBQUM7UUFDaEQsTUFBTUMsdUJBQXVCRixhQUFhQyxPQUFPLENBQUM7UUFFbEQsTUFBTUUsT0FBTyxJQUFNO1lBQ2pCLElBQUdKLG9CQUFvQixPQUFPLElBQUk7UUFDcEM7UUFFQUYsUUFBUUMsR0FBRyxDQUFDSztRQUVaLElBQUdKLHNCQUFzQkcsc0JBQ3pCO1lBQ0Usc0JBQXNCO1lBQ3RCLE1BQU1FLFdBQVdDLEtBQUtDLEtBQUssQ0FBQ1A7WUFDNUIsY0FBYztZQUNkLE1BQU1RLFlBQVloQiwrREFBa0JBLENBQUNhLFNBQVNJLE1BQU0sR0FBRztZQUN2RCxNQUFNQyxhQUFhTCxRQUFRLENBQUNHLFVBQVU7WUFDdEMseUJBQXlCO1lBQ3pCLE1BQU1HLE9BQU9ELFdBQVdDLElBQUk7WUFDNUIsTUFBTUMsTUFBTUYsV0FBV0UsR0FBRztZQUUxQix5QkFBeUI7WUFDekIsTUFBTUMsVUFBVSxTQUFpQkQsT0FBUkQsTUFBSyxLQUFPLE9BQUpDO1lBRWpDLG1CQUFtQjtZQUNuQixJQUFHRSxRQUFRLHFEQUNYO2dCQUNFLFVBQVU7Z0JBQ1ZsQixPQUFPbUIsSUFBSSxDQUFDRjtZQUNkLENBQUM7UUFDSCxDQUFDO1FBRUQsMkJBQTJCO1FBQzNCWixhQUFhZSxPQUFPLENBQUMsU0FBU1YsS0FBS1csU0FBUyxDQUFDdEI7UUFDN0NNLGFBQWFlLE9BQU8sQ0FBQyxlQUFlO1FBQ3BDZixhQUFhZSxPQUFPLENBQUMsV0FBVztRQUVoQyxPQUNFLFdBQVc7WUFDVG5CLFNBQVNxQixXQUFXLENBQUNDLENBQUFBLE9BQVFBLE9BQU87WUFDcENyQixRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFHSixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7WUFDR0MsUUFBUUMsR0FBRyxDQUFDTiwwQ0FBUUE7MEJBQ25CLDhEQUFDTCxzRUFBU0E7Ozs7Ozs7QUFHbEIsQ0FBQztHQTlEdUJNOztRQUVQSCxrREFBU0E7OztLQUZGRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvbGF5b3V0J1xuaW1wb3J0IHsgRmlyc3RWaWV3IH0gZnJvbSAnLi4vY29tcG9uZW50cy9GaXJzdFZpZXcvZmlyc3RWaWV3J1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGdldFJhbmRvbU51bVdpdGhJbiB9IGZyb20gJ2hlbHBlci9nYW1lJ1xuaW1wb3J0IHtHYW1lSW5mb30gZnJvbSAnLi9fYXBwJ1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7Y2FyZHN9KSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBsZXQgZ2FtZUluZm8gPSB1c2VDb250ZXh0KEdhbWVJbmZvKVxuXG4gIGNvbnNvbGUubG9nKGdhbWVJbmZvKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAvLyDliY3lm57jga7jg5fjg6zjgqTjg4fjg7zjgr/jgYxMb2NhbFN0cmFnZeOBq+OBguOCi+OBi+OCkuODgeOCp+ODg+OCr+OBmeOCi+OBn+OCgVxuICAgIGNvbnN0IGNhcmRzRGF0YUluU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkcycpXG4gICAgY29uc3QgcGxheWVyc0RhdGFJblN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVycycpXG4gICAgXG4gICAgY29uc3QgdGVzdCA9ICgpID0+IHtcbiAgICAgIGlmKGNhcmRzRGF0YUluU3RvcmFnZSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codGVzdCgpKVxuXG4gICAgaWYoY2FyZHNEYXRhSW5TdG9yYWdlICYmIHBsYXllcnNEYXRhSW5TdG9yYWdlKVxuICAgIHtcbiAgICAgIC8vIOODreOCq+ODvOODq+OCueODiOODrOODvOOCuOOBruWApOOCkuOCquODluOCuOOCp+OCr+ODiOOBuFxuICAgICAgY29uc3QgY2FyZHNPYmogPSBKU09OLnBhcnNlKGNhcmRzRGF0YUluU3RvcmFnZSlcbiAgICAgIC8vIOODqeODs+ODgOODoOOBq+OCq+ODvOODieOCkumBuOOBtlxuICAgICAgY29uc3QgcmFuZG9tTnVtID0gZ2V0UmFuZG9tTnVtV2l0aEluKGNhcmRzT2JqLmxlbmd0aCAtIDEpXG4gICAgICBjb25zdCByYW5kb21DYXJkID0gY2FyZHNPYmpbcmFuZG9tTnVtXVxuICAgICAgLy8gbWFya+OBqG51bWJlcuOBoOOBkeOCkuaJseOBhOOChOOBmeOBj+WkieaVsOOBq1xuICAgICAgY29uc3QgbWFyayA9IHJhbmRvbUNhcmQubWFya1xuICAgICAgY29uc3QgbnVtID0gcmFuZG9tQ2FyZC5udW1cblxuICAgICAgLy8g57aa44GN44GL44KJ44OX44Os44Kk44GZ44KL44Go44GN55So44GuVVJM44KS5LqL5YmN44Gr55Sf5oiQXG4gICAgICBjb25zdCBuZXh0VXJsID0gYC9nYW1lLyR7bWFya30vJHtudW19YFxuXG4gICAgICAvLyDntprjgY3jgYvjgonjgZnjgovjg5fjg6zjgqTjgZnjgovjgYvjga7jgYrkvLrjgYRcbiAgICAgIGlmKGNvbmZpcm0oJ1dvdWxkIHlvdSBsaWtlIHRvIGNvbnRpbnVlIHdpdGggeW91ciBsYXN0IGdhbWU/ICcpKVxuICAgICAge1xuICAgICAgICAvLyDntprjgY3jga7jg5rjg7zjgrjjgbhcbiAgICAgICAgcm91dGVyLnB1c2gobmV4dFVybClcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g77yIcGxheWVy5Lul5aSW44Gu77yJ44Ky44O844Og44Gr5L2/44GG5Yid5pyf5YCk44KS44K744OD44OIXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcmRzJywgSlNPTi5zdHJpbmdpZnkoY2FyZHMpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJJbmRleCcsIDApXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ251bUtpbmcnLCAwKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgZ2FtZUluZm8uc2V0TnVtQ2FyZHMocHJldiA9PiBwcmV2IC0gMSlcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZUluZm8pXG4gICAgICB9XG4gICAgKVxuICAgIFxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y29uc29sZS5sb2coR2FtZUluZm8pfVxuICAgICAgICA8Rmlyc3RWaWV3Lz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cbiAgLy8gY2FyZOOBruODh+ODvOOCv+OCkuiqreOBv+i+vOOBv1xuICBjb25zdCB7IGNhcmRzIH0gPSBhd2FpdCBpbXBvcnQoJy9kYXRhL2NhcmRzLmpzb24nKVxuXG5cbiAgLy8g44Oa44O844K45YaF44Gn5L2/44GI44KL44KI44GG44GrcmV0dXJuXG4gIHJldHVybiB7XG4gICAgICBwcm9wczp7XG4gICAgICAgICAgY2FyZHM6IGNhcmRzXG4gICAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiaW50ZXIiLCJMYXlvdXQiLCJGaXJzdFZpZXciLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2V0UmFuZG9tTnVtV2l0aEluIiwiR2FtZUluZm8iLCJIb21lIiwiY2FyZHMiLCJyb3V0ZXIiLCJnYW1lSW5mbyIsImNvbnNvbGUiLCJsb2ciLCJjYXJkc0RhdGFJblN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGxheWVyc0RhdGFJblN0b3JhZ2UiLCJ0ZXN0IiwiY2FyZHNPYmoiLCJKU09OIiwicGFyc2UiLCJyYW5kb21OdW0iLCJsZW5ndGgiLCJyYW5kb21DYXJkIiwibWFyayIsIm51bSIsIm5leHRVcmwiLCJjb25maXJtIiwicHVzaCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZXROdW1DYXJkcyIsInByZXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});