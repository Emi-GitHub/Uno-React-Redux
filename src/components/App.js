import React, { Component } from 'react';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import history from '../history';
import Home from './Home';
import Rules from './Rules';
import Cards from './Cards';
import Score from './Score';
import Quiz from './Quiz';
import './styles/Styles.css';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/rules" component={Rules} />
                        <Route path="/cards" component={Cards} />
                        <Route path="/score" component={Score} />
                        <Route path="/quiz" component={Quiz} />
                    </Switch>
                </BrowserRouter>
            </Router>
        )
    }
}

export default App;
