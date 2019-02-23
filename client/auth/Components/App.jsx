import React from "react";

import { Switch, Route, Link } from "react-router-dom";

import SingIn from "./SingIn";
import SingUp from "./SingUp";

import "../src/css/auth.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SingIn} />
        <Route exact path="/singup" component={SingUp} />
      </Switch>
    </>
  );
};

export default App;
