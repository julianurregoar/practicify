import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function How() {
  return (
    <>
      <div className='text-center' id='how'>
        <div className='section section-gray'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' md='8'>
                <h2 className='title'>How it works?</h2>
                <h5 className='description'>it's easy and practical.</h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md='3'>
                <div className='info mr1 '>
                  <div className='icon icon-info'>
                    <i className='nc-icon nc-circle-10' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Choose a Practico</h4>

                    <p className='description'>
                      Practico is a person that is going to transfer your native
                      lenguages with you.
                    </p>
                    {/* <Button className='btn-link' color='info' href='#julian'>
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md='3'>
                <div className='info'>
                  <div className='icon icon-info'>
                    <i className='nc-icon nc-favourite-28' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Choose a topic</h4>
                    <p className='description'>
                      You can choose what type of topic you want to improve your
                      knowledges.
                    </p>
                    {/* <Button className='btn-link' color='info' href='#julian'>
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md='3'>
                <div className='info'>
                  <div className='icon icon-info'>
                    <i className='nc-icon nc-album-2' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Contact</h4>
                    <p className='description'>
                      you agree on the day and time with her/him.
                    </p>
                    {/* <Button className='btn-link' color='info' href='#julian'>
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md='3'>
                <div className='info'>
                  <div className='icon icon-info'>
                    <i className='nc-icon nc-album-2' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Pay</h4>
                    <p className='description'>
                      Pay easy and fast and take your exprience throug of{" "}
                      <a
                        href='https://zoom.us/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Zoom
                      </a>
                    </p>
                    {/* <Button className='btn-link' color='info' href='#julian'>
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
            </Row>
            <br />
            <Button className='btn-link' color='info' href='#julian'>
              Choose a practico
            </Button>
          </Container>
        </div>
      </div>
    </>
  );
}

export default How;
