import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BottomLogo from '../../public/Logo-&-OtherPicture/Bottom-King-Vector.png'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          {/* About Us Section */}
          <Col md={4}>
            <h4>About Us</h4>
            <p>We are a passionate team dedicated to providing the best services to our customers.</p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4}>
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="#" className="text-light">Services</a></li>
              <li><a href="#" className="text-light">About</a></li>
              <li><a href="#" className="text-light">Contact</a></li>
            </ul>
          </Col>

          {/* Subscribe Section */}
          <Col md={4}>
            <h4>Subscribe</h4>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <Form className="d-flex">
              <Form.Control type="email" placeholder="Enter your email" className="me-2" />
              <Button variant="warning">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        {/* Football Logo & Copyright */}
        <Row className="mt-4 text-center">
          <Col>
            <img src={BottomLogo} alt="Football Logo" width="100" />
            <p className="mt-2">@2024 Your Company All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;