import React from "react";
import PropTypes from "prop-types";

import Footer from "../components/Footer";
import NavbarLanding from "../components/NavbarLandingPage";

const Main = props => {
  const { children } = props;

  return (
    <div>
      <main>
        {<NavbarLanding />}
        {children}
        <Footer />
      </main>
    </div>
  );
};
Main.propTypes = {
  children: PropTypes.node
};

export default Main;
