import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


function Navbar_eg() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        
          <Navbar.Brand href="#home">Test Vite</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/test1">Test 1</Nav.Link>
            <Nav.Link as={Link} to="/test2">Test 2</Nav.Link>
            <Nav.Link as={Link} to="/test3">Test 3</Nav.Link>
      
            
          </Nav>

        </Container>
      </Navbar>
      
     
    </>
  );
}

export default Navbar_eg;