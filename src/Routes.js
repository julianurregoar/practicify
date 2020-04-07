import React from "react";

import { Switch, Redirect } from "react-router-dom";

import RouteWithLayout from "./router/RouteWithLayout";
import { Main, LayoutLanding } from "./layout";

// Views
import { LandingPage, Contact } from "./views";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        exact
        path='/'
        layout={LayoutLanding}
        component={LandingPage}
      />
      <RouteWithLayout
        exact
        path='/contact'
        layout={Main}
        component={Contact}
      />
      <Redirect path='/' />
    </Switch>
  );
};

export default Routes;
