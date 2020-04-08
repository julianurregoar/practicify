import React, { Fragment } from "react";
import { Link } from "react-dom";
import pic_julian from "../../../assets/img/faces/Yo.jpeg";
import pic_andres from "../../../assets/img/faces/andres.JPG";
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

const obj = [
  {
    name: "Julian Urrego",
    native_country: "Colombia",
    phone_number: "14376884507",
    flag: "assets/img/Col_Flag.png",
    img: pic_julian,
    description: `I have worked in marketing for 5 years, also I am a
    full-stack web developer. I hope to have a great experience
    with you having an interesting conversation. Let me know if
    you have speak about some special.`,
    conversation: "Spanish",
    second_lenguages: "English",
    topics: [
      {
        topic: "Marketing",
        price: 20
      },
      {
        topic: "Entrepernurhip",
        price: 20
      },
      {
        topic: "Job Interview",
        price: 30
      }
    ]
  },
  {
    name: "Andres Pérez",
    native_country: "Colombia",
    phone_number: "16474002662",
    flag: "assets/img/Col_Flag.png",
    img: pic_andres,
    description: `I’m an easygoing guy who work in the fitness industry for about a year. Helping people to achieve their fitness goals is my passion, as well as, changing lives day by day. I am looking forward to help you to develop new languages skills and bring you into the next level.`,
    conversation: "Spanish",
    second_lenguages: "English and Portuguese",
    topics: [
      {
        topic: "Fitness",
        price: 20
      },

      {
        topic: "Futbol",
        price: 20
      },
      {
        topic: "Life in a new country",
        price: 20
      }
    ]
  }
];
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
      <div className='section  text-center' id='practicos'>
        <Container>
          <h2 className='title'>Practicos</h2>
          <Row>
            {obj.map(pract => (
              <Col md='6'>
                <Card className='card-profile card-plain'>
                  <div className='card-avatar' id='practicos'>
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
                        href={`https://wa.me/${pract.phone_number}?text=I'm%20interested%20in%20your%20spanish%20conversation%20about%20`}
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
                        <h5>Speak us about</h5>
                        {pract.topics.map(topic => (
                          <ListGroupItem className='justify-content-between'>
                            <Row>
                              <Col sm='3'>{topic.topic} </Col>
                              <Col sm='3'>USD${topic.price}</Col>
                              <Col sm='5'>
                                <Button
                                  className='btn-round '
                                  color='success'
                                  outline
                                  tag={Link}
                                  href={`https://wa.me/14376884507?text=Hello! ${pract.name}I'm%20interested%20in%20your%20${pract.conversation}%20conversation`}
                                  size='sm'
                                  target='_blank'
                                  type='button'
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
                      to='https://www.linkedin.com/in/julian-urrego/?locale=en_US'
                      onClick={e => e.preventDefault()}
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
}

export default Practicos;
