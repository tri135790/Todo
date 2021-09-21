import React, { Component } from "react";
import LoginComponent from "./Login";
import TodoComponent from "./Todo";
import ErrorComponent from "./Error";
import WelcomeComponent from "./Welcome";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";


class TodoApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/todo" component={TodoComponent} />
                        <Route path="/welcome" component={WelcomeComponent} />
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

export default TodoApp;