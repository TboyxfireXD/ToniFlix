import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import "./Movies.css";
import { Container, Row, Col } from "react-bootstrap";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
        params: {
          api_key: "5f13d4e3e7df06b5fb904015b934cc00",
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies: ", error);
    }
  };

  const handleNavClick = (index) => {
    fetchMovies()
    setActiveIndex(index)
  };

  useEffect(() => {
    handleNavClick(0); // Fetch upcoming movies by default
  }, []);

  return (
    <div>
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

export default Upcoming;
