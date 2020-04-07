import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName, setPoints, setWin, refreshName, refreshPoints, refreshWin, setGameSearch, addGamer, setNewGamer, setFirstName, setNumberOfPlayer} from '../actions';
import ScoreTableList from './ScoreTableList';
import './styles/Score.css';

class ScoreTable extends Component {
    /*componentWillMount() {
        this.props.setNewGamer(JSON.parse(localStorage.getItem("somethingGamers")))
    }*/
    onFormSubmit = event => {
        event.preventDefault();
        this.props.addGamer(this.props.gamers, this.props.name, this.props.points, this.props.win);
        this.props.refreshName();
        this.props.refreshPoints();
        this.props.refreshWin();
    }
    render() {
        //localStorage.setItem('somethingGamers', JSON.stringify(this.props.gamers))
        var remember=this.props.gamers.length;
        this.props.setFirstName(this.props.gamers)
        return (
            <div>
                <div className="search-gamer">
                    <div className="ui icon input gamer-input">
                        <input 
                            type="text" 
                            placeholder="Pretraga..." 
                            onChange={event=>this.props.setGameSearch(event.target.value)}
                        />
                        <i className="circular search link icon"></i>
                    </div>
                </div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="search-gamer">
                        <div className="ui left icon input gamer-input">
                            <input 
                                type="text" 
                                placeholder="Add Name..."
                                value={this.props.name}
                                onChange={(event)=>this.props.setName(event.target.value)}
                                required
                            />
                            <i className="users icon"></i>
                        </div>
                        <div className="ui left icon input gamer-input value">
                            <input 
                                type="number" 
                                placeholder="Add points..."
                                value={this.props.points}
                                onChange={(event) =>this.props.setPoints(event.target.value)}
                                required
                            />
                            <i className="star icon"></i>
                        </div>
                        <div className="ui left icon input gamer-input value">
                            <input 
                                type="text" 
                                placeholder="You are winner?"
                                value={this.props.win}
                                onChange={(event) =>this.props.setWin(event.target.value.toUpperCase())}
                                required
                            />
                            <i className="gem icon"></i>
                        </div>
                        <button className="ui button add">Add</button>
                    </div>
                </form>
                <div className="score-parents">
                <div className="game-table score-child-one">
                    <table className="ui celled table">
                        <thead>
                            <tr className="table-name">
                                <th></th>
                                <th>Name</th>
                                <th>Points</th>
                                <th>Win</th>
                            </tr>
                        </thead>
                    <tbody>
                        <ScoreTableList />
                        </tbody> 
                    </table>
                    <div className="versions-header">Number of rounds: {this.props.gamers.length/this.props.numberOfPlayer}</div>
                </div>
                <div className="score-box score-child-two">
                <div className="versions-header"> the sum of points per player:</div>
                    <div>
                        {this.props.gamers.map((el, i) => {
                            if(i === 0){
                                var points1=0;
                                for(var j = 0; j < this.props.gamers.length; j++){
                                    if(this.props.gamers[j].name === el.name) points1= Number(points1) + Number(this.props.gamers[j].points);
                                }
                                return (
                                    <div className="poeple-icon">
                                        <img src="./score/people.png" alt="people" width="50px"/>
                                        <b>{el.name}:</b> {points1}
                                    </div>
                                )
                            }
                            else if(el.name === this.props.firstName){
                                remember=i; 
                                this.props.setNumberOfPlayer(remember);
                            }
                            if(i < remember){
                                var points2=0;
                                for(var z = 0; z < this.props.gamers.length; z++){
                                    if(this.props.gamers[z].name === el.name) points2=Number(points2) + Number(this.props.gamers[z].points);
                                }
                                return (
                                    <div className="poeple-icon">
                                        <img src="./score/people.png" alt="people" width="50px"/>
                                        <b>{el.name}:</b> {points2}
                                    </div>
                                )
                            }
                            return null;
                        }
                    )}
                </div>
            </div>
        </div>
    </div>
   )}
}

const mapStateToProps = state => ({
    gamers: state.gamers,
    name: state.name,
    points: state.points,
    win: state.win,
    firstName: state.firstName,
    numberOfPlayer: state.numberOfPlayer
});
export default connect(mapStateToProps, {setName, setPoints, setGameSearch, addGamer, refreshName, refreshPoints, refreshWin, setWin, setNewGamer, setFirstName, setNumberOfPlayer})(ScoreTable);

