import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import Link from "../Routing/Link";

const ReactNavbar = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  const getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        console.log({ latitude, longitude });
      },
      (err) => console.error('Geolocation error:', err)
    );
  };

  return (
    <Navbar bg="light" variant="light" expand="xl" className="py-3">
      <Container className="d-flex justify-content-between align-items-center">
        <div>
          <Navbar.Brand>
            <Link className="text-dark text-decoration-none" href="/">
              EmpowerWomen
            </Link>
          </Navbar.Brand>
        </div>
        <Nav className="mx-auto">
          <Link href="/" className="nav-link text-dark">
            Home
          </Link>
          <Link href="/selfdefence" className="nav-link text-dark">
            Defense
          </Link>
          <Link href="/womenintech" className="nav-link text-dark">
            Tech
          </Link>
          <Link href="/ngo" className="nav-link text-dark">
            NGO
          </Link>
          <Link href="/womensafety" className="nav-link text-dark">
            Safety
          </Link>
          <Link href="/womenactivists" className="nav-link text-dark">
            Activists
          </Link>
        </Nav>
        <Nav>
          <Link href="/login" className="nav-link text-dark">
            Login
          </Link>
          <div
            onClick={getLocation}
            className="nav-link bg-danger text-white px-3 ms-2"
            role="button"
          >
            Alert
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default ReactNavbar;
