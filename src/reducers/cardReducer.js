export const drawTwo = (state = false, action) => {
    switch(action.type) {
        case 'SET_DRAW_TWO': return action.payload;
        default: return state;
    }
}
export const reverse = (state = false, action) => {
    switch(action.type) {
        case 'SET_REVERSE': return action.payload;
        default: return state;
    }
}
export const skip = (state = false, action) => {
    switch(action.type) {
        case 'SET_SKIP': return action.payload;
        default: return state;
    }
}
export const wild = (state = false, action) => {
    switch(action.type) {
        case 'SET_WILD': return action.payload;
        default: return state;
    }
}
export const wildDrawFour = (state = false, action) => {
    switch(action.type) {
        case 'SET_WILD_DRAW_FOUR': return action.payload;
        default: return state;
    }
}