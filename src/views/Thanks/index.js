import React from "react";
import { Link } from "react-dom";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

const Thanks = () => {
  return (
    <>
      <div className='section mr4 '>
        <Container>
          <div className='owner'>
            <h4 className='title'>
              Thank you very much! <br />
            </h4>
            <h6 className='description'>Welcome to the Practicify's family.</h6>
          </div>

          <Row>
            <Col className='ml-auto mr-auto text-center' md='6'>
              <p>Start to practice and improve your conversation skills!</p>
              <p>
                <strong>
                  You can contact your practico to start according their
                  agreement.
                </strong>
              </p>
              <br />
              <Button
                className='btn-round'
                color='info'
                outline
                // className='btn-just-icon  ml-1'

                tag={Link}
                href='/'
              >
                Go to main page
              </Button>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    </>
  );
};

export default Thanks;
