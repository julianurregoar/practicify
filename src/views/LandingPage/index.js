import React, { Fragment } from "react";

// core components
import ExamplesNavbar from "../../components/Navbars/Navbar";
import Header from "./components/Header";
import DemoFooter from "../../components/Footers/DemoFooter";
import Why from "./components/Why";
import How from "./components/How";
import Practicos from "./components/Practicos";
import Contact from "./components/Contact";

// const obj = [
//   {
//     topic: "Marketing",
//     price: 20
//   }
// ];

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <Fragment>
      <ExamplesNavbar />
      <Header />
      <div className='main text-center'>
        <Why />
        <How />
        <Practicos />
        <Contact />
      </div>
      <DemoFooter />
    </Fragment>
  );
}

export default LandingPage;
