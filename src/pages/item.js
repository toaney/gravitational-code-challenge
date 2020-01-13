import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Comment from '../components/comment';
import AddComment from '../components/addComment';

const getTimestamp = (timestamp) => {
    const currentTime = Math.round((new Date()).getTime() / 1000);
    let elapsed = currentTime - timestamp;
    if (elapsed > 259200){
        return "over 3 days ago"
    } else if (elapsed > 172800) {
        return "2 days ago"
    } else if (elapsed > 86400) {
        return "1 day ago"
    } else if (elapsed > 82800) {
        return "23 hours ago"
    } else if (elapsed > 79200) {
        return "22 hours ago"
    } else if (elapsed > 75600) {
        return "21 hours ago"
    } else if (elapsed > 72000) {
        return "20 hours ago"
    } else if (elapsed > 68400) {
        return "19 hours ago"
    } else if (elapsed > 64800) {
        return "18 hours ago"
    } else if (elapsed > 61200) {
        return "17 hours ago"
    } else if (elapsed > 57600) {
        return "16 hours ago"
    } else if (elapsed > 54000) {
        return "15 hours ago"
    } else if (elapsed > 50400) {
        return "14 hours ago"
    } else if (elapsed > 46800) {
        return "13 hours ago"
    } else if (elapsed > 43200) {
        return "12 hours ago"
    } else if (elapsed > 39600) {
        return "11 hours ago"
    } else if (elapsed > 36000) {
        return "10 hours ago"
    } else if (elapsed > 32400) {
        return "9 hours ago"
    } else if (elapsed > 28800) {
        return "8 hours ago"
    } else if (elapsed > 25200) {
        return "7 hours ago"
    } else if (elapsed > 21600) {
        return "6 hours ago"
    } else if (elapsed > 18000) {
        return "5 hours ago"
    } else if (elapsed > 14400) {
        return "4 hours ago"
    } else if (elapsed > 10800) {
        return "3 hours ago"
    } else if (elapsed > 7200) {
        return "2 hours ago"
    } else if (elapsed > 3600) {
        return "1 hour ago"
    } else {
        return "less than 1 hours ago"
    }
}

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
        getArticle();
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

            {/* add comment textarea tag; this is purely cosmetic and won't add new comments */}
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