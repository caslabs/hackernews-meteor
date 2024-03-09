import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = () => (
  <Navbar expand="lg" style={{ backgroundColor: '#ff6600', height: '30px' }}>
    <Container fluid>
      <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'center', color: 'black', fontWeight: 'bold' }}>
        <img
          src="/images/y18.svg"
          alt="Hacker News"
          style={{ height: '24px', marginRight: '10px' }}
        />
        Hacker News
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#" className="text-black">new</Nav.Link>
          <span className="text-black">|</span>
          <Nav.Link href="#" className="text-black">past</Nav.Link>
          <span className="text-black">|</span>
          <Nav.Link href="#" className="text-black">comments</Nav.Link>
          <span className="text-black">|</span>
          <Nav.Link href="#" className="text-black">ask</Nav.Link>
          <span className="text-black">|</span>
          <Nav.Link href="#" className="text-black">show</Nav.Link>
          <span className="text-black">|</span>
          <Nav.Link href="#" className="text-black">jobs</Nav.Link>
          <span className="text-black">|</span>
          <Nav.Link href="#" className="text-black">submit</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavbar;
