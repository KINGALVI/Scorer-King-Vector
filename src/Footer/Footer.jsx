// 🔹 Importing React for component-based rendering
import React from 'react';

// 🔹 Importing Bootstrap components for layout and styling
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

// 🔹 Importing the logo for the footer section
import BottomLogo from '../../public/Logo-&-OtherPicture/Bottom-King-Vector.png';

/**
 * Footer Component:
 * 
 * - Displays footer content, including About Us, Quick Links, and a Subscription section.
 * - Uses Bootstrap grid system (`Container`, `Row`, `Col`) for responsive layout.
 * - Provides an email subscription field.
 * - Includes a footer logo and copyright information.
 */

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>

        {/* 🔹 Footer sections organized into columns */}
        <Row>

          {/* 🔹 About Us Section */}
          <Col md={4}>
            <h4>About Us</h4>
            <p>We are a passionate team dedicated to providing the best services to our customers.</p>
          </Col>

          {/* 🔹 Quick Links Section */}
          <Col md={4}>
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="#" className="text-light">Services</a></li>
              <li><a href="#" className="text-light">About</a></li>
              <li><a href="#" className="text-light">Contact</a></li>
            </ul>
          </Col>

          {/* 🔹 Subscription Section */}
          <Col md={4}>
            <h4>Subscribe</h4>
            <p>Subscribe to our newsletter for the latest updates.</p>

            {/* 🔹 Email Subscription Form */}
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2"
              />
              <Button variant="warning">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        {/* 🔹 Footer Logo and Copyright Section */}
        <Row className="mt-4 text-center">
          <Col>
            <img src={BottomLogo} alt="Football Logo" width="100" />
            <p className="mt-2">©2025 Your Company. All Rights Reserved.</p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
};

export default Footer;