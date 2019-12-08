import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="Nav">
                <a data-test="Logo" className="Logo" href="/">UNIVERSAL VOTER</a>
            </div>
        </header >
    );
}

export default Header;
