import React from 'react';
// import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div className="nav-container">
                <img className="header-logo" src={require("../../assets/images/hacker_news_logo.gif")} alt="hacker news image" />
                <nav>
                    <Link to="/" alt="home"><span className="header-sitename">Hacker News</span></Link>
                    <span className="header-nav-list">
                        <a className="header-nav-link" href="#" alt="new">new</a><span>|</span>
                        <a className="header-nav-link" href="#" alt="past">past</a><span>|</span>
                        <a className="header-nav-link" href="#" alt="comments">comments</a><span>|</span>
                        <a className="header-nav-link" href="#" alt="ask">ask</a><span>|</span>
                        <a className="header-nav-link" href="#" alt="show">show</a><span>|</span>
                        <a className="header-nav-link" href="#" alt="jobs">jobs</a><span>|</span>
                        <a className="header-nav-link" href="#" alt="submit">submit</a>
                    </span>
                </nav>
            </div>
            <aside className="header-login-container">
                <a className="header-login-link" href="#" alt="login">login</a>
            </aside>
        </header>
    )
}

export default Header;