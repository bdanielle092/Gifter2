import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./ApplicationViews/ApplicationViews";
import UserProfileProvider from "./providers/UserProfileProvider";
import Header from "./NavBar/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProfileProvider>
          <Header />
          <ApplicationViews />
        </UserProfileProvider>
      </Router>
    </div >
  );
}

export default withRouter(App);
