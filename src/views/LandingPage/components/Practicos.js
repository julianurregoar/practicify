import React from "react";
import { Link } from "react-dom";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from "reactstrap";



function Practicos() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
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
                    full-stack web developer. I hope to have a great experience
                    with you having an interesting conversation. Let me know if
                    you have speak about some special.
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
    </>
  );
}

export default Practicos;
