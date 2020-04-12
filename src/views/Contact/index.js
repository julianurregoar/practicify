import React, { Fragment } from "react";
import { useFormik } from "formik";

import * as Yup from "yup";
// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

function Contact() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const send = (name, message) => {
    const url = `https://wa.me/${process.env.REACT_APP_PHONE}?text=Hello,%20I%20am%20${name}%20${message}`;
    window.open(url, "_blank");
  };

  const replace = message => {
    const wtspText = message.replace(/ /g, "%20");
    return wtspText;
  };
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched
  } = useFormik({
    initialValues: {
      // email: "",
      name: "",
      message: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      message: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required")
      // email: Yup.string()
      //   .email("Invalid email address")
      //   .required("Required")
    }),
    onSubmit: values => {
      const m = replace(values.message);
      send(values.name, m);
    }
  });

  return (
    <Fragment>
      <div className='section section-gray landing-section' id='contact'>
        <form onSubmit={handleSubmit}>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' md='8'>
                <h2 className='text-center'>Keep in touch?</h2>
                <Form className='contact-form'>
                  <Row>
                    <Col md='6'>
                      <label>Name</label>
                      <InputGroup
                        className={
                          touched.name && errors.name ? "error-field" : null
                        }
                      >
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='nc-icon nc-single-02' />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder='Name'
                          id='name'
                          name='name'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          invalid={touched.name && errors.name ? true : false}
                        />
                      </InputGroup>
                      {touched.name && errors.name ? (
                        <div className='error-message'>{errors.name}</div>
                      ) : null}
                    </Col>
                    {/* <Col md='6'>
                      <label>Email</label>
                      <InputGroup
                        className={
                          touched.email && errors.email ? "error-field" : null
                        }
                      >
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='nc-icon nc-email-85' />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder='Email'
                          id='email'
                          name='email'
                          type='email'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </InputGroup>
                      {touched.email && errors.email ? (
                        <div className='error-message'>{errors.email}</div>
                      ) : null}
                    </Col> */}
                  </Row>
                  <label>Message</label>
                  <Input
                    className={
                      touched.message && errors.message ? "error-field" : null
                    }
                    placeholder='Tell us your thoughts and feelings...'
                    type='textarea'
                    rows='4'
                    id='message'
                    name='message'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    invalid={touched.message && errors.message ? true : false}
                  />
                  {touched.message && errors.message ? (
                    <div className='error-message'>{errors.message}</div>
                  ) : null}
                  <Row>
                    <Col className='ml-auto mr-auto' md='8'>
                      <Button
                        className='btn-fill wtsp'
                        color='danger'
                        size='lg'
                        type='submit'
                      >
                        Send WhatsApp Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </form>
      </div>
    </Fragment>
  );
}

export default Contact;
