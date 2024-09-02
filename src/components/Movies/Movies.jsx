import React, { useContext } from "react";
import "../TV/Movies.css";
import { Outlet, Link } from "react-router-dom";
import { Context } from "../../App";

const Movies = () => {
  const {activeIndex, setActiveIndex} = useContext(Context)
  return (
    <div>
      <div className="ctrl">
        <nav>
          <ul>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/movies/upcoming"
            >
              <li
                style={{ backgroundColor: activeIndex === 0 ? "black" : "" }}
                onClick={() => setActiveIndex(0)}
              >
                Upcoming
              </li>
            </Link>

            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/movies/popular"
            >
              <li
                style={{ backgroundColor: activeIndex === 1 ? "black" : "" }}
                onClick={() => setActiveIndex(1)}
              >
                Popular
              </li>
            </Link>

            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/movies/top_rated"
            >
              <li
                style={{ backgroundColor: activeIndex === 2 ? "black" : "" }}
                onClick={() => setActiveIndex(2)}
              >
                Top Rated
              </li>
            </Link>

            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/movies/now_playing"
            >
              <li
                style={{ backgroundColor: activeIndex === 3 ? "black" : "" }}
                onClick={() => setActiveIndex(3)}
              >
                Now Playing
              </li>
            </Link>

            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/movies/trending"
            >
              <li
                style={{ backgroundColor: activeIndex === 4 ? "black" : "" }}
                onClick={() => setActiveIndex(4)}
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

export default Movies;
