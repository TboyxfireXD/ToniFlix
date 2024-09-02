import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../App";
import axios from "axios";
import Cards from "./Cards";
import "../TV/Movies.css";
import { Container, Row, Col } from "react-bootstrap";

const Now_Playing = () => {
  const [movies, setMovies] = useState([]);
  const { pag, setPag } = useContext(Context);
  const a = ">";
  const b = "<";

  const fetchMovies = async (no) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?include_adult=false&language=en-US&page=${no}`, // Corrected URL
        {
          params: {
            api_key: "5f13d4e3e7df06b5fb904015b934cc00",
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies: ", error);
    }
  };

  useEffect(() => {
    if (pag) {
      fetchMovies(pag); // Corrected to fetchMovies
    }
  }, [pag]);

  const handleNextPage = () => {
    setPag((prevPag) => {
      const newPage = prevPag + 1;
      fetchMovies(newPage); // Corrected to fetchMovies
      return newPage;
    });
  };

  const handlePreviousPage = () => {
    setPag((prevPag) => {
      const newPage = Math.max(prevPag - 1, 1);
      fetchMovies(newPage); // Corrected to fetchMovies
      return newPage;
    });
  };

  return (
    <div>
      <div className="pagination-controls">
        <button onClick={handlePreviousPage}>{b}</button>
        <p className="page-number">{pag}</p>
        <button onClick={handleNextPage}>{a}</button>
      </div>
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

export default Now_Playing;
