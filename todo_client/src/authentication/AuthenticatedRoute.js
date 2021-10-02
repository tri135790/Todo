// only let user access to page ( for example todo page) if they are authenticated

import React,{ Component } from "react";
import { Redirect, Route } from "react-router";
import AuthenticationService from "./AuthenticationService";

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }
    }
}

export default AuthenticatedRoute