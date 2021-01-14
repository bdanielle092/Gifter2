import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import PostList from "../components/Post/PostList";
import PostForm from "../components/Post/PostForm";
import PostDetails from "../components/Post/PostDetails";
import UserPost from "../components/Post/UserPost";

const ApplicationViews = props => {
    return (
        <Switch>

            <Route exact path="/" render={(props) => {
                return <PostList {...props} />
            }} />
            <Route exact path="/post/add" render={(props) => {
                return <PostForm {...props} />
            }} />
            <Route exact path="/post/:id" render={(props) => {
                return <PostDetails {...props} />
            }} />
            <Route exact path="/users/:id" render={(props) => {
                return <UserPost {...props} />
            }} />


        </Switch>
    );
};

export default withRouter(ApplicationViews);