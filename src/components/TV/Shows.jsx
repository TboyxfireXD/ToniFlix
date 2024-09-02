import React, { useState, useEffect } from "react";
import axios from "axios";
import TVcards from "./TVcards";
import "./Movies.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom"; // Import Link

const Shows = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <div className="ctrl">
        <nav>
          <ul>
            <Link
              to="/tvshows/airing_today"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              <li
                style={{ backgroundColor: activeIndex === 0 ? "black" : "" }}
                onClick={() => setActiveIndex(0)}
              >
                Airing Today
              </li>
            </Link>

            <Link
              to="/tvshows/on_the_air"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                style={{ backgroundColor: activeIndex === 1 ? "black" : "" }}
                onClick={() => setActiveIndex(1)}
              >
                On the Air
              </li>
            </Link>

            <Link
              to="/tvshows/popular"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                style={{ backgroundColor: activeIndex === 2 ? "black" : "" }}
                onClick={() => setActiveIndex(2)}
              >
                Popular
              </li>
            </Link>

            <Link
              to="/tvshows/top_rated"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                style={{ backgroundColor: activeIndex === 3 ? "black" : "" }}
                onClick={() => setActiveIndex(3)}
              >
                Top Rated
              </li>
            </Link>

            <Link
              to="/tvshows/trending"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                style={{ backgroundColor: activeIndex === 4 ? "black" : "" }}
                onClick={() => setActiveIndex(4)}
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
                onClick={() => setActiveIndex(5)}
              >
                Search
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Shows;
