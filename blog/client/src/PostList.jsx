import React, { useState, useEffect } from 'react';
import axios from 'axios'

const PostList = () => {

    const [posts, setPosts] = useState({})

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:4000/posts')

        setPosts(response.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])



    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {Object.values(posts).map((post) => {
                return (
                    <h1 key={post.id}>{post.title}</h1>
                )
            })}
        </div>
    );
};

export default PostList;