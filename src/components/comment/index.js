import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getTimestamp from '../getTimestamp';
import decodeText from '../decodeText'
import './comment.scss';

const Comment = ( { commentId } ) => {
    const [ commentList, setCommentList ] = useState([]);
    const [ currentComment, setCurrentComment ] = useState({});

    const getComments = ( input ) => {
        axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${ input }.json`)
        .then(res => {
            setCurrentComment(res.data)
            setCommentList(res.data.kids)
        })
        .catch((err) => {
            console.log(err)
        });
    };

    useEffect(() => {
        //run code
        getComments(commentId);
    }, []);

    const nestedComments = (commentList || []).map( comment => {
        return <Comment key={comment.id} commentId={comment} />
    })

    return (
        <div style={{"marginLeft": "45px", "marginTop": "10px"}}>
            {/* <div>{currentComment.text}</div> */}
            <div className="comment-meta-info">
                <span className="comment-upvote-arrow">&#9650;</span>
                <span className="comment-by">{currentComment.by} </span>
                <span className="comment-timestamp">{getTimestamp(currentComment.time)}</span>
            </div>
            <div className="comment-text" dangerouslySetInnerHTML={{ __html: currentComment.text }}/>
            {nestedComments}
        </div>
    )

}

export default Comment;