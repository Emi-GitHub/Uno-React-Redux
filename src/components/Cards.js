import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDrawTwo, setWildDrawFour, setWild, setSkip, setReverse } from '../actions';
import './styles/Cards.css';
import './styles/Rules.css';

class Cards extends Component {
    setDrawTwo = () => {
        this.props.setDrawTwo(true);
        this.props.setWildDrawFour(false);
        this.props.setWild(false);
        this.props.setSkip(false);
        this.props.setReverse(false);
    }
    setWildDrawFour = () => {
        this.props.setDrawTwo(false);
        this.props.setWildDrawFour(true);
        this.props.setWild(false);
        this.props.setSkip(false);
        this.props.setReverse(false);
    }
    setWild = () => {
        this.props.setDrawTwo(false);
        this.props.setWildDrawFour(false);
        this.props.setWild(true);
        this.props.setSkip(false);
        this.props.setReverse(false);
    }
    setSkip = () => {
        this.props.setDrawTwo(false);
        this.props.setWildDrawFour(false);
        this.props.setWild(false);
        this.props.setSkip(true);
        this.props.setReverse(false);
    }
    setReverse = () => {
        this.props.setDrawTwo(false);
        this.props.setWildDrawFour(false);
        this.props.setWild(false);
        this.props.setSkip(false);
        this.props.setReverse(true);
    }
    drawTwo = () => {
        return (
            <div className="special-card-box">
                <h2 className="check-header">Draw Two</h2>
                <div className="check-text">
                    When a person places this card, the next player will have to pick up two cards and forfeit his/her turn.
                    It can only be played on a card that matches by color, or on another Draw Two.
                    If turned up at the beginning of play, the first player draws two cards and gets skipped.
                </div>
            </div>
        )
    }
    reverse = () => {
        return (
            <div className="special-card-box">
                <h2 className="check-header">Reverse</h2>
                <div className="check-text" >
                    If going clockwise, switch to counterclockwise or vice versa. 
                    It can only be played on a card that matches by color, or on another Reverse card. 
                    If turned up at the beginning of play, the dealer goes first, and the player to the dealer’s right is next (normally it would be the player to the dealer’s left).
                </div>
            </div>
        )
    }
    skip = () => {
        return (
            <div className="special-card-box">
                <h2 className="check-header">Skip</h2>
                <div className="check-text">
                    When a player places this card, the next player has to skip their turn. 
                    It can only be played on a card that matches by color, or on another Skip card. 
                    If turned up at the beginning of play, the first player (to the dealer’s left) loses his/her turn. 
                    The next player to that player’s right starts the game instead.
                </div>
            </div>
        )
    }
    wild = () => {
        return (
            <div className="special-card-box">
                <h2 className="check-header">Wild</h2>
                <div className="check-text">
                    This card represents all four colors, and can be placed on any card. 
                    The player has to state which color it will represent for the next player. 
                    It can be played regardless of whether another card is available. 
                    If turned up at the beginning of play, the first player chooses what color to continue play.
                </div>
            </div>
        )
    }
    wildDrawFour = () => {
        return (
            <div className="special-card-box">
                <h2 className="check-header">Wild draw four</h2>
                <div className="check-text">
                    This acts just like the wild card except that the next player also has to draw 
                    four cards as well as forfeit his/her turn. With this card, you must have no other 
                    alternative cards to play that matches the color of the card previously played. 
                    If you play this card illegally, you may be challenged by the other player to show your hand to him/her. 
                    If guilty, you need to draw 4 cards. If not, the challenger needs to draw 6 cards instead. 
                    If turned up at the beginning of play, return this card to the Draw pile, shuffle, and turn up a new one.
                </div>
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
                    <h1 className="header"><b>Special cards</b></h1>
                </div>
                <div className="subheader">Click on card</div>
                <div className="main-header">Special Card Explanation</div>
                <div className="main-parents">
                    <div className="action-cards">
                        <img src="./card/action1.png" alt="action" className="action-card" onClick={this.setDrawTwo}/>
                        <img src="./card/action2.png" alt="action" className="action-card" onClick={this.setReverse}/>
                        <img src="./card/action3.png" alt="action" className="action-card" onClick={this.setSkip}/>
                        <img src="./card/action5.png" alt="action" width="183px" className="action-card" onClick={this.setWild}/>
                        <img src="./card/action4.png" alt="action" width="183px" className="action-card" onClick={this.setWildDrawFour}/>
                    </div>
                </div>
                <div className="main-parents">
                    {this.props.drawTwo ? this.drawTwo() : null}
                    {this.props.reverse ? this.reverse() : null}
                    {this.props.skip ? this.skip() : null}
                    {this.props.wild ? this.wild() : null}
                    {this.props.wildDrawFour ? this.wildDrawFour() : null}
                </div>
                <div className="bottom-box"></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        drawTwo: state.drawTwo,
        skip: state.skip,
        reverse: state.reverse,
        wild: state.wild,
        wildDrawFour: state.wildDrawFour
    }
}
export default connect(mapStateToProps, {setDrawTwo, setReverse, setSkip, setWild, setWildDrawFour})(Cards);
