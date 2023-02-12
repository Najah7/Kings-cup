"use strict";
(() => {
var exports = {};
exports.id = 30;
exports.ids = [30,888];
exports.modules = {

/***/ 7678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 5132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Description_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3528);
/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7339);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2730);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var helper_game__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7678);








// NOTE: Static Renderingの値（message）
const HeartDescription = ({ card  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const gameInfo = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.GameInfo);
    const num = router.query.num;
    const mark = router.pathname.split("/")[2];
    const clickHandler = ()=>{
        // ローカルの値を取得
        const cardsJson = localStorage.getItem("cards");
        console.log(cardsJson);
        // ローカルの値をフォーマット
        let cards = JSON.parse(cardsJson);
        const maxIndex = cards.length - 1;
        const randomIndex = (0,helper_game__WEBPACK_IMPORTED_MODULE_7__/* .getRandomNumWithIn */ .Oj)(maxIndex);
        const nextCardMark = cards[randomIndex].mark;
        const nextCardNum = cards[randomIndex].num;
        if (nextCardNum == 13 && nextCardMark !== "joker") gameInfo.setNumKings((prev)=>prev + 1);
        var nextCardUrl = `/game/${nextCardMark}/${nextCardNum}/`;
        gameInfo.setNumCards(cards.length - 1);
        router.push(nextCardUrl);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        // ローカルの値を取得
        const cardsJson = localStorage.getItem("cards");
        // ローカルの値をフォーマット
        let cards = JSON.parse(cardsJson);
        // このページのトランプの情報を削除
        const card_index = cards.findIndex((card)=>card.mark == mark && card.num == num);
        cards.splice(card_index, 1);
        console.log(`number of cards : ${cards.length}`);
        // このページのカードだけを削除したカードデータををまたローカルに保存
        localStorage.setItem("cards", JSON.stringify(cards));
        // console.log(localStorage.getItem('cards'))
        return ()=>{
            if (gameInfo.numCards == 0) router.push("/game/over");
            if (gameInfo.numKings == 4) router.push("/game/over");
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Description_description__WEBPACK_IMPORTED_MODULE_1__/* .Description */ .d, {
            emoji: card["emoji"],
            description: card["description"],
            onClick: clickHandler
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeartDescription);
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
// NOTE:この関数は最後に記述しても最初に実行される仕様になっている。
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

module.exports = require("@mui/material");

/***/ }),

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,676,664,730,953,528], () => (__webpack_exec__(5132)));
module.exports = __webpack_exports__;

})();