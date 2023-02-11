
// TODO:ローカルのからの取得＋オブジェクト化する関数

// TODO:josn化 + ローカルに保存する関数

// TODO:ページのカードを配列からの削除する関数

function getSerializedObjectAsJSON(obj)
{
    return JSON.stringify(obj)
}
function getObjectFromJSON(json)
{
    return JSON.parse(json)
}
function updateLocalStorageItem(key, value)
{
    localStorage.setItem(key, value)
}
function removeLocalStorageItem(key)
{
    localStorage.removeItem(key)
}
function getLocalStorageItemValue(key)
{
    return localStorage.getItem(key)
}

function updateGameObject(score,round)
{
    gameObj.score = score
    gameObj.round = round
}
function saveGameObjectToLocalStorage(score,round)
{
    updateGameObject(score, round)
    updateLocalStorageItem(localStorageGameKey, getSerializedObjectAsJSON(gameObj))
}

