export const gamers = (state=[{name: "Emina", points:0, win:"DA"},{name: "Amina", points:8, win:"NE"},{name: "Faris", points:20, win:"NE"},{name: "Emina", points:0, win:"DA"},{name: "Amina", points:14, win:"NE"},{name: "Faris", points:28, win:"NE"}], action) => {
    switch(action.type) {
        case 'ADD_GAMER': return action.payload;
        case 'DELETE_GAMER': return action.payload;
        case 'UPDATE_GAMER_VALUE': return action.payload;
        case 'SET_NEW_GAMER': return action.payload;
        case 'PRINT_SCORE': return action.payload;
        default: return state;
    }
}
export const name = (state='', action) => {
    switch(action.type) {
        case 'SET_NAME': return action.payload;
        case 'REFRESH_NAME': return action.payload;
        default: return state;
    }
}
export const points = (state='', action) => {
    switch(action.type) {
        case 'SET_POINTS': return action.payload;
        case 'REFRESH_POINTS': return action.payload;
        default: return state;
    }
}
export const win = (state='', action) => {
    switch(action.type) {
        case 'SET_WIN': return action.payload;
        case 'REFRESH_WIN': return action.payload;
        default: return state;
    }
}
export const gameSearch = (state='', action) => {
    switch(action.type) {
        case 'SET_GAME_SEARCH': return action.payload;
        default: return state;
    }
}
export const dailyMode = (state=false, action) => {
    switch(action.type) {
        case 'SET_GAME_MODE': return action.payload;
        default: return state;
    }
}
export const firstName = (state='', action) => {
    switch(action.type) {
        case 'SET_FIRST_NAME': return action.payload;
        default: return state;
    }
}
export const numberOfPlayer = (state=0, action) => {
    switch(action.type) {
        case 'SET_NUMBER_OF_PLAYER': return action.payload;
        default: return state;
    }
}