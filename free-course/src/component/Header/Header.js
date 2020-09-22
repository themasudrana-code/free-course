import React from 'react';
import logo from '../../../src/component/extra-file/dantist2.png'
import './Header.css'
const Header = () => {
    return (
        <div className="menuBar">
            <img src={logo} alt="logo"/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/contact">Contact</a>
                <a href="/home">Home</a>
            </nav>
        </div>
    );
};

export default Header;