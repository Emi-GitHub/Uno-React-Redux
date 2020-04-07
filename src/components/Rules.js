import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { setOfficial, setPenalties, setTwoPlayerGame, setHouse } from '../actions';
import './styles/Rules.css';

class Rules extends Component {
    setOfficial = () => {
        this.props.setOfficial(true);
        this.props.setPenalties(false);
        this.props.setTwoPlayerGame(false);
        this.props.setHouse(false);
    }
    setPenalties = () => {
        this.props.setOfficial(false);
        this.props.setPenalties(true);
        this.props.setTwoPlayerGame(false);
        this.props.setHouse(false);
    }
    setTwoPlayerGame = () => {
        this.props.setOfficial(false);
        this.props.setPenalties(false);
        this.props.setTwoPlayerGame(true);
        this.props.setHouse(false);
    }
    setHouse = () => {
        this.props.setOfficial(false);
        this.props.setPenalties(false);
        this.props.setTwoPlayerGame(false);
        this.props.setHouse(true);
    }
    Rules = () => {
        return (
            <div className="rules-section">
                <div className="ui relaxed horizontal list">
                    <div className="item" onClick={this.setOfficial}>
                        <img className="ui avatar image rules-select" src="./uno/question.png" alt="rules"/>
                        <div className="content">
                            <a className="header rules-meni" href="#official">Official Rules</a>
                        </div>
                    </div>
                    <div className="item" onClick={this.setPenalties}>
                        <img className="ui avatar image rules-select" src="./uno/question.png" alt="rules"/>
                        <div className="content">
                            <a className="header rules-meni" href="#penalties">Penalties</a>
                        </div>
                    </div>
                    <div className="item" onClick={this.setTwoPlayerGame}>
                        <img className="ui avatar image rules-select" src="./uno/question.png" alt="rules"/>
                        <div className="content">
                            <a className="header rules-meni" href="#twoPlayer">Two-player Game</a>
                        </div>
                    </div>
                    <div className="item" onClick={this.setHouse}>
                        <img className="ui avatar image rules-select" src="./uno/question.png" alt="rules"/>
                        <div className="content">
                            <a className="header rules-meni" href="#house">House Rules</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    Offical = () => {
        return (
            <div className="check-version">
                <h2 className="check-header">Ofical Uno Rules</h2>
                <div className="check-text">
                    To start a hand, seven cards are dealt to each player, and the top card of the remaining deck is flipped over 
                    and set aside to begin the discard pile. The player to the dealer's left plays first unless the first card 
                    on the discard pile is an action or Wild card. On a player's turn, they must do one of the following:
                    <ListGroup variant="flush" className="rules-long-list">
                        <ListGroup.Item>-> play one card matching the discard in color, number, or symbol</ListGroup.Item>
                        <ListGroup.Item>-> play a Wild card, or a playable Wild Draw Four card</ListGroup.Item>
                        <ListGroup.Item>-> draw the top card from the deck, then play it if possible</ListGroup.Item>
                    </ListGroup><br/>
                    Cards are played by laying them face-up on top of the discard pile. Play proceeds clockwise around the table.
                    <ListGroup variant="flush" className="rules-long-list">
                        <ListGroup.Item>-> A player who draws from the deck must either play or keep that card and may play no other card from their hand on that turn.</ListGroup.Item>
                        <ListGroup.Item>-> A player may play a Wild card at any time, even if that player has other playable cards.</ListGroup.Item>
                        <ListGroup.Item>-> A player may play a Wild Draw Four card only if that player has no cards matching the current color. The player may have cards of a different color matching the current number or symbol or a Wild card and still play the Wild Draw Four card. A player who plays a Wild Draw Four may be challenged by the next player in sequence to prove that their hand meets this condition.</ListGroup.Item>
                        <ListGroup.Item>-> If the entire deck is used during play, the top discard is set aside and the rest of the pile is shuffled to create a new deck. Play then proceeds normally.</ListGroup.Item>
                        <ListGroup.Item>-> It is illegal to trade cards of any sort with another player.</ListGroup.Item>
                    </ListGroup><br/>
                    A player who plays their next-to-last-card must call "Uno" as a warning to the other players.The first player to get rid of their 
                    last card  wins the hand and scores points for the cards held by the other players. <br/>
                    Number cards count their face value, all action cards count 20, and Wild and Wild Draw Four cards count 50. 
                    If a Draw Two or Wild Draw Four card is played to go out, the next player in the sequence must draw the appropriate 
                    number of cards before the score is tallied. The first player to score 500 points wins the game.
                </div>
            </div>
        )
    }
    Penalties = () => {
        return (
            <div className="check-version">
                <h2 className="check-header">Penalties Uno Rules</h2>
                <div className="check-text">
                    <ListGroup variant="flush" className="rules-list">
                        <ListGroup.Item>
                            -> If a player does not call "Uno" after laying down their next-to-last card and is caught before the next player 
                            in sequence takes a turn (i.e., plays a card from their hand, draws from the deck, or touches the discard pile), 
                            they must draw two cards as a penalty. If the player is not caught in time (subject to interpretation) or remembers 
                            to call "Uno" before being caught, they suffer no penalty.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            -> If a player plays a Wild Draw Four card, the following player can challenge its use. 
                            The player who used the Wild Draw Four must privately show their hand to the challenging player, in order to 
                            demonstrate that they had no matching colored cards. If the challenge is correct, then the challenged player 
                            draws four cards instead. If the challenge is wrong, then the challenger must draw six cards; the four cards they 
                            were already required to draw plus two more cards.
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        )
    }
    TwoPlayerGame = () => {
        return (
            <div className="check-version">
                <h2 className="check-header">Two-player game</h2>
                <div className="check-text">
                    In a two-player game, the Reverse card acts like a Skip card; when played, the other player misses a turn.
                </div>
            </div>
        )
    }
    HouseRules = () => {
        return (
            <div className="check-version">
                <h2 className="check-header">House Uno Rules</h2>
                <h4 className="check-subheader">Progressive Uno:</h4>
                <div className="check-text-rules">
                    -> If a draw card is played, and the following player has the same card, they can play that card and "stack" the penalty, 
                    which adds to the current penalty and passes it to the following player. (Although a +4 cannot be stacked on a +2, or vice versa.)
                </div>
                <br/>
                <h4 className="check-subheader">Seven-O:</h4>
                <div className="check-text-rules">
                    -> When a certain card is played, the player is able to trade hands with another player or with all players. For example, 
                    the person who played the 7 card is able to switch all of their cards with another player; the player who played the 0 
                    card is able to make every player exchange all their cards to the next player.
                </div>
                <br/>
                <h4 className="check-subheader">Jump-In:</h4>
                <div className="check-text-rules">
                    -> If a player has exactly the same card (both number and color) as the top card of the discard pile, 
                    they may play it immediately, even if it is not their turn. The game then continues as if that player had just taken their turn.
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
                    <h1 className="header"><b>Game Rules</b></h1>
                </div>
                <div className="subheader">Please, click on game for which you want to see rules!</div>
                <div className="main-header">Life is more fun if you play games</div>
                <div className="main-parents">{this.Rules()}</div>
                <div className="main-parents">
                    {this.props.official ? this.Offical() : null}
                    {this.props.penalties ? this.Penalties() : null}
                    {this.props.twoPlayerGame ? this.TwoPlayerGame() : null}
                    {this.props.house ? this.HouseRules() : null}
                </div>
                <div className="bottom-box">
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        official: state.official,
        penalties: state.penalties,
        twoPlayerGame: state.twoPlayerGame,
        house: state.house
    }
}
export default connect(mapStateToProps, {setOfficial, setPenalties, setTwoPlayerGame, setHouse})(Rules);
