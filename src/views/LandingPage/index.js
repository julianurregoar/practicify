import React, { Fragment } from "react";

// core components
import Header from "./components/Header";
import Why from "./components/Why";
import How from "./components/How";
import Practicos from "./components/Practicos";

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
      <Header />
      <div className='main text-center'>
        <Why />
        <How />
        <Practicos />
        {/* <Contact /> */}
      </div>
    </Fragment>
  );
}

export default LandingPage;
