import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Toast } from "react-bootstrap";
import Link from "../Routing/Link";

const Login = () => {
  const [email, setEmail] = useState("");

  const [next, setNext] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setEmail(event.target[0].value);
    console.log(email);
    setNext(true);
  };
  return (
    <>
      <Container>
        <h3 className="my-5 text-center">Login to Continue</h3>
        <Row className="g-5 mb-5">
          <Col></Col>
          <Col lg={4}>
            <Form onSubmit={onFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required={true}
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={() => setNext(true)}
              >
                <Link
                  href={next ? `/` : `/login`}
                  className="text-white text-decoration-none"
                >
                  Login
                </Link>
              </Button>
            </Form>
            <p className="text-center">
              Don't have an account ? Create{" "}
              <Link className=" text-decoration-none" href="/signup">
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

export default Login;
