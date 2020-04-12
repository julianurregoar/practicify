/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function Header() {
  let pageHeader = React.createRef();

  // React.useEffect(() => {
  //   if (window.innerWidth < 991) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3;
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)";
  //     };
  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }
  // });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/practicify/image/upload/v1586732275/Main/brain_nogbmk.png)"
        }}
        className='page-header'
        data-parallax={true}
        ref={pageHeader}
        id='header'
      >
        <div />
        <Container>
          <div className='motto text-center '>
            <img
              src={
                "https://res.cloudinary.com/practicify/image/upload/v1586732271/Main/logo_laknsx.png"
              }
              alt=''
              width='120'
              height='120'
              className='d-inline-block align-top mr0 p0 '
            />

            <h2 style={{ color: "black" }}>
              <strong>Foreign Languages Conversation</strong>{" "}
            </h2>
            <h3 style={{ color: "black" }}>
              Our goal is to get you from A to B in a fast and practice
              enviroment.
            </h3>

            <br />
            <Button
              href='#services'
              className='btn-round mr-1'
              color='neutral'
              outline
            >
              Services
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
