import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import LandingPage from "./components/landingPage";
import Resume from "./components/resume";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" exact component={LandingPage} />

      <Route path="/resume" component={Resume} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
