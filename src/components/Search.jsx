import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../App";
import SearchCards from "./SearchCards";
import axios from "axios";
import "./Search.css";

const Search = () => {
  const [look, setLook] = useState("");
  const [result, setResult] = useState([]);
  const { pag, setPag } = useContext(Context);
  const a = ">";
  const b = "<";

  const fetch = async (search, no) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${no}`,
        {
          params: {
            api_key: "5f13d4e3e7df06b5fb904015b934cc00",
          },
        }
      );
      setResult(response.data.results);
    } catch (error) {
      console.error("Error fetching movies: ", error);
    }
  };

  useEffect(() => {
    if (look) {
      fetch(look, pag);
    }
  }, [pag]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setLook(query);
    setPag(1); // Reset to the first page when a new search is performed
    fetch(query, 1);
  };

  const handleNextPage = () => {
    setPag((prevPag) => {
      const newPage = prevPag + 1;
      fetch(look, newPage); // Fetch results for the new page
      return newPage;
    });
  };

  const handlePreviousPage = () => {
    setPag((prevPag) => {
      const newPage = Math.max(prevPag - 1, 1);
      fetch(look, newPage); // Fetch results for the new page
      return newPage;
    });
  };

  return (
    <div className="search-container">
      <Container>
        <div className="inp">
          <input
            type="text"
            onChange={handleSearch}
            value={look}
            placeholder="Search for movies..."
            className="search-input"
          />
        </div>
        <div className="pagination-controls">
          <button onClick={handlePreviousPage}>{b}</button>
          <p className="page-number">{pag}</p>
          <button onClick={handleNextPage}>{a}</button>
        </div>

        <Row>
          {result.length > 0 ? (
            result.map((results) => (
              <Col
                md={4}
                className="mb-4 d-flex justify-content-center"
                key={results.id}
              >
                <SearchCards {...results} />
              </Col>
            ))
          ) : (
            <p className="inp">No results found.</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Search;
