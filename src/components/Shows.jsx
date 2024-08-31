import React, { useState, useEffect } from "react";
import axios from "axios";
import TVcards from "./TVcards";
import "./Movies/Movies.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom"; // Import Link

const Shows = () => {
  const [shows, setShows] = useState([]);
  const [cast, setCast] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const fetchShows = async (link) => {
    try {
      const data = await axios.get(`https://api.themoviedb.org/3/${link}`, {
        params: {
          api_key: "5f13d4e3e7df06b5fb904015b934cc00",
        },
      });
      setShows(data.data.results);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    handleNavClick(0, "tv/airing_today");
  }, []);

  const handleNavClick = (index, link) => {
    setActiveIndex(index);
    if (link) {
      fetchShows(link);
    } else {
      setShows([]); // Clear movies when navigating to the search
    }
  };

  const handleCardClick = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/credits`,
        {
          params: {
            api_key: "5f13d4e3e7df06b5fb904015b934cc00",
          },
        }
      );
      setCast(response.data.cast);
    } catch (error) {
      console.error("Error fetching show cast: ", error);
    }
  };

  return (
    <div>
      <div className="ctrl">
        <nav>
          <ul>
            <Link
              to="/tvshows"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              <li
                style={{ backgroundColor: activeIndex === 0 ? "black" : "" }}
                onClick={() => handleNavClick(0, "tv/airing_today")}
              >
                Airing Today{" "}
              </li>
            </Link>

            <Link
              to="/tvshows"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                style={{ backgroundColor: activeIndex === 1 ? "black" : "" }}
                onClick={() => handleNavClick(1, "tv/on_the_air")}
              >
                On the Air
              </li>
            </Link>

            <Link
              to="/tvshows"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                style={{ backgroundColor: activeIndex === 2 ? "black" : "" }}
                onClick={() => handleNavClick(2, "tv/popular")}
              >
                Popular
              </li>
            </Link>

            <Link
              to="/tvshows"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                style={{ backgroundColor: activeIndex === 3 ? "black" : "" }}
                onClick={() => handleNavClick(3, "tv/top_rated")}
              >
                Top Rated
              </li>
            </Link>

            <Link
              to="/tvshows"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                style={{ backgroundColor: activeIndex === 4 ? "black" : "" }}
                onClick={() => handleNavClick(4, "trending/tv/day")}
              >
                Trending
              </li>
            </Link>

            <Link
              to="/tvshows/search"
              style={{ color: "white", textDecoration: "none" }}
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
          {shows.map((show) => (
            <Col
              md={4}
              className="mb-4 d-flex justify-content-center"
              key={show.id}
            >
              <TVcards {...show} cast={cast} onClick={handleCardClick} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Shows;
