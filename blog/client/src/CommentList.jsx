import React from 'react';

const CommentList = ({comments}) => {


    return (
        <div>

            {comments.map((comment) => {
                return (
                    <ul key={comment.id}>
                        <li key={comment.id}>{comment.content}</li>
                    </ul>
                )
            })}

        </div>
    );
};

export default CommentList;