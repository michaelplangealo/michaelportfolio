import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Code from "./Components/Code.js";
import Write from "./Components/Write.js";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Code" component={Code} />
    <Route path="/Write" component={Write} />
  </Switch>
);
