import React, { useContext } from "react";
import Cards from "./Cards";
import "./Movies.css";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../App";
import { Outlet, Link } from "react-router-dom";

const Movies = () => {
  return (
    <div>
      <div className="ctrl">
        <nav>
          <ul>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/movies"
            >
              <li
                style={{ backgroundColor: activeIndex === 0 ? "black" : "" }}
                onClick={() => handleNavClick(0, "movie/upcoming")}
              >
                Upcoming
              </li>
            </Link>

            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/movies"
            >
              <li
                style={{ backgroundColor: activeIndex === 1 ? "black" : "" }}
                onClick={() => handleNavClick(1, "movie/popular")}
              >
                Popular
              </li>
            </Link>

            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/movies"
            >
              <li
                style={{ backgroundColor: activeIndex === 2 ? "black" : "" }}
                onClick={() => handleNavClick(2, "movie/top_rated")}
              >
                Top Rated
              </li>
            </Link>

            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/movies"
            >
              <li
                style={{ backgroundColor: activeIndex === 3 ? "black" : "" }}
                onClick={() => handleNavClick(3, "movie/now_playing")}
              >
                Now Playing
              </li>
            </Link>

            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/movies"
            >
              <li
                style={{ backgroundColor: activeIndex === 4 ? "black" : "" }}
                onClick={() => handleNavClick(4, "trending/movie/day")}
              >
                Trending
              </li>
            </Link>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/movies/search"
            >
              <li
                style={{ backgroundColor: activeIndex === 5 ? "black" : "" }}
                onClick={() => handleNavClick(5, "")}
              >
                Search
              </li>
            </Link>
          </ul>
        </nav>
      </div>

      <Outlet />
      <Container>
        <Row>
          {movies.map((movie) => (
            <Col
              md={4}
              className="mb-4 d-flex justify-content-center"
              key={movie.id}
            >
              <Cards {...movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
