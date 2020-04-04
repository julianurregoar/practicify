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
import { Link } from "react-dom";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons";

const obj = {
  topic: "Marketing",
  price: 20
};

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className='main'>
        <div className='text-center' id='services'>
          <SectionNucleoIcons />

          <div className='section section-gray'>
            <Container>
              <Row>
                <Col className='ml-auto mr-auto' md='8'>
                  <h2 className='title'>How it works?</h2>
                  <h5 className='description'>it's easy and practical.</h5>
                  <br />
                  {/* <Button
                  className='btn-round'
                  color='info'
                  href='#practicos'
                  onClick={e => e.preventDefault()}
                >
                  See Details
                </Button> */}
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col md='3'>
                  <div className='info'>
                    <div className='icon icon-info'>
                      <i className='nc-icon nc-circle-10' />
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>Choose a Practico</h4>

                      <p className='description'>
                        Practico is a person that is going to transfer your
                        native lenguages with you.
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
                        You can choose what type of topic you want to improve
                        your knowledges.
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
        <div className='section  text-center'>
          <Container>
            <h2 className='title'>Practicos</h2>
            <Row>
              <Col md='12'>
                <Card className='card-profile card-plain'>
                  <div className='card-avatar' id='practicos'>
                    <a href='#julian' onClick={e => e.preventDefault()}>
                      <img
                        alt='...'
                        className='img-rounded img-responsive'
                        src={require("assets/img/faces/Yo.jpeg")}
                      />
                      <div className='img-details'>
                        <div className='author'>
                          <img
                            alt='...'
                            className='img-circle img-no-padding img-responsive'
                            src={require("assets/img/Col_Flag.png")}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <CardBody>
                    <a href='#julian' onClick={e => e.preventDefault()}>
                      <div className='author'>
                        <CardTitle tag='h4'>Julian Urrego</CardTitle>
                        <h6 className='card-category'>From Colombia</h6>
                        <h6>Spanish Conversation</h6>
                        <h6 className='card-category'>
                          Second Languages: English
                        </h6>
                      </div>
                    </a>
                    <p className='card-description text-center'>
                      I have worked in marketing for 5 years, also I am a
                      full-stack web developer. I hope to have a great
                      experience with you having an interesting conversation.
                      Let me know if you have speak about some special.
                    </p>
                  </CardBody>
                  <div>
                    <Col md='12'>
                      <ListGroup>
                        <h5>Speak us about</h5>
                        <ListGroupItem className='justify-content-between'>
                          <Row>
                            <Col sm='4'>Marketing </Col>
                            <Col sm='4'>USD$20 / per 40 minutes</Col>
                            <Col sm='4'>
                              <Button
                                className='btn-round mr-1'
                                color='success'
                                outline
                                tag={Link}
                                href={`https://wa.me/14376884507?text=I'm%20interested%20in%20your%20spanish%20conversation%20about%20marketing`}
                                size='sm'
                                target='_blank'
                                type='button'
                              >
                                buy experience
                              </Button>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem className='justify-content-between'>
                          <Row>
                            <Col sm='4'>Entrepernuship </Col>
                            <Col sm='4'>USD$20 / per 40 minutes</Col>
                            <Col sm='4'>
                              <Button
                                className='btn-round mr-1'
                                color='success'
                                outline
                                size='sm'
                                type='button'
                              >
                                buy experience
                              </Button>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem className='justify-content-between'>
                          <Row>
                            <Col sm='4'>Job interview </Col>
                            <Col sm='4'>USD$30 / per 40 minutes</Col>
                            <Col sm='4'>
                              <Button
                                className='btn-round mr-1'
                                color='success'
                                outline
                                size='sm'
                                type='button'
                              >
                                buy experience
                              </Button>
                            </Col>
                          </Row>
                        </ListGroupItem>
                      </ListGroup>
                    </Col>
                  </div>
                  <CardFooter className='text-center'>
                    <Button
                      className='btn-just-icon  ml-1'
                      color='link'
                      tag={Link}
                      href='https://www.linkedin.com/in/julian-urrego/?locale=en_US'
                      onClick={e => e.preventDefault()}
                    >
                      <i className='fa fa-linkedin' />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='section section-gray landing-section'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' md='8'>
                <h2 className='text-center'>Keep in touch?</h2>
                <Form className='contact-form'>
                  <Row>
                    <Col md='6'>
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='nc-icon nc-single-02' />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder='Name' type='text' />
                      </InputGroup>
                    </Col>
                    <Col md='6'>
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='nc-icon nc-email-85' />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder='Email' type='text' />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder='Tell us your thoughts and feelings...'
                    type='textarea'
                    rows='4'
                  />
                  <Row>
                    <Col className='ml-auto mr-auto' md='4'>
                      <Button className='btn-fill' color='danger' size='lg'>
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <DemoFooter />
    </>
  );
}

export default LandingPage;
