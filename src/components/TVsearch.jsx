import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import { Container, Row, Col } from "react-bootstrap";
import TVsearchcards from "./TVsearchcards";
import axios from "axios";
import "./Search.css"; // Create a new CSS file for search styles if needed

const TVsearch = () => {
  const [look, setLook] = useState("");
  const [result, setResult] = useState([]);
  const { pag, setPag } = useContext(Context);
  const a = ">";
  const b = "<";

  const fetch = async (search, no) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/tv?query=${search}&include_adult=false&language=en-US&page=${no}`,
        {
          params: {
            api_key: "5f13d4e3e7df06b5fb904015b934cc00",
          },
        }
      );
      setResult(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error("Error fetching TV shows: ", error);
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
    setPag((prevPag) => prevPag + 1);
  };

  const handlePreviousPage = () => {
    setPag((prevPag) => Math.max(prevPag - 1, 1));
  };

  return (
    <div className="search-container">
      <Container>
        <div className="inp">
          <input
            type="text"
            onChange={handleSearch}
            value={look}
            placeholder="Search for TV Shows..."
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
                <TVsearchcards {...results} />
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

export default TVsearch;
