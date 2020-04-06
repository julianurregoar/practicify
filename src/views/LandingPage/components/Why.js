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
import { Button, Container, Row, Col } from "reactstrap";

// core components

function Why() {
  return (
    <>
      <div className='section section-nucleo-icons text-center'>
        <Container>
          <Row>
            <Col lg='6' md='12'>
              <h2 className='title'>Why Practicify?</h2>
              <br />
              <p className='description'>
                We believe that the results come according to the time you
                dedicate to do it.{" "}
                <strong>
                  Therefore, you'll practice a foreign lenguages 100% of the
                  time you use Practicify!
                </strong>
              </p>
              <br />
              <Button className='btn-round' color='danger' href='#how'>
                How Works?
              </Button>
              {/* <Button
                className='btn-round ml-1'
                color='danger'
                href='https://nucleoapp.com/?ref=1712'
                outline
                target='_blank'
              >
                View All Icons
              </Button> */}
            </Col>
            <Col lg='6' md='12'>
              <div className='icons-container'>
                <i className='nc-icon nc-time-alarm' />
                <i className='nc-icon nc-world-2' />
                <i className='nc-icon nc-camera-compact' />
                <i className='nc-icon nc-watch-time' />
                <i className='nc-icon nc-key-25' />
                <i className='nc-icon nc-single-02' />
                <i className='nc-icon nc-user-run' />
                <i className='nc-icon nc-layout-11' />
                <i className='nc-icon nc-badge' />
                <i className='nc-icon nc-bulb-63' />
                <i className='nc-icon nc-favourite-28' />
                <i className='nc-icon nc-planet' />
                <i className='nc-icon nc-tie-bow' />
                <i className='nc-icon nc-zoom-split' />
                <i className='nc-icon nc-cloud-download-93' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default Why;
