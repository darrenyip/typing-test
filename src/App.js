import React from "react";
import "./App.css";

import { Route, Redirect, Switch } from "react-router-dom";

import Type from "./components/type";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import Home from "./components/home";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/type" component={Type} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
