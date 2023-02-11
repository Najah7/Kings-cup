"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game/crowbar/[num]/description",{

/***/ "./src/pages/game/crowbar/[num]/description.js":
/*!*****************************************************!*\
  !*** ./src/pages/game/crowbar/[num]/description.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Description_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Description/description */ \"./src/components/Description/description.jsx\");\n/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout/layout */ \"./src/components/Layout/layout.jsx\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/_app */ \"./src/pages/_app.js\");\n/* harmony import */ var helper_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helper/game */ \"./helper/game.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// NOTE: Static Renderingの値（message）\nconst CrowbarDescription = (param)=>{\n    let { card  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const gameInfo = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.GameInfo);\n    const num = router.query.num;\n    const mark = router.pathname.split(\"/\")[2];\n    const clickHandler = ()=>{\n        // ローカルの値を取得\n        const cardsJson = localStorage.getItem(\"cards\");\n        console.log(cardsJson);\n        // ローカルの値をフォーマット\n        let cards = JSON.parse(cardsJson);\n        const maxIndex = cards.length - 1;\n        const randomIndex = (0,helper_game__WEBPACK_IMPORTED_MODULE_4__.getRandomNumWithIn)(max);\n        const nextCardMark = cards[randomNum].mark;\n        const nextCardNum = cards[randomNum].num;\n        if (nextCardNum == 13) gameInfo.setNumKings((prev)=>prev + 1);\n        var nextCardUrl = \"/game/\".concat(nextCardMark, \"/\").concat(nextCardNum, \"/\");\n        console.log(nextCardUrl);\n        router.push(nextCardUrl);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        // ローカルの値を取得\n        const cardsJson = localStorage.getItem(\"cards\");\n        // ローカルの値をフォーマット\n        let cards = JSON.parse(cardsJson);\n        // このページのトランプの情報を削除\n        const card_index = cards.findIndex((card)=>card.mark == mark && card.num == num);\n        cards.splice(card_index, 1);\n        // 残りのカードの枚数をローカルに保存\n        localStorage.setItem(\"numCards\", card.length);\n        // このページのカードだけを削除したカードデータををまたローカルに保存\n        localStorage.setItem(\"cards\", JSON.stringify(cards));\n        console.log(localStorage.getItem(\"cards\"));\n        return ()=>{\n            if (gameInfo.numCards == 0) router.push(\"/game/over\");\n            if (gameInfo.numKings == 4) router.push(\"/game/over\");\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Description_description__WEBPACK_IMPORTED_MODULE_1__.Description, {\n            emoji: card[\"emoji\"],\n            description: card[\"description\"],\n            onClick: clickHandler\n        }, void 0, false, {\n            fileName: \"/home/najah/kings_cup/src/pages/game/crowbar/[num]/description.js\",\n            lineNumber: 72,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(CrowbarDescription, \"cy36CiUKZSXZPH6iXOnywEHAiOQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = CrowbarDescription;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrowbarDescription);\nvar _c;\n$RefreshReg$(_c, \"CrowbarDescription\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FtZS9jcm93YmFyL1tudW1dL2Rlc2NyaXB0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRTtBQUNmO0FBQ1o7QUFDUztBQUNsQjtBQUNTO0FBQ007QUFFOUMsb0NBQW9DO0FBQ3BDLE1BQU1RLHFCQUFxQixTQUFZO1FBQVgsRUFBQ0MsS0FBSSxFQUFDOztJQUU5QixNQUFNQyxTQUFTTCxzREFBU0E7SUFFeEIsTUFBTU0sV0FBV0wsaURBQVVBLENBQUNKLGdEQUFRQTtJQUVwQyxNQUFNVSxNQUFNRixPQUFPRyxLQUFLLENBQUNELEdBQUc7SUFDNUIsTUFBTUUsT0FBT0osT0FBT0ssUUFBUSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFHMUMsTUFBTUMsZUFBZSxJQUFNO1FBRXZCLFlBQVk7UUFDWixNQUFNQyxZQUFZQyxhQUFhQyxPQUFPLENBQUM7UUFFdkNDLFFBQVFDLEdBQUcsQ0FBQ0o7UUFDWixnQkFBZ0I7UUFDaEIsSUFBSUssUUFBUUMsS0FBS0MsS0FBSyxDQUFDUDtRQUV2QixNQUFNUSxXQUFXSCxNQUFNSSxNQUFNLEdBQUc7UUFDaEMsTUFBTUMsY0FBY3pCLCtEQUFrQkEsQ0FBQzBCO1FBRXZDLE1BQU1DLGVBQWNQLEtBQUssQ0FBQ1EsVUFBVSxDQUFDakIsSUFBSTtRQUN6QyxNQUFNa0IsY0FBY1QsS0FBSyxDQUFDUSxVQUFVLENBQUNuQixHQUFHO1FBRXhDLElBQUdvQixlQUFlLElBQUlyQixTQUFTc0IsV0FBVyxDQUFDQyxDQUFBQSxPQUFRQSxPQUFPO1FBRTFELElBQUlDLGNBQWMsU0FBeUJILE9BQWhCRixjQUFhLEtBQWUsT0FBWkUsYUFBWTtRQUV2RFgsUUFBUUMsR0FBRyxDQUFDYTtRQUVaekIsT0FBTzBCLElBQUksQ0FBQ0Q7SUFFaEI7SUFFQTVCLGdEQUFTQSxDQUFDLElBQU07UUFDWixZQUFZO1FBQ1osTUFBTVcsWUFBWUMsYUFBYUMsT0FBTyxDQUFDO1FBQ3ZDLGdCQUFnQjtRQUNoQixJQUFJRyxRQUFRQyxLQUFLQyxLQUFLLENBQUNQO1FBRXZCLG1CQUFtQjtRQUNuQixNQUFNbUIsYUFBYWQsTUFBTWUsU0FBUyxDQUFDN0IsQ0FBQUEsT0FBUUEsS0FBS0ssSUFBSSxJQUFJQSxRQUFRTCxLQUFLRyxHQUFHLElBQUlBO1FBQzVFVyxNQUFNZ0IsTUFBTSxDQUFDRixZQUFZO1FBRXpCLG9CQUFvQjtRQUNwQmxCLGFBQWFxQixPQUFPLENBQUMsWUFBWS9CLEtBQUtrQixNQUFNO1FBRTVDLG9DQUFvQztRQUNwQ1IsYUFBYXFCLE9BQU8sQ0FBQyxTQUFTaEIsS0FBS2lCLFNBQVMsQ0FBQ2xCO1FBRTdDRixRQUFRQyxHQUFHLENBQUNILGFBQWFDLE9BQU8sQ0FBQztRQUVqQyxPQUFPLElBQU07WUFDVCxJQUFJVCxTQUFTK0IsUUFBUSxJQUFJLEdBQUdoQyxPQUFPMEIsSUFBSSxDQUFDO1lBQ3hDLElBQUl6QixTQUFTZ0MsUUFBUSxJQUFJLEdBQUdqQyxPQUFPMEIsSUFBSSxDQUFDO1FBQzVDO0lBRUo7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQ3BDLDRFQUFXQTtZQUFDNEMsT0FBT25DLElBQUksQ0FBQyxRQUFRO1lBQUVvQyxhQUFhcEMsSUFBSSxDQUFDLGNBQWM7WUFBRXFDLFNBQVM3Qjs7Ozs7OztBQUkxRjtHQWxFTVQ7O1FBRWFILGtEQUFTQTs7O0tBRnRCRzs7QUFvRU4sK0RBQWVBLGtCQUFrQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZ2FtZS9jcm93YmFyL1tudW1dL2Rlc2NyaXB0aW9uLmpzP2I2NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVzY3JpcHRpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvRGVzY3JpcHRpb24vZGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnQC9jb21wb25lbnRzL0xheW91dC9sYXlvdXQnO1xuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tICdAL3BhZ2VzL19hcHAnO1xuaW1wb3J0IHsgZ2V0UmFuZG9tTnVtV2l0aEluIH0gZnJvbSAnaGVscGVyL2dhbWUnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBOT1RFOiBTdGF0aWMgUmVuZGVyaW5n44Gu5YCk77yIbWVzc2FnZe+8iVxuY29uc3QgQ3Jvd2JhckRlc2NyaXB0aW9uID0gKHtjYXJkfSkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IGdhbWVJbmZvID0gdXNlQ29udGV4dChHYW1lSW5mbylcblxuICAgIGNvbnN0IG51bSA9IHJvdXRlci5xdWVyeS5udW1cbiAgICBjb25zdCBtYXJrID0gcm91dGVyLnBhdGhuYW1lLnNwbGl0KCcvJylbMl1cblxuXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIOODreODvOOCq+ODq+OBruWApOOCkuWPluW+l1xuICAgICAgICBjb25zdCBjYXJkc0pzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FyZHMnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhjYXJkc0pzb24pXG4gICAgICAgIC8vIOODreODvOOCq+ODq+OBruWApOOCkuODleOCqeODvOODnuODg+ODiFxuICAgICAgICBsZXQgY2FyZHMgPSBKU09OLnBhcnNlKGNhcmRzSnNvbilcblxuICAgICAgICBjb25zdCBtYXhJbmRleCA9IGNhcmRzLmxlbmd0aCAtIDEgXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gZ2V0UmFuZG9tTnVtV2l0aEluKG1heClcblxuICAgICAgICBjb25zdCBuZXh0Q2FyZE1hcms9IGNhcmRzW3JhbmRvbU51bV0ubWFya1xuICAgICAgICBjb25zdCBuZXh0Q2FyZE51bSA9IGNhcmRzW3JhbmRvbU51bV0ubnVtXG5cbiAgICAgICAgaWYobmV4dENhcmROdW0gPT0gMTMpIGdhbWVJbmZvLnNldE51bUtpbmdzKHByZXYgPT4gcHJldiArIDEpXG4gICAgICAgIFxuICAgICAgICB2YXIgbmV4dENhcmRVcmwgPSBgL2dhbWUvJHtuZXh0Q2FyZE1hcmt9LyR7bmV4dENhcmROdW19L2BcblxuICAgICAgICBjb25zb2xlLmxvZyhuZXh0Q2FyZFVybClcblxuICAgICAgICByb3V0ZXIucHVzaChuZXh0Q2FyZFVybClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8g44Ot44O844Kr44Or44Gu5YCk44KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IGNhcmRzSnNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkcycpO1xuICAgICAgICAvLyDjg63jg7zjgqvjg6vjga7lgKTjgpLjg5Xjgqnjg7zjg57jg4Pjg4hcbiAgICAgICAgbGV0IGNhcmRzID0gSlNPTi5wYXJzZShjYXJkc0pzb24pXG5cbiAgICAgICAgLy8g44GT44Gu44Oa44O844K444Gu44OI44Op44Oz44OX44Gu5oOF5aCx44KS5YmK6ZmkXG4gICAgICAgIGNvbnN0IGNhcmRfaW5kZXggPSBjYXJkcy5maW5kSW5kZXgoY2FyZCA9PiBjYXJkLm1hcmsgPT0gbWFyayAmJiBjYXJkLm51bSA9PSBudW0pXG4gICAgICAgIGNhcmRzLnNwbGljZShjYXJkX2luZGV4LCAxKVxuXG4gICAgICAgIC8vIOaui+OCiuOBruOCq+ODvOODieOBruaemuaVsOOCkuODreODvOOCq+ODq+OBq+S/neWtmFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbnVtQ2FyZHMnLCBjYXJkLmxlbmd0aClcblxuICAgICAgICAvLyDjgZPjga7jg5rjg7zjgrjjga7jgqvjg7zjg4njgaDjgZHjgpLliYrpmaTjgZfjgZ/jgqvjg7zjg4njg4fjg7zjgr/jgpLjgpLjgb7jgZ/jg63jg7zjgqvjg6vjgavkv53lrZhcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcmRzJywgSlNPTi5zdHJpbmdpZnkoY2FyZHMpKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkcycpKVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmIChnYW1lSW5mby5udW1DYXJkcyA9PSAwKSByb3V0ZXIucHVzaCgnL2dhbWUvb3ZlcicpO1xuICAgICAgICAgICAgaWYgKGdhbWVJbmZvLm51bUtpbmdzID09IDQpIHJvdXRlci5wdXNoKCcvZ2FtZS9vdmVyJyk7XG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPERlc2NyaXB0aW9uIGVtb2ppPXtjYXJkWydlbW9qaSddfSBkZXNjcmlwdGlvbj17Y2FyZFsnZGVzY3JpcHRpb24nXX0gb25DbGljaz17Y2xpY2tIYW5kbGVyfSAvPlxuICAgICAgICA8Lz5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3Jvd2JhckRlc2NyaXB0aW9uXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgICBjb25zdCB7IGNhcmRzIH0gPSBhd2FpdCBpbXBvcnQoJy9kYXRhL2NhcmRzLmpzb24nKVxuICAgIGNvbnN0IGNyb3diYXJDYXJkcyA9IGNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQubWFyayA9PSAnY3Jvd2JhcicpXG5cbiAgICBjb25zdCBhbGxQYXRocyA9IGNyb3diYXJDYXJkcy5tYXAoY2FyZCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBudW06IGNhcmQubnVtLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0gICAgICAgICAgICBcbiAgICB9KVxuICAgIC8vIGNvbnNvbGUubG9nKGFsbFBhdGhzKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHM6IGFsbFBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2VcbiAgICB9XG59XG5cbi8vIE5PVEU644GT44Gu6Zai5pWw44Gv5pyA5b6M44Gr6KiY6L+w44GX44Gm44KC5pyA5Yid44Gr5a6f6KGM44GV44KM44KL5LuV5qeY44Gr44Gq44Gj44Gm44GE44KL44CCXG4vLyBOT1RFOuOBneOBl+OBpuOAgeOBk+OBrumWouaVsOOBr+OCr+ODqeOCpOOCouODs+ODiOOBruODluODqeOCpuOCtuOBq+OBr+mAgeS/oeOBleOCjOOBquOBhOOBruOBp+OAgeOCr+ODqeOCpOOCouODs+ODiOOBq+mAgeS/oeOBl+OBn+OBj+OBquOBhOOAgeWHpueQhuOChOaDheWgseOCguS9v+OBhuOBk+OBqOOBjOOBp+OBjeOCi+OAglxuLy8gTk9URTrjgrXjg7zjg5Djg6zjg7Pjg4Djg6rjg7PjgrDjga7plqLmlbDjgYzoqJjov7DjgZXjgozjgZ/jgrPjg7Pjg53jg7zjg43jg7Pjg4jjga/jg4fjg5fjg63jgqTmmYLjgavjg6zjg7Pjg4Djg6rjg7PjgrDjgZXjgozjgovjgIJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgLy8gTk9URTrlpJbpg6jjga7loLTlkIjvvJpjb25zdCByZXMgPSBhd2FpdCBmZWN0aCg8VVJMPilcbiAgICAvLyAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICAvLyDjg5Hjg6njg6Hjg7zjgr/jga5udW3jgpLoqq3jgb/ovrzjgb/vvIjjgqrjg5fjgrfjg6fjg4rjg6vjg4Hjgqfjg7zjg7MgKD8uKe+8iVxuICAgIGNvbnN0IG51bSA9IGNvbnRleHQ/LnBhcmFtcy5udW1cblxuICAgIC8vIGNhcmTjga7jg4fjg7zjgr/jgpLoqq3jgb/ovrzjgb9cbiAgICBjb25zdCB7IGNhcmRzIH0gPSBhd2FpdCBpbXBvcnQoJy9kYXRhL2NhcmRzLmpzb24nKVxuXG4gICAgLy8g44Kv44Ot44O844OQ44Gg44GR44Gr57We44KK6L6844G/XG4gICAgY29uc3QgY3Jvd2JhckNhcmRzID0gY2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5tYXJrID09ICdjcm93YmFyJylcblxuICAgIC8vIOODkeODqeODoeODvOOCv+OBruaVsOWtl+OBoOOBkeOBq+e1nuOCiui+vOOBv1xuICAgIGNvbnN0IGNhcmQgPSBjcm93YmFyQ2FyZHMuZmluZChjYXJkID0+IGNhcmQubnVtID09IG51bSlcblxuICAgIC8vIOODmuODvOOCuOWGheOBp+S9v+OBiOOCi+OCiOOBhuOBq3JldHVyblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIGNhcmQ6IGNhcmRcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiRGVzY3JpcHRpb24iLCJMYXlvdXQiLCJHYW1lSW5mbyIsImdldFJhbmRvbU51bVdpdGhJbiIsIkltYWdlIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkNyb3diYXJEZXNjcmlwdGlvbiIsImNhcmQiLCJyb3V0ZXIiLCJnYW1lSW5mbyIsIm51bSIsInF1ZXJ5IiwibWFyayIsInBhdGhuYW1lIiwic3BsaXQiLCJjbGlja0hhbmRsZXIiLCJjYXJkc0pzb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImNhcmRzIiwiSlNPTiIsInBhcnNlIiwibWF4SW5kZXgiLCJsZW5ndGgiLCJyYW5kb21JbmRleCIsIm1heCIsIm5leHRDYXJkTWFyayIsInJhbmRvbU51bSIsIm5leHRDYXJkTnVtIiwic2V0TnVtS2luZ3MiLCJwcmV2IiwibmV4dENhcmRVcmwiLCJwdXNoIiwiY2FyZF9pbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJudW1DYXJkcyIsIm51bUtpbmdzIiwiZW1vamkiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/game/crowbar/[num]/description.js\n"));

/***/ })

});