import React, { Component } from 'react';
import './styles/Login.css';

class Login extends Component {
    render() {
        return (
            <div className="background-image login-position">
                <div className="login">
                    <h2 className="login-header">LOGIN</h2>
                    <form className="ui form" >
                        <div className="field">
                            <label className="label">Username</label>
                            <input type="text" name="first-name" placeholder="Username"/>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <input type="password" name="last-name" placeholder="Password"/>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                            <input type="checkbox" tabindex="0" />
                            <label className="label">I agree to the Terms and Conditions</label>
                            </div>
                        </div>
                        <button className="ui button" type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
