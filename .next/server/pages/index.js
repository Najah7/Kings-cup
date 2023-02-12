(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,888];
exports.modules = {

/***/ 219:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "linkButton_link__4JAKr"
};


/***/ }),

/***/ 5518:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "firstView_wrapper__XwGfP",
	"container": "firstView_container__j_pYa",
	"posA": "firstView_posA__1WXRB",
	"posB": "firstView_posB__HMtiI",
	"posC": "firstView_posC__dka3o",
	"posD": "firstView_posD__O_hZN"
};


/***/ }),

/***/ 397:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "king_card__hKiwI",
	"inner": "king_inner__AuzKh",
	"img": "king_img__ncEuG",
	"fly": "king_fly__JuwlG"
};


/***/ }),

/***/ 1723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ LinkButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SimpleButton_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6953);
/* harmony import */ var _linkButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(219);
/* harmony import */ var _linkButton_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_linkButton_module_css__WEBPACK_IMPORTED_MODULE_3__);




function LinkButton(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SimpleButton_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: props.path,
                className: (_linkButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),
                children: props.text
            })
        })
    });
}


/***/ }),

/***/ 8559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Button/linkButton/linkButton.jsx
var linkButton = __webpack_require__(1723);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Kings/King/king.module.css
var king_module = __webpack_require__(397);
var king_module_default = /*#__PURE__*/__webpack_require__.n(king_module);
;// CONCATENATED MODULE: ./src/components/Kings/King/king.jsx



const King = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: props.isFly ? (king_module_default()).fly : (king_module_default()).card,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (king_module_default()).inner,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: props.url,
                    alt: "表面",
                    width: 150,
                    height: 300,
                    priority: true,
                    className: (king_module_default()).img
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Kings/CrowbarKing/crowbarKing.jsx


const CrowbarKing = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(King, {
            url: "/Cards/crowbar13.png",
            isFly: props.isFly
        })
    });
};

// EXTERNAL MODULE: ./src/components/FirstView/firstView.module.css
var firstView_module = __webpack_require__(5518);
var firstView_module_default = /*#__PURE__*/__webpack_require__.n(firstView_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Kings/DiamondKing/diamondKing.jsx


const DiamondKing = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(King, {
            url: "/Cards/diamond13.png",
            isFly: props.isFly
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Kings/HeartKing/heartKing.jsx


const HeartKing = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(King, {
            url: "/Cards/heart13.png",
            isFly: props.isFly
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Kings/SpadeKing/spadeKing.jsx


const SpadeKing = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(King, {
            url: "/Cards/spade13.png",
            isFly: props.isFly
        })
    });
};

;// CONCATENATED MODULE: ./src/components/FirstView/firstView.jsx








const FirstView = ()=>{
    const [isFlyA, setIsFlyA] = (0,external_react_.useState)(false);
    const [isFlyB, setIsFlyB] = (0,external_react_.useState)(false);
    const [isFlyC, setIsFlyC] = (0,external_react_.useState)(false);
    const [isFlyD, setIsFlyD] = (0,external_react_.useState)(false);
    // const flyInA = () => setIsFlyA((prevState) => !prevState)
    // const flyInB = () => setIsFlyB((prevState) => !prevState)
    // const flyInC = () => setIsFlyC((prevState) => !prevState)
    // const flyInD = () => setIsFlyD((prevState) => !prevState)
    // window.setTimeout(flyInA, 1000)
    // window.setTimeout(flyInA, 2000)
    // window.setTimeout(flyInA, 3000)
    // window.setTimeout(flyInA, 4000)
    // window.clearTimeout(id);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (firstView_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(linkButton/* LinkButton */.Q, {
                text: "Start",
                path: "/players"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (firstView_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (firstView_module_default()).posA,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CrowbarKing, {
                            isFlay: isFlyA
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (firstView_module_default()).posB,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(DiamondKing, {
                            isFlay: isFlyB
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (firstView_module_default()).posC,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(HeartKing, {
                            isFlay: isFlyC
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (firstView_module_default()).posD,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SpadeKing, {
                            isFlay: isFlyD
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/pages/_app.js + 3 modules
var _app = __webpack_require__(4126);
;// CONCATENATED MODULE: ./src/pages/index.js






function Home({ cards  }) {
    const router = (0,router_.useRouter)();
    let gameInfo = (0,external_react_.useContext)(_app.GameInfo);
    (0,external_react_.useEffect)(()=>{
        // 前回のプレイデータがLocalStrageにあるかをチェックするため 
        // const cardsDataInStorage = localStorage.getItem('cards')
        // const playersDataInStorage = localStorage.getItem('players')
        // if(cardsDataInStorage && playersDataInStorage)
        // {
        // ロカールストレージの値をオブジェクトへ
        //   const cardsObj = JSON.parse(cardsDataInStorage)
        // ランダムにカードを選ぶ
        //   const randomNum = getRandomNumWithIn(cardsObj.length - 1)
        //   const randomCard = cardsObj[randomNum]
        // markとnumberだけを扱いやすく変数に
        //   const mark = randomCard.mark
        //   const num = randomCard.num
        // 続きからプレイするとき用のURLを事前に生成
        //   const nextUrl = `/game/${mark}/${num}`
        // 続きからするプレイするかのお伺い
        //   if(confirm('Would you like to continue with your last game? '))
        //   {
        //     // 続きのページへ
        //     router.push(nextUrl)
        //   }
        // }
        // （player以外の）ゲームに使う初期値をセット
        localStorage.setItem("cards", JSON.stringify(cards));
        return function() {
            gameInfo.setNumCards((prev)=>prev - 1);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(FirstView, {})
    });
}
async function getStaticProps() {
    // cardのデータを読み込み
    const { cards  } = await __webpack_require__.e(/* import() */ 19).then(__webpack_require__.t.bind(__webpack_require__, 8019, 19));
    // ページ内で使えるようにreturn
    return {
        props: {
            cards: cards
        }
    };
}


/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 7986:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,675,126,953], () => (__webpack_exec__(8559)));
module.exports = __webpack_exports__;

})();