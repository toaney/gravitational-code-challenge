import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    document.getElementById('root')
);
