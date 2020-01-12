import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import News from './pages/news.js';
import Item from './pages/item.js';
import Header from './components/header';
import Footer from './components/footer';

ReactDOM.render(
    <Router>
        <div className="page-content">
            <Header />
            <Route exact path="/item" component={ Item } />
            <Route path="/item/:id" component={ Item } /> 
            <Route exact path="/:id" component={ News } />        
            <Route exact path="/" component={ News } />
            <Footer />
        </div>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
