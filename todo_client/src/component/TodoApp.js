import React, { Component } from "react";
import LoginComponent from "./Login";
import TodoComponent from "./Todo";
import ErrorComponent from "./Error";
import WelcomeComponent from "./Welcome";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import LogoutComponent from "./Logout";
import AuthenticatedRoute from "../authentication/AuthenticatedRoute";

class TodoApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <AuthenticatedRoute path="/todo" component={TodoComponent} />
                        <AuthenticatedRoute path="/welcome" component={WelcomeComponent} />
                        <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

export default TodoApp;