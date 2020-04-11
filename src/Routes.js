import React from "react";

import { Switch, Redirect } from "react-router-dom";

import RouteWithLayout from "./router/RouteWithLayout";
import { Main, LayoutLanding } from "./layout";

// Views
import { LandingPage, Contact, NotFound, Thanks, PaymentError } from "./views";

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
      <RouteWithLayout
        exact
        path='/not-found'
        layout={Main}
        component={NotFound}
      />
      <RouteWithLayout exact path='/thanks' layout={Main} component={Thanks} />
      <RouteWithLayout
        exact
        path='/something-wrong'
        layout={Main}
        component={PaymentError}
      />
      <Redirect
        to={{
          pathname: "/not-found"
        }}
      />
    </Switch>
  );
};

export default Routes;
