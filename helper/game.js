export const updatePlayerIndexToNext = (playerIndex, numPlayer) =>{
    if (playerIndex == numPlayer - 1) return 0;
    else return playerIndex + 1
}

export const getRandomNumWithIn = (max) => Math.floor(Math.random() * max + 1)

export const UpdateToNextIndex = (index, numPlayer) =>{
    if (index == numPlayer -1) return 0;
    else return index + 1;
}

export const getNextUrl = (mark, num) => `/game/${mark}/${num}`
