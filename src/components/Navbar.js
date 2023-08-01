import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">Drag & Drop Website Builder</a>
            </div>
            <div className="navbar-menu">
                <a href="/preview">Preview</a>
                <a href="/export">Export</a>
            </div>
        </nav>
    );
};

export default Navbar;