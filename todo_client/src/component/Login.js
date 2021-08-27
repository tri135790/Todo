import React, { Component } from "react";


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
            this.setState({isLoginFailed:false})
            this.setState({isLoginSuccess:true})
        } else {
            this.setState({isLoginFailed:true})
            this.setState({isLoginSuccess:false})
        }
    }

    render() {
        return(
            <div>
                {/* <ShowInvalidCredentials isLoginFailed={this.state.isLoginFailed}/> */}
                {/* <ShowSuccessCredentials isLoginSuccess={this.state.isLoginSuccess}/> */}
                {this.state.isLoginFailed && <div> Invalid </div>}
                {this.state.isLoginSuccess && <div> Successfully </div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <button onClick={this.handleLoginClicked}> Login</button>
            </div>
        )
    }
}

function ShowInvalidCredentials(props) {
    if(props.isLoginFailed) {
        return <div>
            Invalid Credentials
        </div>
    }
    return null;
}


function ShowSuccessCredentials(props) {
    if(props.isLoginSuccess) {
        return <div>
            Login Successfully!
        </div>
    }
    return null;
}

export default LoginComponent;