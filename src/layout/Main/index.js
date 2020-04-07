import React from "react";
import PropTypes from "prop-types";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = props => {
  const { children } = props;

  return (
    <div>
      <main>
        {<Navbar />}
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
