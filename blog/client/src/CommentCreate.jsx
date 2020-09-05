import React, { useState } from 'react';
import axios from 'axios'

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://posts.com/${postId}/comments`, {
            content
        })

        setContent('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="">New Comment</label>
                    <input value={content} onChange={event => setContent(event.target.value)} className="form-control" type="text"/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
            
        </div>
    );
};

export default CommentCreate;