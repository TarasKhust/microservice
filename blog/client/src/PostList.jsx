import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from "./CommentList";

const PostList = () => {

    const [posts, setPosts] = useState({})

    const fetchPosts = async () => {
        const response = await axios.get('http://posts.com/posts')

        setPosts(response.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])


    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {Object.values(posts).map((post) => {
                return (
                    <div key={post.id}>
                        <h3 key={post.id}>{post.title}</h3>
                        <CommentList postId={post.id}/>
                        <CommentCreate postId={post.id}/>
                    </div>
                )
            })}
        </div>
    );
};

export default PostList;