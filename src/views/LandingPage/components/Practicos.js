import React from "react";
import { Link } from "react-router-dom";
import { payments } from "../../../utils/payments";
import { calendly } from "../../../utils/calendly";
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
  ListGroupItem,
  CardImg,
  CardText,
  Badge
} from "reactstrap";
import useQueryString from "utils/useQueryString";

const Practicos = () => {
  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const [value, onSetValue] = useQueryString("topic");
  const [schedule, setSchedule] = useQueryString("_date");

  const book = topic => {
    onSetValue(topic);
    setSchedule(true);
  };
  return (
    <>
      <div className='section  text-center' id='practicos'>
        <Container>
          <h2 className='title' style={{}}>
            Practicos
          </h2>
          <Row>
            {users.map(pract => (
              <Col md='6'>
                <Card>
                  <div
                    className='card-avatar'
                    id='practicos'
                    key={pract.topics}
                  >
                    <CardImg top src={pract.img} alt='...' />
                    <div className='img-details'>
                      <div className='author'>
                        <img
                          alt='...'
                          className='img-circle img-no-padding img-responsive'
                          src={require("assets/img/Col_Flag.png")}
                        />
                      </div>
                    </div>
                  </div>

                  <CardBody>
                    <a href='#julian' onClick={e => e.preventDefault()}>
                      <div className='author'>
                        <CardTitle tag='h4'>{pract.name}</CardTitle>
                        <h6 className='card-category'>
                          <br />
                          From {pract.native_country}
                        </h6>
                        <h6>{pract.conversation} Conversation</h6>
                        <h6 className='card-category'>
                          Second Languages: {pract.second_lenguages}
                        </h6>
                      </div>
                    </a>
                    <br />
                    <div>
                      <CardText>{pract.description}</CardText>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        margin: "1rem -15px",
                        borderWwidth: ".2rem 0 0"
                      }}
                    >
                      <Col xs='12'>
                        {/* <ListGroupItem> */}
                        <h5>Talk us about</h5>

                        <Row>
                          {pract.topics.map(topic => (
                            <Badge
                              // onClick={() => book(topic.topic)}
                              style={{
                                margin: "2px",
                                position: "center",
                                backgroundColor: "#b0d8da",
                                color: "black"
                              }}
                            >
                              {topic.topic}
                            </Badge>
                          ))}
                        </Row>

                        {/* </ListGroup> */}
                      </Col>
                    </div>
                    <div>
                      <h4>
                        <strong>CAD $9.99</strong>{" "}
                      </h4>
                    </div>
                    <br />
                    <Row>
                      <Col sm='6'>
                        <span className='mr-3 mr4'>
                          <Button
                            color='info'
                            size='md'
                            target='_blank'
                            type='button'
                            onClick={() => calendly()}
                          >
                            shedule experience
                          </Button>
                        </span>
                      </Col>
                      <Col sm='6'>
                        <span className='mr-3 mr4'>
                          <Button
                            color='success'
                            onClick={() => payments("sku_H5kRp9urDHzPsx")}
                            size='md'
                            target='_blank'
                            type='button'
                          >
                            pay experience
                          </Button>
                        </span>
                      </Col>
                    </Row>
                  </CardBody>

                  <CardFooter className='text-center line'>
                    <h5>each experience lasts 40 minutes</h5>
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
