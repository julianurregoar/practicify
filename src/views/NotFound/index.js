import React from "react";
import { Link } from "react-dom";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

const NotFound = () => {
  return (
    <>
      <div className='section mr4 '>
        <Container>
          <div className='owner'>
            <h4 className='title'>
              Page not found <br />
            </h4>
            <h6 className='description'>Practicify</h6>
          </div>

          <Row>
            <Col className='ml-auto mr-auto text-center' md='6'>
              <p>
                We believe that the results come according to the time you
                dedicate to do it.{" "}
                <strong>
                  Therefore, you'll practice a foreign lenguages 100% of the
                  time you use Practicify!
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
                Back to Homepage
              </Button>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    </>
  );
};

export default NotFound;
