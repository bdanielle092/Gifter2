import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

const ApplicationViews = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <PostList />
            </Route>

            <Route path="/post/add">
                <PostForm />
            </Route>


        </Switch>
    );
};

export default withRouter(ApplicationViews);