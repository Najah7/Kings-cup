exports.id = 981;
exports.ids = [981];
exports.modules = {

/***/ 5202:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "card_card__Kiytn",
	"inner": "card_inner__pQGmA",
	"front": "card_front__COkzq",
	"back": "card_back__oHFHL",
	"img": "card_img__hSwK7",
	"shuffle-left": "card_shuffle-left__pjUI8",
	"shuffle-right": "card_shuffle-right__qfHjy",
	"fly": "card_fly__bAKgS",
	"card-inner": "card_card-inner__LcEXq",
	"flip-it": "card_flip-it__ukBem",
	"card-container": "card_card-container__CHoXI",
	"current-status": "card_current-status__CLPMg",
	"game-play-button-container": "card_game-play-button-container__SFnOC",
	"play-game": "card_play-game__ThpZA",
	"header-img": "card_header-img__vOQKi"
};


/***/ }),

/***/ 6498:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Counter_container__3_HXI",
	"h2": "Counter_h2__QuMTR",
	"num": "Counter_num__a4fXj"
};


/***/ }),

/***/ 5139:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "player_container__4XFrU",
	"h2": "player_h2__qSZSp"
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

/***/ 2343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5202);
/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_card_module_css__WEBPACK_IMPORTED_MODULE_3__);
// import SelectInput from '@mui/material/Select/SelectInput'




const Card = (props)=>{
    // const [isFront, setIsFront] = useState(false)
    // const ClickHandler = () => setIsFront((prevState) => !prevState)
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().inner),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().front),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: props.path,
                            alt: "表面",
                            width: 150,
                            height: 300,
                            priority: true,
                            className: (_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().img)
                        })
                    })
                })
            })
        })
    });
};


/***/ }),

/***/ 6542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ StatusDisplay)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/components/Counter/SimpleCounter/Counter.module.css
var Counter_module = __webpack_require__(6498);
var Counter_module_default = /*#__PURE__*/__webpack_require__.n(Counter_module);
;// CONCATENATED MODULE: ./src/components/Counter/SimpleCounter/Counter.jsx


// HACK:名前
// エラーを非表示にするためのany型
const Counter = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Counter_module_default()).container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: (Counter_module_default()).h2,
                children: [
                    props.title,
                    "\xa0",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Counter_module_default()).num,
                        children: props.num
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Counter/CardCounter/CardCounter.jsx


const CardCounter = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Counter, {
            title: "Cards",
            num: props.numCards
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Counter/KingCounter/KingCounter.jsx


const KingCounter = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Counter, {
            title: "Kings",
            num: props.numKings
        })
    });
};

// EXTERNAL MODULE: ./src/components/Player/player.module.css
var player_module = __webpack_require__(5139);
var player_module_default = /*#__PURE__*/__webpack_require__.n(player_module);
;// CONCATENATED MODULE: ./src/components/Player/player.jsx


// エラーを消すためのany
const Player = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (player_module_default()).container,
            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (player_module_default()).h2,
                children: props.name
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/StatusDisplay/StatusDisplay.jsx





const StatusDisplay = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    xs: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CardCounter, {
                        numCards: props.numCards
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    xs: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Player, {
                        name: props.player
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    xs: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(KingCounter, {
                        numKings: props.numKings
                    })
                })
            ]
        })
    });
};


/***/ })

};
;