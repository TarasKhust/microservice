import React from 'react';

const CommentList = ({comments}) => {


    return (
        <div>

            {comments.map((comment) => {
                let content;
                if (comment.status = 'approved') {
                    content = comment.content;
                }

                if (comment.status = 'pending') {
                    content = "This comment is awaiting moderation"
                }

                if (comment.status = 'rejected') {
                    content = "This comment has been rejected"
                }

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