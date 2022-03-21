// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "../containers/Home";
import Details from "../containers/Details";
import Checkout from "../containers/Checkout";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail/:id" component={Details} />
      <Route exact path="/checkout/:id" component={Checkout} />
    </Switch>
  );
};

export default index;
