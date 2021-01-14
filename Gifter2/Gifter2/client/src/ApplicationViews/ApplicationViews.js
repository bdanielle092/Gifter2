import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

const ApplicationViews = props => {
    return (
        <Switch>

            <Route exact path="/" render={(props) => {
                return <PostList {...props} />
            }} />
            <Route exact path="/post/add" render={(props) => {
                return <PostForm {...props} />
            }} />


        </Switch>
    );
};

export default withRouter(ApplicationViews);