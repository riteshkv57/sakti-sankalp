import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Toast } from "react-bootstrap";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const user = { name, email, password };

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(`Success: ${data.message}`);
        window.location.href = "/login"
      } else {
        setResponseMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    }

    setShowToast(true);
  };

  return (
    <Container>
      <h3 className="my-5 text-center">Signup to Continue</h3>
      <Row className="g-5 mb-5">
        <Col></Col>
        <Col lg={4}>
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form>
          <Toast className="my-3" show={showToast} onClose={() => setShowToast(false)}>
            <Toast.Body>{responseMessage}</Toast.Body>
          </Toast>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Signup;
