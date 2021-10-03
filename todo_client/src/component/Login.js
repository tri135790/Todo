import React, { Component } from "react";
import AuthenticationService from "../authentication/AuthenticationService";


class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isLoginFailed: false,
            isLoginSuccess: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleLoginClicked=this.handleLoginClicked.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name] :event.target.value
        })
    }

    handleLoginClicked() {
        if (this.state.username === 'tri135790' && this.state.password === 'tri123_NK') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome`)
        } else {
            this.setState({isLoginFailed:true})
            this.setState({isLoginSuccess:false})
        }
    }

    render() {
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.isLoginFailed && <div className="alert alert-warning"> Invalid </div>}
                    {this.state.isLoginSuccess && <div> Successfully </div>}
                    User: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.handleLoginClicked}>Login</button>
                </div>
            </div>
        )
    }
}


export default LoginComponent;