import React from 'react';
import { Nav, Container, Form, FormControl } from 'react-bootstrap';

const Footer = () => (
  <footer className="mt-auto py-3 border-top border-orange">
    <Container>
      <div className="d-flex justify-content-center align-items-center">
        <Nav.Link href="#" className="text-muted">Guidelines</Nav.Link>
        <span className="text-muted mx-2">|</span>
        <Nav.Link href="#" className="text-muted">FAQ</Nav.Link>
        <span className="text-muted mx-2">|</span>
        <Nav.Link href="#" className="text-muted">Lists</Nav.Link>
        <span className="text-muted mx-2">|</span>
        <Nav.Link href="#" className="text-muted">API</Nav.Link>
        <span className="text-muted mx-2">|</span>
        <Nav.Link href="#" className="text-muted">Security</Nav.Link>
        <span className="text-muted mx-2">|</span>
        <Nav.Link href="#" className="text-muted">Legal</Nav.Link>
        <span className="text-muted mx-2">|</span>
        <Nav.Link href="#" className="text-muted">Apply to YC</Nav.Link>
        <span className="text-muted mx-2">|</span>
        <Nav.Link href="#" className="text-muted">Contact</Nav.Link>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
        </Form>
      </div>
    </Container>
  </footer>
);

export default Footer;
