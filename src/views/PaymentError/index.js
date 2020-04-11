import React from "react";
import { Link } from "react-dom";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

const PaymentError = () => {
  return (
    <>
      <div className='section mr4 '>
        <Container>
          <div className='owner'>
            <h4 className='title'>
              OMG! Something was wrong <br />
            </h4>
            <h6 className='description'>
              We think the system failed because you want to improve your
              conversation skills.
            </h6>
          </div>

          <Row>
            <Col className='ml-auto mr-auto text-center' md='6'>
              <br />
              <Button
                className='btn-round'
                color='info'
                outline
                // className='btn-just-icon  ml-1'

                tag={Link}
                href='/'
              >
                Try Again
              </Button>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    </>
  );
};

export default PaymentError;
