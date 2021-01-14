import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    console.log(post)
    return (
        <Card className="m-4">

            <p className="text-left px-2">
                <Link to={`/users/${post.userProfileId}`}>
                    <strong>Posted by: {post.userProfile.name}</strong>
                </Link>
            </p>
            <CardImg top src={post.imageUrl} alt={post.title} />
            <CardBody>
                <Link to={`/post/${post.id}`}>
                    <strong>{post.title}</strong>
                </Link>
                <p>{post.caption}</p>

            </CardBody>
        </Card>
    );
};

export default Post;