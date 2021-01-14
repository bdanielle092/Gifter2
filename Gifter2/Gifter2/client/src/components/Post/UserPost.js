import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useParams } from "react-router-dom";
import Post from "./Post";


const UserPost = () => {
    const [users, setUsers] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/post/getByUser/${id}`)
            .then(res => res.json())
            .then(users => setUsers(users));
    }, []);

    if (!users) {
        return null;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    {users.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default UserPost;