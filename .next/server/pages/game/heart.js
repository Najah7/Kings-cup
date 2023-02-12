(() => {
var exports = {};
exports.id = 865;
exports.ids = [865,888];
exports.modules = {

/***/ 219:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "linkButton_link__4JAKr"
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

/***/ 9524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../components/Layout/layout'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../components/Card/card'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../components/StatusDisplay/StatusDisplay'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../components/Button/SimpleButton/button'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_Button_linkButton_linkButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1723);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2730);
/* harmony import */ var helper_game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7678);












// NOTE: Static Renderingの値（message）
const HeartCard = ({ card  })=>{
    // ゲーム情報を取得（コンテキスから）
    const gameInfo = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_7__.GameInfo);
    const numCards = gameInfo.numCards;
    const numKings = gameInfo.numKings;
    console.log(gameInfo.players);
    const player = gameInfo.players[gameInfo.playerIndex];
    console.log(gameInfo.playerIndex);
    console.log(player);
    // NOTE:下記の処理をgetServerSideProps関数のcontextでできること知り、そっちで実装。
    //      一応、useRouterの使い方を思い出すように残している。
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    // console.log(router)
    const { num  } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        return ()=>{
            gameInfo.setPlayerIndex((prev)=>(0,helper_game__WEBPACK_IMPORTED_MODULE_8__/* .UpdateToNextIndex */ .pW)(prev, gameInfo.players.length));
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../components/StatusDisplay/StatusDisplay'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                numKings: numKings,
                numCards: numCards,
                player: player
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../components/Card/card'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                path: card.image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_linkButton_linkButton__WEBPACK_IMPORTED_MODULE_6__/* .LinkButton */ .Q, {
                path: `/game/heart/${num}/description`,
                text: "Description"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeartCard);
// NOTE:自分解釈ではgetStaticPaths関数で、この階層にできるページ数を定義する(引数で返す)ことによってプリレンダリングを実現している。
async function getStaticPaths() {
    const { cards  } = await __webpack_require__.e(/* import() */ 19).then(__webpack_require__.t.bind(__webpack_require__, 8019, 19));
    const heartCards = cards.filter((card)=>card.mark == "heart");
    const allPaths = heartCards.map((card)=>{
        return {
            params: {
                num: card.num.toString()
            }
        };
    });
    // console.log(allPaths)
    return {
        paths: allPaths,
        fallback: false
    };
}
// NOTE:この関数は最後に記述してもコンポーネントの関数の前に実行される仕様になっている。
// NOTE:そして、この関数はクライアントのブラウザには送信されないので、クライアントに送信したくない、処理や情報も使うことができる。
// NOTE:サーバレンダリングの関数が記述されたコンポーネントはデプロイ時にレンダリングされる。
async function getStaticProps(context) {
    // NOTE:外部の場合：const res = await fecth(<URL>)
    //                  const data = await res.json()
    // パラメータのnumを読み込み（オプショナルチェーン (?.)）
    const num = context?.params.num;
    // cardのデータを読み込み
    const { cards  } = await __webpack_require__.e(/* import() */ 19).then(__webpack_require__.t.bind(__webpack_require__, 8019, 19));
    // クローバだけに絞り込み
    const heartCards = cards.filter((card)=>card.mark == "heart");
    // パラメータの数字だけに絞り込み
    const card = heartCards.find((card)=>card.num == num);
    // ページ内で使えるようにreturn
    return {
        props: {
            card: card
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,676,664,730,953], () => (__webpack_exec__(9524)));
module.exports = __webpack_exports__;

})();