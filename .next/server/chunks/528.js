exports.id = 528;
exports.ids = [528];
exports.modules = {

/***/ 1075:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "description_container__D31Xs",
	"emoji": "description_emoji__3xphQ",
	"description": "description_description__Spflm"
};


/***/ }),

/***/ 2860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ NextButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SimpleButton_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6953);


function NextButton(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SimpleButton_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
            text: "Next",
            onClick: props.onClick,
            children: "start"
        })
    });
}


/***/ }),

/***/ 3528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ Description)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_NextButton_nextButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2860);
/* harmony import */ var _description_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1075);
/* harmony import */ var _description_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_description_module_css__WEBPACK_IMPORTED_MODULE_3__);




const Description = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().emoji),
                            children: props.emoji
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),
                            children: props.description
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_NextButton_nextButton__WEBPACK_IMPORTED_MODULE_2__/* .NextButton */ .a, {
                    onClick: props.onClick
                })
            ]
        })
    });
};


/***/ })

};
;