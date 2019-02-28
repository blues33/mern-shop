import React from "react";

import { Switch, Route } from "react-router-dom";

import SingIn from "./SingIn";
import SingUp from "./SingUp";

import "./auth.scss";

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
