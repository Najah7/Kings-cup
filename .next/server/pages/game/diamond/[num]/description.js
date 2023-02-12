"use strict";
(() => {
var exports = {};
exports.id = 381;
exports.ids = [381,888];
exports.modules = {

/***/ 4897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _num_description),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Description/description.jsx
var description = __webpack_require__(3528);
// EXTERNAL MODULE: ./src/components/Card/card.jsx
var card = __webpack_require__(2343);
// EXTERNAL MODULE: ./src/components/Button/NextButton/nextButton.jsx
var nextButton = __webpack_require__(2860);
// EXTERNAL MODULE: ./src/components/StatusDisplay/StatusDisplay.jsx + 4 modules
var StatusDisplay = __webpack_require__(6542);
;// CONCATENATED MODULE: ./src/components/Game/game.jsx





function Game(props) {
    return /*#__PURE__*/ _jsx(_Fragment, {});
}

// EXTERNAL MODULE: ./src/components/Layout/layout.jsx + 2 modules
var layout = __webpack_require__(7339);
// EXTERNAL MODULE: ./src/pages/_app.js
var _app = __webpack_require__(2730);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./helper/game.js
var game = __webpack_require__(7678);
;// CONCATENATED MODULE: ./src/pages/game/diamond/[num]/description.js









// NOTE: Static Renderingの値（message）
const DiamondDescription = ({ card  })=>{
    const router = (0,router_.useRouter)();
    const gameInfo = (0,external_react_.useContext)(_app.GameInfo);
    const num = router.query.num;
    const mark = router.pathname.split("/")[2];
    const clickHandler = ()=>{
        // ローカルの値を取得
        const cardsJson = localStorage.getItem("cards");
        console.log(cardsJson);
        // ローカルの値をフォーマット
        let cards = JSON.parse(cardsJson);
        const maxIndex = cards.length - 1;
        const randomIndex = (0,game/* getRandomNumWithIn */.Oj)(maxIndex);
        const nextCardMark = cards[randomIndex].mark;
        const nextCardNum = cards[randomIndex].num;
        if (nextCardNum == 13 && nextCardMark !== "joker") gameInfo.setNumKings((prev)=>prev + 1);
        var nextCardUrl = `/game/${nextCardMark}/${nextCardNum}/`;
        gameInfo.setNumCards(cards.length - 1);
        router.push(nextCardUrl);
    };
    (0,external_react_.useEffect)(()=>{
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
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(description/* Description */.d, {
            emoji: card["emoji"],
            description: card["description"],
            onClick: clickHandler
        })
    });
};
/* harmony default export */ const _num_description = (DiamondDescription);
async function getStaticPaths() {
    const { cards  } = await __webpack_require__.e(/* import() */ 19).then(__webpack_require__.t.bind(__webpack_require__, 8019, 19));
    const diamondCards = cards.filter((card)=>card.mark == "diamond");
    const allPaths = diamondCards.map((card)=>{
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
    const diamondCards = cards.filter((card)=>card.mark == "diamond");
    // パラメータの数字だけに絞り込み
    const card = diamondCards.find((card)=>card.num == num);
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
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,676,664,730,953,981,528], () => (__webpack_exec__(4897)));
module.exports = __webpack_exports__;

})();