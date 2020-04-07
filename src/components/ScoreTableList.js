import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser, updateGamerValue, setGameMode, setNumberOfPlayer } from '../actions';

class ScoreTableList extends Component {
    onEditClick = i => {
        this.props.setGameMode(i);
    }
    saveEditMode = (gamer, i, name, points, win) => {
        this.props.updateGamerValue(this.props.gamers, i, name, points, win);
        this.props.setGameMode(false);
    }
    showEdit = (el, i) => {
        return i % this.props.numberOfPlayer-2 === 0 ? 
        <tr key={i} className="mark-table">
            <td>
                <img 
                    src="./score/save-icon.png" 
                    alt="save-icon" 
                    className="table-icon edit-icon" 
                    onClick={()=>this.saveEditMode(el, i, this.refs.name.value, this.refs.points.value, this.refs.win.value)}
                />
                <img 
                    src="./score/exit-icon.png" 
                    alt="exit-icon" 
                    className="table-icon"  
                    onClick={()=>this.props.setGameMode(false)}
                /> 
            </td>
            <td>
                <div className="ui transparent input icon-input">
                    <input type="text" defaultValue={el.name} ref="name"/>
                </div>
            </td>
            <td>
                <div className="ui transparent input icon-input-points">
                    <input type="text" defaultValue={el.points} ref="points"/>
                </div>
            </td>
            <td>
                <div className="ui transparent input icon-input-points">
                    <input type="text" defaultValue={el.win} ref="win"/>
                </div>
            </td>
        </tr> :
        <tr key={i}>
            <td>
                <img 
                    src="./score/save-icon.png" 
                    alt="save-icon" 
                    className="table-icon edit-icon" 
                    onClick={()=>this.saveEditMode(el, i, this.refs.name.value, this.refs.points.value, this.refs.win.value)}
                />
                <img 
                    src="./score/exit-icon.png" 
                    alt="exit-icon" 
                    className="table-icon"  
                    onClick={()=>this.props.setGameMode(false)}
                /> 
            </td>
            <td>
                <div className="ui transparent input icon-input">
                    <input type="text" defaultValue={el.name} ref="name"/>
                </div>
            </td>
            <td>
                <div className="ui transparent input icon-input-points">
                    <input type="text" defaultValue={el.time} ref="points"/>
                </div>
            </td>
            <td>
                <div className="ui transparent input icon-input-points">
                    <input type="text" defaultValue={el.win} ref="win"/>
                </div>
            </td>
        </tr>
    }
    renderDaily = (el,i) => {
        return i === this.props.gameMode ? this.showEdit(el, i) :
            i % this.props.numberOfPlayer-2 === 0 ? 
            <tr key={i} className="mark-table">
                <td >
                    <img 
                        src="./score/edit-icon.png" 
                        alt="edit-icon" 
                        className="table-icon edit-icon" 
                        onClick={()=>this.onEditClick(i)}
                    />
                    <img 
                        src="./score/user-icon.png" 
                        alt="edit-icon" 
                        className="table-icon" 
                        onClick={()=>this.props.deleteUser(this.props.gamers, i)}
                    /> 
                </td>
                <td>{el.name}</td>
                <td>{el.points}</td>
                <td>{el.win}</td>
            </tr> : 
            <tr key={i}>
                <td >
                    <img 
                        src="./score/edit-icon.png" 
                        alt="edit-icon" 
                        className="table-icon edit-icon" 
                        onClick={()=>this.onEditClick(i)}
                    />
                    <img 
                        src="./score/user-icon.png" 
                        alt="edit-icon" 
                        className="table-icon" 
                        onClick={()=>this.props.deleteUser(this.props.gamers, i)}
                    /> 
                </td>
                <td>{el.name}</td>
                <td>{el.points}</td>
                <td>{el.win}</td>
            </tr>
    }
    render() {
        const filterGamers = this.props.gamers.filter(el => {
            return el.name.indexOf(this.props.gameSearch) !== -1;
        })
        return filterGamers.map ((el, i) => {
            return this.renderDaily(el, i);
        })
    }
}

const mapStateToProps = state => ({
    gamers: state.gamers,
    gameSearch: state.gameSearch,
    gameMode: state.gameMode,
    numberOfPlayer: state.numberOfPlayer
});
export default connect(mapStateToProps, {deleteUser, updateGamerValue, setGameMode, setNumberOfPlayer})(ScoreTableList);
