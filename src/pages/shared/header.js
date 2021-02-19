import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return <header id="header">
        <div className="container">
            <div id="logo" className="pull-left">
                <Link to="/" id="body" className="scrollto">
                    <span>
                        <div className="logo">
                            <img src="./assets/img/WebLogo.png" alt="logo" style={{ height: "75px" }} />
                        </div>
                    </span>
                </Link>
            </div>
            <nav id="nav-menu-container">
                <ul className="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Career">Career</Link></li>
                </ul>
            </nav>
        </div>
    </header>
}