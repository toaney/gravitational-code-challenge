import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import getTimestamp from '../getTimestamp';
import Pipe from '../pipe';

const Article = ({item, index}) => {
    const [ article, setArticle ] = useState({});
    const [ comments, setComments ] = useState([]);
    const [ displayArticle, setDisplayArticle ] = useState(false); //state to hide article until content loads
    
    // API to get article 
    const getArticle = (input) => {
        axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${input}.json`)
        .then(res => {
            setArticle(res.data)
            if (!res.data.kids){
                return
            }
            setComments(res.data.kids)
            setDisplayArticle(true)
        })
        .catch((err) => {
            console.error(err)
        });
    };

    useEffect(() => {
        getArticle(item);
    }, [item]);


    return (
        <article className="article-preview">
            {displayArticle?
                <React.Fragment>
                    <div className="article-heading">
                        <span className="article-index">{index}.</span>
                        <span className="article-upvote-arrow">&#9650;</span>
                        <span>
                            <a href={article.url} className="article-title">{article.title}</a>
                            <a href={article.url} className="article-url article-link">({article.url})</a>
                        </span>
                    </div>
                    <div className="article-stats">
                        <span className="article-stats-item">{article.score} points</span>
                        <span className="article-stats-item article-link">by {article.by}</span>
                        <Link to={`/item/${item}`}><span className="article-stats-item article-link">{getTimestamp(article.time)}</span></Link><Pipe pipeClass={"stats-pipe"}/>
                        <span className="article-stats-item article-link">hide</span><Pipe pipeClass={"stats-pipe"}/>
                        <Link to={`/item/${item}`}><span className="article-stats-item article-link">{comments? comments.length : 0} comments</span></Link>
                    </div>
                </React.Fragment>
            :
                ""
            }
        </article>
    )
}

export default Article;