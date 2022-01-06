import React, { Component } from 'react';

class Navigation extends Component{
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">MERN Stack</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <a className="nav-link" href='#'>Log in</a>
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;