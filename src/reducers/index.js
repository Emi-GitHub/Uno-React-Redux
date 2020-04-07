import { combineReducers } from 'redux';
import { official } from './rulesReducer';
import { penalties } from './rulesReducer';
import { twoPlayerGame } from './rulesReducer';
import { house } from './rulesReducer';
import { drawTwo } from './cardReducer';
import { reverse } from './cardReducer';
import { skip } from './cardReducer';
import { wild } from './cardReducer';
import { wildDrawFour } from './cardReducer';
import { gamers } from './scoreTableReducer';
import { name } from './scoreTableReducer';
import { points } from './scoreTableReducer';
import { win } from './scoreTableReducer';
import { gameSearch } from './scoreTableReducer';
import { dailyMode } from './scoreTableReducer';
import { firstName } from './scoreTableReducer';
import { numberOfPlayer } from './scoreTableReducer';
import { question1 } from './quizReducer';
import { question2 } from './quizReducer';
import { question3 } from './quizReducer';
import { question4 } from './quizReducer';
import { result } from './quizReducer';

export default combineReducers ({
    official,
    penalties,
    twoPlayerGame,
    house,
    drawTwo,
    reverse,
    skip,
    wild,
    wildDrawFour,
    gamers,
    name,
    points,
    win,
    gameSearch,
    dailyMode,
    question1,
    question2,
    question3,
    question4,
    result,
    firstName,
    numberOfPlayer
})