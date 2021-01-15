import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./ApplicationViews/ApplicationViews";
import NavBar from "./NavBar/NavBar";
import UserProfileProvider from "./providers/UserProfileProvider";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ApplicationViews />
      <UserProfileProvider />
    </div >
  );
}

export default withRouter(App);
