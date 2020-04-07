export const setOfficial = value => {
    return {
        type: 'SET_OFFICIAL',
        payload: value
    }
}
export const setPenalties = value => {
    return {
        type: 'SET_PENALTIES',
        payload: value
    }
}
export const setTwoPlayerGame = value => {
    return {
        type: 'SET_TWO_PLAYER_GAME',
        payload: value
    }
}
export const setHouse = value => {
    return {
        type: 'SET_HOUSE',
        payload: value
    }
}
export const setDrawTwo = value => {
    return {
        type: 'SET_DRAW_TWO',
        payload: value
    }
}
export const setWild = value => {
    return {
        type: 'SET_WILD',
        payload: value
    }
}
export const setReverse = value => {
    return {
        type: 'SET_REVERSE',
        payload: value
    }
}
export const setSkip = value => {
    return {
        type: 'SET_SKIP',
        payload: value
    }
}
export const setWildDrawFour = value => {
    return {
        type: 'SET_WILD_DRAW_FOUR',
        payload: value
    }
}
export const setName = name => {
    return {
        type: 'SET_NAME',
        payload: name
    }
}
export const setPoints = time => {
    return {
        type: 'SET_POINTS',
        payload: time
    }
}
export const setWin = value => {
    return {
        type: 'SET_WIN',
        payload: value
    }
}
export const refreshName = () => {
    return {
        type: 'REFRESH_NAME',
        payload: ''
    }
}
export const refreshPoints = () => {
    return {
        type: 'REFRESH_POINTS',
        payload: ''
    }
}
export const refreshWin = () => {
    return {
        type: 'REFRESH_WIN',
        payload: ''
    }
}
export const setGameSearch = value => {
    return {
        type: 'SET_GAME_SEARCH',
        payload: value
    }
}
export const addGamer = (gamers, name, points, win) => {
    return {
        type: 'ADD_GAMER',
        payload: [...gamers, {name:name, points:points, win:win}]
    }
}
export const setNewGamer = value => {
    return {
        type: 'SET_NEW_GAMER',
        payload: value
    }
}
export const setFirstName = (gamers) => {
    return {
        type: 'SET_FIRST_NAME',
        payload: gamers[0].name
    }
}
export const setNumberOfPlayer = (number) => {
    return {
        type: 'SET_NUMBER_OF_PLAYER',
        payload: number
    }
}
export const deleteUser = (gamers, x) => {
    return {
        type: 'DELETE_GAMER',
        payload: gamers.filter ((el, i) => { return i!==x })
    }
}
export const updateGamerValue = (gamers, x, name, points, win) => {
    return {
        type: 'UPDATE_GAMER_VALUE',
        payload: gamers.map((el, i) => i === x ? {...el, name: name, points: points, win: win}: el)
    }
}
export const setGameMode = value => {
    return {
        type: 'SET_GAME_MODE',
        payload: value
    }
}
export const setQuestion1 = value => {
    return {
        type: 'SET_QUESTION1',
        payload: value
    }
}
export const setQuestion2 = value => {
    return {
        type: 'SET_QUESTION2',
        payload: value
    }
}
export const setQuestion3 = value => {
    return {
        type: 'SET_QUESTION3',
        payload: value
    }
}
export const setQuestion4 = value => {
    return {
        type: 'SET_QUESTION4',
        payload: value
    }
}
export const setResult = value => {
    return {
        type: 'SET_RESULT',
        payload: value
    }
}