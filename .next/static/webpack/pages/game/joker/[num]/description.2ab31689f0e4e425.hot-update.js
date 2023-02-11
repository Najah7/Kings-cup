"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game/joker/[num]/description",{

/***/ "./src/pages/game/joker/[num]/description.js":
/*!***************************************************!*\
  !*** ./src/pages/game/joker/[num]/description.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Description_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Description/description */ \"./src/components/Description/description.jsx\");\n/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout/layout */ \"./src/components/Layout/layout.jsx\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/_app */ \"./src/pages/_app.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var helper_game__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helper/game */ \"./helper/game.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// NOTE: Static Renderingの値（message）\nconst JokerDescription = (param)=>{\n    let { card  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const gameInfo = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.GameInfo);\n    const num = router.query.num;\n    const mark = router.pathname.split(\"/\")[2];\n    const clickHandler = ()=>{\n        // ローカルの値を取得\n        const cardsJson = localStorage.getItem(\"cards\");\n        console.log(cardsJson);\n        // ローカルの値をフォーマット\n        let cards = JSON.parse(cardsJson);\n        const maxIndex = cards.length - 1;\n        const randomIndex = (0,helper_game__WEBPACK_IMPORTED_MODULE_7__.getRandomNumWithIn)(maxIndex);\n        const nextCardMark = cards[randomIndex].mark;\n        const nextCardNum = cards[randomIndex].num;\n        if (nextCardNum == 13 && nextCardMark !== \"joker\") gameInfo.setNumKings((prev)=>prev + 1);\n        var nextCardUrl = \"/game/\".concat(nextCardMark, \"/\").concat(nextCardNum, \"/\");\n        gameInfo.setNumCards(cards.length - 1);\n        router.push(nextCardUrl);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        // ローカルの値を取得\n        const cardsJson = localStorage.getItem(\"cards\");\n        // ローカルの値をフォーマット\n        let cards = JSON.parse(cardsJson);\n        // このページのトランプの情報を削除\n        const card_index = cards.findIndex((card)=>card.mark == mark && card.num == num);\n        cards.splice(card_index, 1);\n        console.log(\"number of cards : \".concat(cards.length));\n        // このページのカードだけを削除したカードデータををまたローカルに保存\n        localStorage.setItem(\"cards\", JSON.stringify(cards));\n        // console.log(localStorage.getItem('cards'))\n        return ()=>{\n            if (gameInfo.numCards == 0) router.push(\"/game/over\");\n            if (gameInfo.numKings == 4) router.push(\"/game/over\");\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Description_description__WEBPACK_IMPORTED_MODULE_1__.Description, {\n            emoji: card[\"emoji\"],\n            description: card[\"description\"],\n            onClick: clickHandler\n        }, void 0, false, {\n            fileName: \"/home/najah/kings_cup/src/pages/game/joker/[num]/description.js\",\n            lineNumber: 72,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(JokerDescription, \"cy36CiUKZSXZPH6iXOnywEHAiOQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = JokerDescription;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JokerDescription);\nvar _c;\n$RefreshReg$(_c, \"JokerDescription\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FtZS9qb2tlci9bbnVtXS9kZXNjcmlwdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUU7QUFDZjtBQUNaO0FBQ1Q7QUFDUztBQUNNO0FBQ0c7QUFFakQsb0NBQW9DO0FBQ3BDLE1BQU1RLG1CQUFtQixTQUFZO1FBQVgsRUFBQ0MsS0FBSSxFQUFDOztJQUU1QixNQUFNQyxTQUFTTixzREFBU0E7SUFFeEIsTUFBTU8sV0FBV04saURBQVVBLENBQUNILGdEQUFRQTtJQUVwQyxNQUFNVSxNQUFNRixPQUFPRyxLQUFLLENBQUNELEdBQUc7SUFDNUIsTUFBTUUsT0FBT0osT0FBT0ssUUFBUSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFHMUMsTUFBTUMsZUFBZSxJQUFNO1FBRXZCLFlBQVk7UUFDWixNQUFNQyxZQUFZQyxhQUFhQyxPQUFPLENBQUM7UUFFdkNDLFFBQVFDLEdBQUcsQ0FBQ0o7UUFDWixnQkFBZ0I7UUFDaEIsSUFBSUssUUFBUUMsS0FBS0MsS0FBSyxDQUFDUDtRQUV2QixNQUFNUSxXQUFXSCxNQUFNSSxNQUFNLEdBQUc7UUFDaEMsTUFBTUMsY0FBY3JCLCtEQUFrQkEsQ0FBQ21CO1FBRXZDLE1BQU1HLGVBQWNOLEtBQUssQ0FBQ0ssWUFBWSxDQUFDZCxJQUFJO1FBQzNDLE1BQU1nQixjQUFjUCxLQUFLLENBQUNLLFlBQVksQ0FBQ2hCLEdBQUc7UUFFMUMsSUFBR2tCLGVBQWUsTUFBTUQsaUJBQWlCLFNBQVNsQixTQUFTb0IsV0FBVyxDQUFDQyxDQUFBQSxPQUFRQSxPQUFPO1FBRXRGLElBQUlDLGNBQWMsU0FBeUJILE9BQWhCRCxjQUFhLEtBQWUsT0FBWkMsYUFBWTtRQUV2RG5CLFNBQVN1QixXQUFXLENBQUNYLE1BQU1JLE1BQU0sR0FBRztRQUVwQ2pCLE9BQU95QixJQUFJLENBQUNGO0lBRWhCO0lBRUEzQixnREFBU0EsQ0FBQyxJQUFNO1FBQ1osWUFBWTtRQUNaLE1BQU1ZLFlBQVlDLGFBQWFDLE9BQU8sQ0FBQztRQUN2QyxnQkFBZ0I7UUFDaEIsSUFBSUcsUUFBUUMsS0FBS0MsS0FBSyxDQUFDUDtRQUV2QixtQkFBbUI7UUFDbkIsTUFBTWtCLGFBQWFiLE1BQU1jLFNBQVMsQ0FBQzVCLENBQUFBLE9BQVFBLEtBQUtLLElBQUksSUFBSUEsUUFBUUwsS0FBS0csR0FBRyxJQUFJQTtRQUM1RVcsTUFBTWUsTUFBTSxDQUFDRixZQUFZO1FBRXpCZixRQUFRQyxHQUFHLENBQUMscUJBQWtDLE9BQWJDLE1BQU1JLE1BQU07UUFHN0Msb0NBQW9DO1FBQ3BDUixhQUFhb0IsT0FBTyxDQUFDLFNBQVNmLEtBQUtnQixTQUFTLENBQUNqQjtRQUU3Qyw2Q0FBNkM7UUFFN0MsT0FBTyxJQUFNO1lBQ1QsSUFBSVosU0FBUzhCLFFBQVEsSUFBSSxHQUFHL0IsT0FBT3lCLElBQUksQ0FBQztZQUN4QyxJQUFJeEIsU0FBUytCLFFBQVEsSUFBSSxHQUFHaEMsT0FBT3lCLElBQUksQ0FBQztRQUM1QztJQUVKLEdBQUUsRUFBRTtJQUVKLHFCQUNJO2tCQUNJLDRFQUFDbkMsNEVBQVdBO1lBQUMyQyxPQUFPbEMsSUFBSSxDQUFDLFFBQVE7WUFBRW1DLGFBQWFuQyxJQUFJLENBQUMsY0FBYztZQUFFb0MsU0FBUzVCOzs7Ozs7O0FBSTFGO0dBbEVNVDs7UUFFYUosa0RBQVNBOzs7S0FGdEJJOztBQW9FTiwrREFBZUEsZ0JBQWdCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9nYW1lL2pva2VyL1tudW1dL2Rlc2NyaXB0aW9uLmpzP2U5MDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVzY3JpcHRpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvRGVzY3JpcHRpb24vZGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnQC9jb21wb25lbnRzL0xheW91dC9sYXlvdXQnO1xuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tICdAL3BhZ2VzL19hcHAnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0UmFuZG9tTnVtV2l0aEluIH0gZnJvbSAnaGVscGVyL2dhbWUnO1xuXG4vLyBOT1RFOiBTdGF0aWMgUmVuZGVyaW5n44Gu5YCk77yIbWVzc2FnZe+8iVxuY29uc3QgSm9rZXJEZXNjcmlwdGlvbiA9ICh7Y2FyZH0pID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBnYW1lSW5mbyA9IHVzZUNvbnRleHQoR2FtZUluZm8pXG5cbiAgICBjb25zdCBudW0gPSByb3V0ZXIucXVlcnkubnVtXG4gICAgY29uc3QgbWFyayA9IHJvdXRlci5wYXRobmFtZS5zcGxpdCgnLycpWzJdXG5cblxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9ICgpID0+IHtcblxuICAgICAgICAvLyDjg63jg7zjgqvjg6vjga7lgKTjgpLlj5blvpdcbiAgICAgICAgY29uc3QgY2FyZHNKc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmRzJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coY2FyZHNKc29uKVxuICAgICAgICAvLyDjg63jg7zjgqvjg6vjga7lgKTjgpLjg5Xjgqnjg7zjg57jg4Pjg4hcbiAgICAgICAgbGV0IGNhcmRzID0gSlNPTi5wYXJzZShjYXJkc0pzb24pXG5cbiAgICAgICAgY29uc3QgbWF4SW5kZXggPSBjYXJkcy5sZW5ndGggLSAxIFxuICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IGdldFJhbmRvbU51bVdpdGhJbihtYXhJbmRleClcblxuICAgICAgICBjb25zdCBuZXh0Q2FyZE1hcms9IGNhcmRzW3JhbmRvbUluZGV4XS5tYXJrXG4gICAgICAgIGNvbnN0IG5leHRDYXJkTnVtID0gY2FyZHNbcmFuZG9tSW5kZXhdLm51bVxuXG4gICAgICAgIGlmKG5leHRDYXJkTnVtID09IDEzICYmIG5leHRDYXJkTWFyayAhPT0gJ2pva2VyJykgZ2FtZUluZm8uc2V0TnVtS2luZ3MocHJldiA9PiBwcmV2ICsgMSk7XG4gICAgICAgIFxuICAgICAgICB2YXIgbmV4dENhcmRVcmwgPSBgL2dhbWUvJHtuZXh0Q2FyZE1hcmt9LyR7bmV4dENhcmROdW19L2BcblxuICAgICAgICBnYW1lSW5mby5zZXROdW1DYXJkcyhjYXJkcy5sZW5ndGggLSAxKVxuXG4gICAgICAgIHJvdXRlci5wdXNoKG5leHRDYXJkVXJsKVxuICAgICAgICBcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyDjg63jg7zjgqvjg6vjga7lgKTjgpLlj5blvpdcbiAgICAgICAgY29uc3QgY2FyZHNKc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmRzJyk7XG4gICAgICAgIC8vIOODreODvOOCq+ODq+OBruWApOOCkuODleOCqeODvOODnuODg+ODiFxuICAgICAgICBsZXQgY2FyZHMgPSBKU09OLnBhcnNlKGNhcmRzSnNvbilcblxuICAgICAgICAvLyDjgZPjga7jg5rjg7zjgrjjga7jg4jjg6njg7Pjg5fjga7mg4XloLHjgpLliYrpmaRcbiAgICAgICAgY29uc3QgY2FyZF9pbmRleCA9IGNhcmRzLmZpbmRJbmRleChjYXJkID0+IGNhcmQubWFyayA9PSBtYXJrICYmIGNhcmQubnVtID09IG51bSlcbiAgICAgICAgY2FyZHMuc3BsaWNlKGNhcmRfaW5kZXgsIDEpXG5cbiAgICAgICAgY29uc29sZS5sb2coYG51bWJlciBvZiBjYXJkcyA6ICR7Y2FyZHMubGVuZ3RofWApXG5cblxuICAgICAgICAvLyDjgZPjga7jg5rjg7zjgrjjga7jgqvjg7zjg4njgaDjgZHjgpLliYrpmaTjgZfjgZ/jgqvjg7zjg4njg4fjg7zjgr/jgpLjgpLjgb7jgZ/jg63jg7zjgqvjg6vjgavkv53lrZhcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcmRzJywgSlNPTi5zdHJpbmdpZnkoY2FyZHMpKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkcycpKVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmIChnYW1lSW5mby5udW1DYXJkcyA9PSAwKSByb3V0ZXIucHVzaCgnL2dhbWUvb3ZlcicpO1xuICAgICAgICAgICAgaWYgKGdhbWVJbmZvLm51bUtpbmdzID09IDQpIHJvdXRlci5wdXNoKCcvZ2FtZS9vdmVyJyk7XG4gICAgICAgIH1cblxuICAgIH0sW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPERlc2NyaXB0aW9uIGVtb2ppPXtjYXJkWydlbW9qaSddfSBkZXNjcmlwdGlvbj17Y2FyZFsnZGVzY3JpcHRpb24nXX0gb25DbGljaz17Y2xpY2tIYW5kbGVyfSAvPlxuICAgICAgICA8Lz5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSm9rZXJEZXNjcmlwdGlvblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgY29uc3QgeyBjYXJkcyB9ID0gYXdhaXQgaW1wb3J0KCcvZGF0YS9jYXJkcy5qc29uJylcbiAgICBjb25zdCBqb2tlckNhcmRzID0gY2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5tYXJrID09ICdqb2tlcicpXG5cbiAgICBjb25zdCBhbGxQYXRocyA9IGpva2VyQ2FyZHMubWFwKGNhcmQgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgbnVtOiBjYXJkLm51bS50b1N0cmluZygpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9ICAgICAgICAgICAgXG4gICAgfSlcbiAgICAvLyBjb25zb2xlLmxvZyhhbGxQYXRocylcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBhbGxQYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuXG4vLyBOT1RFOuOBk+OBrumWouaVsOOBr+acgOW+jOOBq+iomOi/sOOBl+OBpuOCguacgOWIneOBq+Wun+ihjOOBleOCjOOCi+S7leanmOOBq+OBquOBo+OBpuOBhOOCi+OAglxuLy8gTk9URTrjgZ3jgZfjgabjgIHjgZPjga7plqLmlbDjga/jgq/jg6njgqTjgqLjg7Pjg4jjga7jg5bjg6njgqbjgrbjgavjga/pgIHkv6HjgZXjgozjgarjgYTjga7jgafjgIHjgq/jg6njgqTjgqLjg7Pjg4jjgavpgIHkv6HjgZfjgZ/jgY/jgarjgYTjgIHlh6bnkIbjgoTmg4XloLHjgoLkvb/jgYbjgZPjgajjgYzjgafjgY3jgovjgIJcbi8vIE5PVEU644K144O844OQ44Os44Oz44OA44Oq44Oz44Kw44Gu6Zai5pWw44GM6KiY6L+w44GV44KM44Gf44Kz44Oz44Od44O844ON44Oz44OI44Gv44OH44OX44Ot44Kk5pmC44Gr44Os44Oz44OA44Oq44Oz44Kw44GV44KM44KL44CCXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIC8vIE5PVEU65aSW6YOo44Gu5aC05ZCI77yaY29uc3QgcmVzID0gYXdhaXQgZmVjdGgoPFVSTD4pXG4gICAgLy8gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgLy8g44OR44Op44Oh44O844K/44GubnVt44KS6Kqt44G/6L6844G/77yI44Kq44OX44K344On44OK44Or44OB44Kn44O844OzICg/LinvvIlcbiAgICBjb25zdCBudW0gPSBjb250ZXh0Py5wYXJhbXMubnVtXG5cbiAgICAvLyBjYXJk44Gu44OH44O844K/44KS6Kqt44G/6L6844G/XG4gICAgY29uc3QgeyBjYXJkcyB9ID0gYXdhaXQgaW1wb3J0KCcvZGF0YS9jYXJkcy5qc29uJylcblxuICAgIC8vIOOCr+ODreODvOODkOOBoOOBkeOBq+e1nuOCiui+vOOBv1xuICAgIGNvbnN0IGpva2VyQ2FyZHMgPSBjYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLm1hcmsgPT0gJ2pva2VyJylcblxuICAgIC8vIOODkeODqeODoeODvOOCv+OBruaVsOWtl+OBoOOBkeOBq+e1nuOCiui+vOOBv1xuICAgIGNvbnN0IGNhcmQgPSBqb2tlckNhcmRzLmZpbmQoY2FyZCA9PiBjYXJkLm51bSA9PSBudW0pXG5cbiAgICAvLyDjg5rjg7zjgrjlhoXjgafkvb/jgYjjgovjgojjgYbjgatyZXR1cm5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICBjYXJkOiBjYXJkXG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIkRlc2NyaXB0aW9uIiwiTGF5b3V0IiwiR2FtZUluZm8iLCJJbWFnZSIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJnZXRSYW5kb21OdW1XaXRoSW4iLCJKb2tlckRlc2NyaXB0aW9uIiwiY2FyZCIsInJvdXRlciIsImdhbWVJbmZvIiwibnVtIiwicXVlcnkiLCJtYXJrIiwicGF0aG5hbWUiLCJzcGxpdCIsImNsaWNrSGFuZGxlciIsImNhcmRzSnNvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiY2FyZHMiLCJKU09OIiwicGFyc2UiLCJtYXhJbmRleCIsImxlbmd0aCIsInJhbmRvbUluZGV4IiwibmV4dENhcmRNYXJrIiwibmV4dENhcmROdW0iLCJzZXROdW1LaW5ncyIsInByZXYiLCJuZXh0Q2FyZFVybCIsInNldE51bUNhcmRzIiwicHVzaCIsImNhcmRfaW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibnVtQ2FyZHMiLCJudW1LaW5ncyIsImVtb2ppIiwiZGVzY3JpcHRpb24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/game/joker/[num]/description.js\n"));

/***/ })

});