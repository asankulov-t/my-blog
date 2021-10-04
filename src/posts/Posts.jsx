import React from 'react';
import './Posts.css'
import Post from "../post/Post";
const Posts = () => {
    return (
        <div className={'posts'}>
            <Post/>
            <Post/>
        </div>
    );
};

export default Posts;