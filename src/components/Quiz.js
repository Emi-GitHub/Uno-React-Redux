import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setQuestion1, setQuestion2, setQuestion3, setQuestion4, setResult } from '../actions';
import './styles/Quiz.css';

class Quiz extends Component {
    onButtonClick = (event) => {
        event.preventDefault()
        this.props.setResult(true);
    }
    showQuiz = () => {
        return (
            <form onSubmit={this.onButtonClick}>
                <b>1. How many cards are there in the original Uno deck?</b><br/>
                <input 
                    className="question-quiz" 
                    type="radio" 
                    name="question1" 
                    value="11" 
                    checked={this.props.question1 === '11'} 
                    onChange={(event)=>this.props.setQuestion1(event.target.value)}
                />
                <label className="quiz-radio">108</label><br/>
                <input 
                    type="radio" 
                    name="question1" 
                    value="12" 
                    checked={this.props.question1 === '12'} 
                    onChange={(event)=>this.props.setQuestion1(event.target.value)}
                />
                <label className="quiz-radio">112</label><br/>  
                <input 
                    type="radio"
                    name="question1" 
                    value="13" 
                    checked={this.props.question1 === '13'} 
                    onChange={(event)=>this.props.setQuestion1(event.target.value)}
                />
                <label className="quiz-radio">76</label><br/>
                <input 
                    type="radio" 
                    name="question1" 
                    value="14" 
                    checked={this.props.question1 === '14'} 
                    onChange={(event)=>this.props.setQuestion1(event.target.value)}
                />
                <label className="quiz-radio">52</label><br/><br/>

                <b>2. What is the penalty for a player who forgets to yell “Uno!” when only one card in his/her hand is left?</b><br/>
                <input 
                    className="question-quiz" 
                    type="radio"
                    name="question2" 
                    value="21" 
                    checked={this.props.question2 === '21'} 
                    onChange={(event)=>this.props.setQuestion2(event.target.value)}
                />
                <label className="quiz-radio">Draw two cards</label><br/>
                <input 
                    type="radio"
                    name="question2" 
                    value="22" 
                    checked={this.props.question2 === '22'} 
                    onChange={(event)=>this.props.setQuestion2(event.target.value)}
                />
                <label className="quiz-radio">Lose the next turn</label><br/>  
                <input 
                    type="radio" 
                    name="question2" 
                    value="23" 
                    checked={this.props.question2 === '23'} 
                    onChange={(event)=>this.props.setQuestion2(event.target.value)}
                />
                <label className="quiz-radio">Draw four cards</label><br/>
                <input 
                    type="radio" 
                    name="question2" 
                    value="24" 
                    checked={this.props.question2 === '24'} 
                    onChange={(event)=>this.props.setQuestion2(event.target.value)}
                />
                <label className="quiz-radio">Draw one card</label><br/><br/>
    
                <b>3. Which statement below is false?</b><br/>
                <input 
                    className="question-quiz" 
                    type="radio" 
                    name="question3" 
                    value="31" 
                    checked={this.props.question3 === '31'} 
                    onChange={(event)=>this.props.setQuestion3(event.target.value)}
                />
                <label className="quiz-radio">A Wild Draw Four card cannot end a game</label><br/>
                <input 
                    type="radio"
                    name="question3" 
                    value="32" 
                    checked={this.props.question3 === '32'} 
                    onChange={(event)=>this.props.setQuestion3(event.target.value)}
                />
                <label className="quiz-radio">A player who receives a Wild Draw Four must draw four cards and also forfeit his/her turn</label><br/>  
                <input 
                    type="radio"
                    name="question3" 
                    value="33" 
                    checked={this.props.question3 === '33'} 
                    onChange={(event)=>this.props.setQuestion3(event.target.value)}
                />
                <label className="quiz-radio">A Wild Draw Four card is used only when you have no other cards to play</label><br/>
                <input 
                    type="radio" 
                    name="question3" 
                    value="34" 
                    checked={this.props.question3 === '34'} 
                    onChange={(event)=>this.props.setQuestion3(event.target.value)}
                />
                <label className="quiz-radio">There are four Wild Draw Four cards in the original Uno deck</label><br/><br/>
                    
                <b>4. How many of the following statements are false?
                1.) In Progressive Uno, penalties can be stacked 
                2.) In Seven-0, one player trades hands with only one other player 
                3.) In Jump-In, players can play out of turn 
                4.) In Reverse-Skip, players can play both Reverse and Skip cards at the same time</b><br/> 
                <input 
                    className="question-quiz" 
                    type="radio" 
                    name="question4" 
                    value="41" 
                    checked={this.props.question4 === '41'} 
                    onChange={(event)=>this.props.setQuestion4(event.target.value)}
                />
                <label className="quiz-radio">1</label><br/>
                <input 
                    type="radio" 
                    name="question4"
                    value="42" 
                    checked={this.props.question4 === '42'} 
                    onChange={(event)=>this.props.setQuestion4(event.target.value)}
                />
                <label className="quiz-radio">2</label><br/>  
                <input 
                    type="radio" 
                    name="question4" 
                    value="43" 
                    checked={this.props.question4 === '43'} 
                    onChange={(event)=>this.props.setQuestion4(event.target.value)}
                />
                <label className="quiz-radio">3</label><br/>
                <input 
                    type="radio" 
                    name="question4" 
                    value="44" 
                    checked={this.props.question4 === '44'} 
                    onChange={(event)=>this.props.setQuestion4(event.target.value)}
                />
                <label className="quiz-radio">4</label><br/><br/>
                <button className="ui button">Check result</button>
            </form>
        )
    }
    showResult = () => {
        var trueAnswer = 0;
        if(this.props.question1 === '11') trueAnswer++;
        if(this.props.question2 === '21') trueAnswer++;
        if(this.props.question3 === '34') trueAnswer++;
        if(this.props.question4 === '42') trueAnswer++;
        var result = trueAnswer/4 * 100;
        return (
            <div className="quiz-result">
                <h2>You won {result} %</h2>
                { result < 50 ? 
                    <div>
                        <p>Please, learn more about Uno cards!</p>
                        <img src="./quiz/sad.png" alt="sad" className="quiz-emoji"/>
                    </div> : 
                null }
                { (result >= 50 && result <80) ? 
                    <div>
                        <p>You're not bad!</p>
                        <img src="./quiz/smile.png" alt="smile" className="quiz-emoji"/>
                    </div> : 
                null }
                { (result >= 80 ) ? 
                    <div>
                        <p>You're good!</p>
                        <img src="./quiz/emoji.png" alt="emoji" className="quiz-emoji"/>
                    </div> : 
                null}
            </div>
        )
    }
    render() {
        return (
            <div>
                <div className="header-image">
                    <div className="ui menu header-menu">
                    <Link className="item menu-item" to="/quiz">
                            <img src="./uno/quiz.png" alt="uno"/>
                        </Link>
                        <div className="right menu">
                            <Link className="item menu-item" to="/">
                                <i className="home icon"></i>
                                Home
                            </Link>
                            <Link className="item menu-item" to="/rules">
                                <i className="gamepad icon"></i>
                                Game Rules
                            </Link>
                            <Link className="item menu-item" to="/cards">
                                <i className="question circle outline icon"></i>
                                Special cards
                            </Link>
                            <Link className="item menu-item" to="/score">
                                <i className="pencil alternate icon"></i>
                                Check Results
                            </Link>
                        </div>
                    </div>
                    <h1 className="header"><b>Quiz</b></h1>
                </div>
                <div className="subheader">Test your knowelage</div>
                <div className="main-header">Life is more fun if you play games</div>
                <div className="main-parents">
                    <div className="check-version-quiz">
                        <h2 className="check-header quiz-header">Uno Quiz</h2>
                        {!this.props.result ? this.showQuiz(): this.showResult()}
                    </div>
                </div>
                <div className="bottom-box"></div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        question1: state.question1,
        question2: state.question2,
        question3: state.question3,
        question4: state.question4,
        result: state.result
    }
}
export default connect(mapStateToProps, {setQuestion1, setQuestion2, setQuestion3, setQuestion4, setResult})(Quiz);
