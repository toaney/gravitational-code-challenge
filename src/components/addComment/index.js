import React from 'react';

const AddComment = () => {
    return (
        <section className="add-comment-container">
            <textarea className="add-comment-textarea" rows="7" cols="80"></textarea>
            <button className="add-comment-button" >Add Comment</button>
        </section>
    )
}

export default AddComment;