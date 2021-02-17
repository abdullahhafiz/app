import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return <header id="header">
        <div className="container">
            <nav id="nav-menu-container">
                <ul className="nav-menu">
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </nav>
        </div>
    </header>
}