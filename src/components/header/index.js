import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            
            <Link to="/" ><h1 className="header-logo">Hacker News</h1></Link>
        </header>
    )
}

export default Header;