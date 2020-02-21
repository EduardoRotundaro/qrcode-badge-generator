import React from 'react';

import logo from '../../images/logo.png';

export default () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <a className="navbar-brand" href="/">
                    <img className="navbar--logo" src={logo} alt=""/>
                </a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Features</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}