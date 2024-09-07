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
        <Navbar.Brand href="/" className="mx-auto">
          ToniFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/movies/upcoming"> Upcoming</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/movies/popular">
                Popular
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/movies/top_rated">
                Top Rated
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/movies/now_playing">
                Now Playing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/movies/trending">
                Trending
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/movies/search">Search</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TV Shows" id="basic-nav-dropdown">
              <NavDropdown.Item href="/tvshows/first_air_date">
                First Air Date
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tvshows/on_the_air">
                On The Air
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tvshows/popular">
                Popular
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tvshows/top_rated">
                top_rated
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tvshows/trending">
                Trending
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tvshows/search">Search</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
