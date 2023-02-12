(() => {
var exports = {};
exports.id = 834;
exports.ids = [834,888];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 219:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "linkButton_link__4JAKr"
};


/***/ }),

/***/ 8857:
/***/ ((module) => {

// Exports
module.exports = {
	"PlayerList": "playerList_PlayerList__htpmg",
	"player": "playerList_player__ICFu5",
	"icons": "playerList_icons__2gvlv",
	"fa-check": "playerList_fa-check__Xqgl5",
	"fa-trash": "playerList_fa-trash__WsqA_",
	"text": "playerList_text__HT0Vi"
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

/***/ 3890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_players)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Layout/layout.jsx + 2 modules
var layout = __webpack_require__(7339);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Button/linkButton/linkButton.jsx
var linkButton = __webpack_require__(1723);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/InputForm/inputForm.jsx
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const inputForm_InputForm = ({ playerList , setPlayerList  })=>{
    const [inputText, setInputText] = (0,external_react_.useState)("");
    const addPlayer = (e)=>{
        e.preventDefault();
        if (inputText === "") {
            return;
        }
        /* プレイヤーを追加する。 */ setPlayerList([
            ...playerList,
            inputText
        ]);
        setInputText("");
    };
    const handleChange = (e)=>{
        setInputText(e.target.value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "inputForm",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            onSubmit: addPlayer,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Input, {
                    placeholder: "Type player name...",
                    onChange: handleChange,
                    value: inputText,
                    variant: "solid",
                    size: "lg",
                    color: "error"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: addPlayer,
                    children: "➕"
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
// EXTERNAL MODULE: ./src/components/PlayerList/playerList.module.css
var playerList_module = __webpack_require__(8857);
var playerList_module_default = /*#__PURE__*/__webpack_require__.n(playerList_module);
;// CONCATENATED MODULE: ./src/components/PlayerList/playerList.jsx



const playerList_PlayerList = ({ playerList , setPlayerList  })=>{
    const handleDelete = (arg_index)=>{
        console.log(arg_index);
        /* 現在のタスクを削除する。 */ setPlayerList(playerList.filter((player, index)=>index !== arg_index));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (playerList_module_default()).PlayerList,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "players",
            children: playerList.map((player, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (playerList_module_default()).player,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>handleDelete(index),
                            children: "➖"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (playerList_module_default()).text,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: (playerList_module_default()).span,
                                children: [
                                    index + 1,
                                    ". ",
                                    playerList[index]
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (playerList_module_default()).icon
                        })
                    ]
                }, index))
        })
    });
};

;// CONCATENATED MODULE: ./src/components/PlayerPage/playerPage.jsx






const PlayerPage = ()=>{
    const [playerList, setPlayerList] = useState([]);
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.container,
        children: [
            /*#__PURE__*/ _jsx(InputForm, {
                playerList: playerList,
                setPlayerList: setPlayerList
            }),
            /*#__PURE__*/ _jsx(StartButton, {}),
            /*#__PURE__*/ _jsx(PlayerList, {
                playerList: playerList,
                setPlayerList: setPlayerList
            })
        ]
    });
};

;// CONCATENATED MODULE: external "@mui/base"
const base_namespaceObject = require("@mui/base");
// EXTERNAL MODULE: ./helper/game.js
var game = __webpack_require__(7678);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/pages/_app.js
var _app = __webpack_require__(2730);
;// CONCATENATED MODULE: ./src/pages/players.js












const players = ()=>{
    // ゲーム情報を取得（コンテキスから）
    const gameInfo = (0,external_react_.useContext)(_app.GameInfo);
    // playerの情報を配列でステートとして保存
    const [playerList, setPlayerList] = (0,external_react_.useState)([]);
    // ランダムなカードをドローするためのランダムな数字
    const randomNum = (0,game/* getRandomNumWithIn */.Oj)(13);
    const randomIndex = (0,game/* getRandomNumWithIn */.Oj)(3);
    // ランダムなカードをドローするために使うマークの配列
    // HACK:どっか違う場所に定数としておいた方がいい
    const marks = [
        "crowbar",
        "diamond",
        "heart",
        "spade"
    ];
    // 次のURLを作成
    const nextUrl = `/game/${marks[randomIndex]}/${randomNum}`;
    // ドローしたカードが13の時のゲーム情報のキングの数を更新（インクリメント）
    if (randomNum == 13) gameInfo.setNumKings((prev)=>prev + 1);
    // コンテキストのゲームの情報のplayerの値を更新（追加されるたびに）
    (0,external_react_.useEffect)(()=>gameInfo.setPlayers(playerList), [
        playerList
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(inputForm_InputForm, {
                playerList: playerList,
                setPlayerList: setPlayerList
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(linkButton/* LinkButton */.Q, {
                text: "Play",
                path: nextUrl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(playerList_PlayerList, {
                playerList: playerList,
                setPlayerList: setPlayerList
            })
        ]
    });
};
/* harmony default export */ const pages_players = (players);


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

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,730,953], () => (__webpack_exec__(3890)));
module.exports = __webpack_exports__;

})();