import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import News from './pages/news.js';
import Item from './pages/item.js';
import Header from './components/header';
import Footer from './components/footer';
import NotFound from './components/notFound';

ReactDOM.render(
    <Router>
        <div className="page-content">
            <Header />
            <Switch>
                <Route exact path="/item" component={ Item } />
                <Route path="/item/:id" component={ Item } /> 
                <Route exact path="/:id" component={ News } />        
                <Route exact path="/" component={ News } />
                <Route component={NotFound}/>
            </Switch>
            <Footer />
        </div>
    </Router>,
    document.getElementById('root')
);
