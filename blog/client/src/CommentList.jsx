import React, {useState, useEffect} from 'react';
import axios from 'axios'

const CommentList = ({postId}) => {

    const [comments, setComments] = useState([])

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:4001/posts/${postId}/comments`)

        setComments(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

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