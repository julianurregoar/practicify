import React from "react";
import { Link } from "react-dom";
import { payments } from "../../../utils/payments";
import { users } from "../../../utils/users";

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

const Practicos = () => {
  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <div className='section  text-center' id='practicos'>
        <Container>
          <h2 className='title'>Practicos</h2>
          <Row>
            {users.map(pract => (
              <Col md='6'>
                <Card className='card-profile card-plain'>
                  <div
                    className='card-avatar'
                    id='practicos'
                    key={pract.topics}
                  >
                    <a href='#julian' onClick={e => e.preventDefault()}>
                      <img
                        alt='...'
                        className='img-rounded img-responsive'
                        src={pract.img}
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
                        <CardTitle tag='h4'>{pract.name}</CardTitle>
                        <h6 className='card-category'>
                          From {pract.native_country}
                        </h6>
                        <h6>{pract.conversation} Conversation</h6>
                        <h6 className='card-category'>
                          Second Languages: {pract.second_lenguages}
                        </h6>
                      </div>
                    </a>
                    <p className='card-description text-center'>
                      {pract.description}
                    </p>
                    <span className='mr-3 mr4'>
                      <Button
                        className='btn-round '
                        color='primary'
                        outline
                        tag={Link}
                        href={`https://wa.me/${pract.phone_number}?text=Hello!%20${pract.name},%20I'm%20interested%20in%20your%20spanish%20conversation.%20`}
                        size='sm'
                        target='_blank'
                        type='button'
                      >
                        Contact
                      </Button>
                    </span>
                  </CardBody>
                  <div>
                    <Col md='12'>
                      <ListGroup>
                        <h5>Talk us about</h5>
                        {pract.topics.map(topic => (
                          <ListGroupItem className='justify-content-between'>
                            <Row key={topic.sku}>
                              <Col sm='3'>{topic.topic} </Col>
                              <Col sm='3'>CAD$ {topic.price}</Col>
                              <Col sm='5'>
                                <Button
                                  className='btn-round '
                                  color='success'
                                  outline
                                  size='sm'
                                  type='button'
                                  onClick={() =>
                                    payments(topic.sku, pract.name, topic.price)
                                  }
                                >
                                  buy experience
                                </Button>
                              </Col>
                            </Row>
                          </ListGroupItem>
                        ))}
                      </ListGroup>
                    </Col>
                  </div>
                  <CardFooter className='text-center line'>
                    <Button
                      className='btn-just-icon  ml-1'
                      color='link'
                      tag={Link}
                      target='_blank'
                      href={pract.linkedIn}
                    >
                      <i className='fa fa-linkedin' />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Practicos;
