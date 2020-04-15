import React from "react";

import { Switch, Redirect } from "react-router-dom";

import RouteWithLayout from "./router/RouteWithLayout";
import { Main, LayoutLanding } from "./layout";

// Views
import {
  LandingPage,
  Contact,
  NotFound,
  Thanks,
  PaymentError,
  Terms
} from "./views";

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
      {/* <RouteWithLayout
        exact
        path='/register'
        layout={Main}
        component={Profile}
      /> */}
      <RouteWithLayout exact path='/terms' layout={Main} component={Terms} />
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    </Switch>
  );
};

export default Routes;
