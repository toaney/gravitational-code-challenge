import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Comment = ( { commentId } ) => {
    const [ commentList, setCommentList ] = useState([])

    const getComments = ( input ) => {
        axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${ input }.json`)
        .then(res => {
            console.log(res.data)
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
            <div>{commentId}</div>
            {nestedComments}
        </div>
    )


    // return(
    //     <React.Fragment>
    //         {!commentList?
    //             return(
    //                 <h5>{commentId}</h5>
    //             )
    //         :
    //             return(
    //                 commentList.map((item) => (
    //                     <Comment />
    //                 ))
    //             )
    //         }

    //     </React.Fragment>
    // )
}

export default Comment;