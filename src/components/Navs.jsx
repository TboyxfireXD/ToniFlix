import { useContext, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navs.css';
import { Context } from '../App';

function Navs() {
  const {handleNavClick} = useContext(Context)

  return (
    <Navbar expand="lg" bg="transparent" className="custom-navbar">
      <Container className="justify-content-center">
        <Navbar.Brand href="/" className="mx-auto">ToniFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/tvshows">TV Shows</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
