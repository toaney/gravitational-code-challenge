import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Comment from '../components/comment';
import AddComment from '../components/addComment';
import getTimestamp from '../components/getTimestamp';

const Item = () => {
    const [ article, setArticle ] = useState({});
    const [ comments, setComments ] = useState([]);
    
    // useParams is a custom hook from react-router that gives access to the url id (page number)
    let { id } = useParams();

    // API call to get article on initial page load
    const getArticle = () => {
        axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${ id }.json`)
        .then(res => {
            setArticle(res.data)
            setComments(res.data.kids)
        })
        .catch((err) => {
            console.log(err)
        });
    };

    useEffect(() => {
        const abortController = new AbortController();

        getArticle();

        return () => {
            abortController.abort();
        };
    }, []);


    return (
        <main className="item-content">
            <div className="item-heading">
                <span className="item-upvote-arrow">&#9650;</span>
                <span className="item-title-container">
                    <a href={article.url} className="item-title">{article.title}</a>
                    <a href={article.url} className="item-url">({article.url})</a>
                </span>
            </div>
            <div className="item-stats">
                <span className="item-stats-item">{article.score} points</span>
                <span className="item-stats-item item-link">by {article.by}</span>
                <span className="item-stats-item item-link">{getTimestamp(article.time)}</span><span className="article-stats-item">|</span>
                <span className="item-stats-item item-link">hide</span><span className="article-stats-item">|</span>
                <span className="item-stats-item item-link">past</span><span className="article-stats-item">|</span>
                <span className="item-stats-item item-link">web</span><span className="article-stats-item">|</span>
                <span className="item-stats-item item-link">favorite</span><span className="article-stats-item">|</span>
                <span className="article-stats-item article-link">{article.kids? article.kids.length : 0} comments</span>
            </div>

            {/* AddComment component is purely cosmetic and won't add new comments */}
            <AddComment />

            <div className="comment-container">
                {comments.map( (commentId)=> (
                    <div key={commentId}>
                        <Comment commentId={commentId}/>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Item;