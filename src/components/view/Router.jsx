import React from "react";
import { Route, Switch } from "react-router-dom";
import DetailPage from "./DetailPage/DetailPage";
import LandingPage from "./LandingPage/LandingPage";

export default function Router() {
  return (
    <Switch>
      <Route path="/jobs/:id" component={DetailPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
}
