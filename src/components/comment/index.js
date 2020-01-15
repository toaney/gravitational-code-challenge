import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getTimestamp from '../getTimestamp';

const Comment = ( { commentId } ) => {
    const [ commentList, setCommentList ] = useState([]);
    const [ currentComment, setCurrentComment ] = useState({});
    const [ displayComment, setDisplayComment ] = useState( false )// state to hide comment until content loads

    // API to get Comment
    const getComments = ( input ) => {
        axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${ input }.json`)
        .then(res => {
            setCurrentComment(res.data)
            if (!res.data.kids){
                return
            }
            setCommentList(res.data.kids)
            setDisplayComment( true )
        })
        .catch((err) => {
            console.log(err)
        });
    };

    useEffect(() => {
        getComments(commentId);
    }, [commentId]);

    const nestedComments = (commentList || []).map( (comment, index) => {
        return <Comment key={index} commentId={comment} />
    })

    return (
        <div style={{"marginLeft": "45px", "marginTop": "10px"}}>
            {displayComment?
                <React.Fragment>
                    <div className="comment-meta-info">
                        <span className="comment-upvote-arrow">&#9650;</span>
                        <span className="comment-by" data-testid="commentBy">{currentComment.by || ""} </span>
                        <span className="comment-timestamp">{getTimestamp(currentComment.time)}</span>
                    </div>
                    <div className="comment-text" dangerouslySetInnerHTML={{ __html: currentComment.text }}/>
                </React.Fragment>
            :
                ""
            }
            {nestedComments}
        </div>
    )

}

export default Comment;