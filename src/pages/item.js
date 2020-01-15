import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Comment from '../components/comment';
import AddComment from '../components/addComment';
import getTimestamp from '../components/getTimestamp';
import NotFound from '../components/notFound';
import Pipe from '../components/pipe';

const Item = () => {
    const [ article, setArticle ] = useState({});
    const [ comments, setComments ] = useState([]);
    const [ displayError, setDisplayError ] = useState(false)
    
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
            setDisplayError(true)
        });
    };
    useEffect(() => {
        const pageNumber = Number(id)
        if(isNaN(pageNumber)){
            setDisplayError(true)
        } else {
            getArticle();
        }
    }, []);





    return (
        displayError || !article || !article.title?
            <NotFound />
        :
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
                    <span className="item-stats-item item-link">{getTimestamp(article.time)}</span><Pipe />
                    <span className="item-stats-item item-link">hide</span><Pipe />
                    <span className="item-stats-item item-link">past</span><Pipe />
                    <span className="item-stats-item item-link">web</span><Pipe />
                    <span className="item-stats-item item-link">favorite</span><Pipe />
                    <span className="article-stats-item article-link">{article.kids? article.kids.length : 0} comments</span>
                </div>

                {/* AddComment component is purely cosmetic and won't add new comments */}
                <AddComment />

                {comments? 
                    <div className="comment-container">
                        {comments.map( (commentId)=> (
                            <div key={commentId}>
                                <Comment commentId={commentId}/>
                            </div>
                        ))}
                    </div>
                :
                    ""
                }
            </main>
    )
}

export default Item;