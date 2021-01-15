import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import PostManager from "../../modules/PostManager";
import PostSearch from "./PostSearch";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        PostManager.getAll()

            .then(data => setPosts(data));
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    <PostSearch onSearch={setPosts} />
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostList;