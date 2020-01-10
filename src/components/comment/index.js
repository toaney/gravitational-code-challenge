import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import getTimestamp from '../getTimestamp';

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
        <div style={{"marginLeft": "25px", "marginTop": "10px"}}>
            {/* <div>{currentComment.text}</div> */}

            <div>
                <span>{currentComment.by} </span>
                <span>{getTimestamp(currentComment.time)}</span>
            </div>
            <div>
                {currentComment.text}
            </div>
            {nestedComments}
        </div>
    )

}

export default Comment;