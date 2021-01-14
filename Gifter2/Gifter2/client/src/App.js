import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./ApplicationViews/ApplicationViews";
import NavBar from "./NavBar/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ApplicationViews />
    </div>
  );
}

export default withRouter(App);
