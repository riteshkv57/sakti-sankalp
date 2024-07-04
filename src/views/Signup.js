import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Toast } from "react-bootstrap";
import Link from "../Routing/Link";

const Signup = ({ setSignup }) => {
  const [email, setEmail] = useState("");
  const [helperEmail1, setHelperEmail1] = useState("");
  const [helperEmail2, setHelperEmail2] = useState("");
  const [helperEmail3, setHelperEmail3] = useState("");
  const [next, setNext] = useState(false);
  const onFormSubmit = (event) => {
    event.preventDefault();
    setEmail(event.target[0].value);
    setHelperEmail1(event.target[2].value);
    setHelperEmail2(event.target[3].value);
    setHelperEmail3(event.target[4].value);
    console.log(email, helperEmail1, helperEmail2, helperEmail3);
    setNext(true);
  };
  return (
    <>
      <Container>
        <h3 className="my-5 text-center">Signup to Continue</h3>
        <Row className="g-5 mb-5">
          <Col></Col>
          <Col lg={4}>
            <Form onSubmit={onFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Helper Email 1</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Helper email 1"
                  onChange={(e) => setHelperEmail1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Helper Email 2</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Helper email 2"
                  onChange={(e) => setHelperEmail2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Helper Email 3</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Helper email 3"
                  onChange={(e) => setHelperEmail3(e.target.value)}
                />
              </Form.Group>

              <Button
                className="text-center"
                variant="primary"
                type="submit"
                onClick={() => setNext(true)}
              >
                <Link
                  href={next ? `/` : `signup`}
                  className="text-white text-decoration-none"
                >
                  Sign up
                </Link>
              </Button>
            </Form>
            <p>
              Already have an account ? Login{" "}
              <Link className="text-decoration-none" href={`/login`}>
                here
              </Link>
            </p>
            <Toast className="my-3" show={next}>
              <Toast.Body>Please fill all the fields</Toast.Body>
            </Toast>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
