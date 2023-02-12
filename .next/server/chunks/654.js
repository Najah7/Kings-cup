exports.id = 654;
exports.ids = [654];
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

/***/ 7678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Oj": () => (/* binding */ getRandomNumWithIn),
/* harmony export */   "pW": () => (/* binding */ UpdateToNextIndex)
/* harmony export */ });
/* unused harmony exports updatePlayerIndexToNext, getNextUrl */
const updatePlayerIndexToNext = (playerIndex, numPlayer)=>{
    if (playerIndex == numPlayer - 1) return 0;
    else return playerIndex + 1;
};
const getRandomNumWithIn = (max)=>Math.floor(Math.random() * max + 1);
const UpdateToNextIndex = (index, numPlayer)=>{
    if (index == numPlayer - 1) return 0;
    else return index + 1;
};
const getNextUrl = (mark, num)=>`/game/${mark}/${num}`;


/***/ }),

/***/ 7195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ Description)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
// EXTERNAL MODULE: ./src/components/Button/SimpleButton/button.jsx
var SimpleButton_button = __webpack_require__(6953);
;// CONCATENATED MODULE: ./src/components/Button/NextButton/nextButton.jsx


function NextButton(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(SimpleButton_button/* Button */.z, {
            text: "Next",
            onClick: props.onClick,
            children: "start"
        })
    });
}

// EXTERNAL MODULE: ./src/components/Description/description.module.css
var description_module = __webpack_require__(1075);
var description_module_default = /*#__PURE__*/__webpack_require__.n(description_module);
;// CONCATENATED MODULE: ./src/components/Description/description.jsx




const Description = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (description_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (description_module_default()).emoji,
                            children: props.emoji
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (description_module_default()).description,
                            children: props.description
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NextButton, {
                    onClick: props.onClick
                })
            ]
        })
    });
};


/***/ })

};
;