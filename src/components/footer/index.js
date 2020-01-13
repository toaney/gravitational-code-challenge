import React from 'react';

const Footer = () => {
    return (
        <footer>
            {/* footer-links are purely cosmetic and do not work */}
            <div className="footer-link-container">
                <span className="footer-link">Guidelines</span><span className="article-stats-item">|</span>
                <span className="footer-link">FAQ</span><span className="article-stats-item">|</span>
                <span className="footer-link">Support</span><span className="article-stats-item">|</span>
                <span className="footer-link">API</span><span className="article-stats-item">|</span>
                <span className="footer-link">Security</span><span className="article-stats-item">|</span>
                <span className="footer-link">Lists</span><span className="article-stats-item">|</span>
                <span className="footer-link">Bookmarklet</span><span className="article-stats-item">|</span>
                <span className="footer-link">Legal</span><span className="article-stats-item">|</span>
                <span className="footer-link">Apply to YC</span>
                <span className="footer-link">Contact</span>
            </div>
            {/* footer-search is purely cosmetic and does not work */}
            <div className="footer-search-container">
                <label className="footer-search-label" htmlFor="footer-search">Search: </label>
                <input id="footer-search"></input>
            </div>
        </footer>
    )
}

export default Footer;