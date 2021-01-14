import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostDetails from "../components/PostDetails";

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


        </Switch>
    );
};

export default withRouter(ApplicationViews);