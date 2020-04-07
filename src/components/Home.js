import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="background-home">
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
                <div className="parents-home">
                    <h1 className="header-home"><b>WELCOME TO UNO APPLICATION</b></h1>
                </div>
                <div className="subheader-home">Card Game</div>
            </div>
        )
    }
}

export default Home;
