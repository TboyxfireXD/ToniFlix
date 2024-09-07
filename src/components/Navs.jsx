import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navs.css";

function Navs() {
  return (
    <Navbar expand="lg" bg="transparent" className="custom-navbar">
      <Container className="justify-content-center">
        <Navbar.Brand as={Link} to="/" className="mx-auto">
          ToniFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/movies/upcoming">Upcoming</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/movies/popular">Popular</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/movies/top_rated">Top Rated</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/movies/now_playing">Now Playing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/movies/trending">Trending</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/movies/search">Search</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TV Shows" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/tvshows/first_air_date">First Air Date</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tvshows/on_the_air">On The Air</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tvshows/popular">Popular</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tvshows/top_rated">Top Rated</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tvshows/trending">Trending</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tvshows/search">Search</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
