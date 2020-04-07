import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScoreTable from './ScoreTable';
import './styles/Score.css';

class Score extends Component {
    render() {
        return (
            <div className="background-score">
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
                    <h1 className="header"><b>Score</b></h1>
                </div>
                <div className="subheader">UNO Score</div>
                <div className="main-header">Life is more fun if you play games</div>
                <ScoreTable />
                <div className="bottom-box"></div>
            </div>
        )
    }
}

export default Score;
