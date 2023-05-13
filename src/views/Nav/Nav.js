import React from "react";
import './Nav.scss';
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" exact={true} activeClassName="active">Home</NavLink>
                <NavLink to="/todo" activeClassName="active">Todo</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/myapp" activeClassName="active">MyApp</NavLink>
                <NavLink to="/testapp" activeClassName="active">MyApp-Test</NavLink>
            </div>
        )
    }
}

export default Nav;