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
                <NavLink to="/testtodoapp" activeClassName="active">ToDoApp</NavLink>
                <NavLink to="/example" activeClassName="active">Example</NavLink>
                <NavLink to="/user" activeClassName="active">Users</NavLink>
                <NavLink to="/testredux" activeClassName="active">Test Redux</NavLink>
                <NavLink to="/demo2" activeClassName="active">Demo App 2</NavLink>
            </div>
        )
    }
}

export default Nav;