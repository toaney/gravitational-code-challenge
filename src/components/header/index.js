import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div className="nav-container">
                <img className="header-logo" src={require("../../assets/images/hacker_news_logo.gif")} alt="hacker news logo" />
                <nav>
                    <Link to="/" alt="home"><span className="header-sitename">Hacker News</span></Link>
                    <span className="header-nav-list">
                        <span className="header-nav-link">new</span><span>|</span>
                        <span className="header-nav-link">past</span><span>|</span>
                        <span className="header-nav-link">comments</span><span>|</span>
                        <span className="header-nav-link">ask</span><span>|</span>
                        <span className="header-nav-link">show</span><span>|</span>
                        <span className="header-nav-link">jobs</span><span>|</span>
                        <span className="header-nav-link">submit</span>
                    </span>
                </nav>
            </div>
            <aside className="header-login-container">
                <span className="header-login-link">login</span>
            </aside>
        </header>
    )
}

export default Header;