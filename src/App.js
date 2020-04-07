import React, { Fragment } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

//Routes
import Routes from "./Routes";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Fragment>
        <Routes />
      </Fragment>
    </Router>
  );
};

export default App;
