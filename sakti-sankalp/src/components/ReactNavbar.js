import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import Link from "../Routing/Link";

const ReactNavbar = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("authToken");
      const storedUsername = localStorage.getItem("username");

      if (token) {
        setIsLoggedIn(true);
        setUsername(storedUsername || "User");
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    window.location.reload(); // Reload to reflect the changes
  };

  const getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
  
        const email = "ritesh2004vr@gmail.com";
        const subject = encodeURIComponent("Location Alert");
        const body = encodeURIComponent(`Latitude: ${latitude}, Longitude: ${longitude}`);
        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  
        // Open the mail client with pre-filled details
        window.location.href = mailtoLink;
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
              SAKTI SANKALP
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
          <Link href="/womensafety" className="nav-link text-dark">
            Safety
          </Link>
          <Link href="/womenactivists" className="nav-link text-dark">
            Activists
          </Link>
        </Nav>
        <Nav>
          {isLoggedIn ? (
            <>
              <span className="nav-link text-dark">Hey {username}!!!</span>
              <div
                onClick={handleLogout}
                className="nav-link bg-danger text-white px-3 ms-2"
                role="button"
              >
                LOGOUT
              </div>
            </>
          ) : (
            <Link href="/login" className="nav-link text-dark">
              Login
            </Link>
          )}
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
