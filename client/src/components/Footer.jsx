import React from "react";
import { Container, Nav } from "react-bootstrap";

const Footer = () => {

  return (
    <footer className="footer" style={{ borderTop: "1px solid #333" }}>
      <Container fluid>
        <div className="quote-container text-center">
          <p style={{ fontStyle: "italic", margin: 0 }}>"Your Quote Here" -Author</p>
        </div>
          <div className="footer-content">
            <div className="footer-links">
              <Nav className="d-flex flex-row">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </div>
          <div className="footer-info text-center">
            <span className="faded-text">&copy; MinneGrowta @2023</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;