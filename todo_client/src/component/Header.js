import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import AuthenticationService from "../authentication/AuthenticationService";

class HeaderComponent extends Component {
    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="https://tranthanhtri.com/" className="navbar-brand">
                            Thanh Tri TRAN
                        </a>
                    </div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todo">Todo</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn &&<li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
           
        )
    }
}

export default withRouter(HeaderComponent)