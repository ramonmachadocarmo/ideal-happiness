import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Product from "../product/Product";

export default (props) => (
  <Switch>
    <Route path="/" component={Product} />
    <Redirect from="*" to="/" />
  </Switch>
);
