import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import getTimestamp from '../getTimestamp';
import abridgeUrl from '../abridgeUrl';

const Article = ({item, index}) => {
    const [ article, setArticle ] = useState({});
    const [ comments, setComments ] = useState([]);
    
    const getArticle = () => {
        axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
        .then(res => {
            setArticle(res.data)
            setComments(res.data.kids)
        })
        .catch((err) => {
            console.log(err)
        });
    };

    useEffect(() => {
        getArticle();
    }, []);


    return (
        <article className="article-preview">
            <div className="article-heading">
                <span className="article-index">{index}.</span>
                <span className="article-upvote-arrow">&#9650;</span>
                <span>
                    <a href={article.url} className="article-title">{article.title}</a>
                    <a href={article.url} className="article-url article-link">({abridgeUrl(article.url)})</a>
                </span>

            </div>
            <div className="article-stats">
                <span className="article-stats-item">{article.score} points</span>
                <span className="article-stats-item article-link">by {article.by}</span>
                <Link to={`/item/${item}`}><span className="article-stats-item article-link">{getTimestamp(article.time)}</span></Link><span className="article-stats-item">|</span>
                <span className="article-stats-item article-link">hide</span><span className="article-stats-item">|</span>
                <Link to={`/item/${item}`}><span className="article-stats-item article-link">{comments? comments.length : 0} comments</span></Link>
            </div>
        </article>
    )
}

export default Article;