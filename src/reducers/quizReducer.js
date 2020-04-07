export const question1 = (state = false, action) => {
    switch(action.type) {
        case 'SET_QUESTION1': return action.payload;
        default: return state;
    }
}
export const question2 = (state = false, action) => {
    switch(action.type) {
        case 'SET_QUESTION2': return action.payload;
        default: return state;
    }
}
export const question3 = (state = false, action) => {
    switch(action.type) {
        case 'SET_QUESTION3': return action.payload;
        default: return state;
    }
}
export const question4 = (state = false, action) => {
    switch(action.type) {
        case 'SET_QUESTION4': return action.payload;
        default: return state;
    }
}
export const result = (state = false, action) => {
    switch(action.type) {
        case 'SET_RESULT': return action.payload;
        default: return state;
    }
}