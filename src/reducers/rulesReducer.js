export const official = (state = true, action) => {
    switch(action.type) {
        case 'SET_OFFICIAL': return action.payload;
        default: return state;
    }
}
export const penalties = (state = false, action) => {
    switch(action.type) {
        case 'SET_PENALTIES': return action.payload;
        default: return state;
    }
}
export const twoPlayerGame = (state = false, action) => {
    switch(action.type) {
        case 'SET_TWO_PLAYER_GAME': return action.payload;
        default: return state;
    }
}
export const house = (state = false, action) => {
    switch(action.type) {
        case 'SET_HOUSE': return action.payload;
        default: return state;
    }
}