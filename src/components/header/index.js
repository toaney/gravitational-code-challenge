import React from 'react';
import { Link } from 'react-router-dom';
import Pipe from '../pipe';

const Header = () => {
    return(
        <header>
            <div className="nav-container">
                <img className="header-logo" src={require("../../assets/images/hacker_news_logo.gif")} alt="hacker news logo" />
                <nav>
                    <Link to="/" alt="home"><span className="header-sitename">Hacker News</span></Link>
                    {/* header-hav-list is purely cosmetic and links won't work */}
                    <span className="header-nav-list">
                        <span className="header-nav-link">new</span><Pipe pipeClass={"header-pipe"} />
                        <span className="header-nav-link">past</span><Pipe pipeClass={"header-pipe"} />
                        <span className="header-nav-link">comments</span><Pipe pipeClass={"header-pipe"} />
                        <span className="header-nav-link">ask</span><Pipe pipeClass={"header-pipe"} />
                        <span className="header-nav-link">show</span><Pipe pipeClass={"header-pipe"} />
                        <span className="header-nav-link">jobs</span><Pipe pipeClass={"header-pipe"} />
                        <span className="header-nav-link">submit</span>
                    </span>
                </nav>
            </div>
            <aside className="header-login-container">
                {/* header-login-link is purely cosmetic and won't work */}
                <span className="header-login-link">login</span>
            </aside>
        </header>
    )
}

export default Header;