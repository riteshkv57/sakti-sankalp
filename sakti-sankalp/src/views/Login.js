import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Toast } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const user = { email, password };

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token in localStorage
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("username", data.name);

        setResponseMessage(`Success: ${data.message}`);
        setTimeout(() => (window.location.href = "/"), 2000);
      } else {
        setResponseMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    }

    setShowToast(true);
  };

  // const handleLogout = () => {
  //   // Remove token from localStorage
  //   localStorage.removeItem("authToken");
  //   window.location.href = "/"; // Redirect to homepage or login page
  // };

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

              <Form.Group className="mb-3" controlId="formBasicPassword">
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
                Login
              </Button>
            </Form>
            <p className="text-center">
              Don't have an account? Create{" "}
              <a href="/signup" className="text-decoration-none">
                here
              </a>
            </p>
            <Toast className="my-3" show={showToast} onClose={() => setShowToast(false)}>
              <Toast.Body>{responseMessage}</Toast.Body>
            </Toast>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
