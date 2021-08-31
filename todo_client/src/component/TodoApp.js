import React, { Component } from "react";
import LoginComponent from "./Login";
import TodoComponent from "./Todo";
import ErrorComponent from "./Error";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class TodoApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/todo" component={TodoComponent} />
                        <Route component={ErrorComponent}/>
                    </Switch>
                    
                </Router>
            </div>
        )
    }
}

export default TodoApp;