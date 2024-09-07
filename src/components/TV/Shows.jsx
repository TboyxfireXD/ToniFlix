import React, { useContext} from "react";
import { Context } from "../../App";
import "./Movies.css";
import { Link, Outlet } from "react-router-dom"; // Import Link

const Shows = () => {
  const {activeIndexs, setActiveIndexs} = useContext(Context);

  return (
    <div>
      <div className="ctrl">
        <nav>
          <ul>
            <Link
              to="/tvshows/airing_today"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                style={{ backgroundColor: activeIndexs === 6 ? "black" : "" }}
                onClick={() => setActiveIndexs(6)}
              >
                Airing Today
              </li>
            </Link>

            <Link
              to="/tvshows/on_the_air"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                style={{ backgroundColor: activeIndexs === 7 ? "black" : "" }}
                onClick={() => setActiveIndexs(7)}
              >
                On the Air
              </li>
            </Link>

            <Link
              to="/tvshows/popular"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                style={{ backgroundColor: activeIndexs === 8 ? "black" : "" }}
                onClick={() => setActiveIndexs(8)}
              >
                Popular
              </li>
            </Link>

            <Link
              to="/tvshows/top_rated"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                style={{ backgroundColor: activeIndexs === 9 ? "black" : "" }}
                onClick={() => setActiveIndexs(9)}
              >
                Top Rated
              </li>
            </Link>

            <Link
              to="/tvshows/trending"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                style={{ backgroundColor: activeIndexs === 10 ? "black" : "" }}
                onClick={() => setActiveIndexs(10)}
              >
                Trending
              </li>
            </Link>

            <Link
              to="/tvshows/search"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                style={{ backgroundColor: activeIndexs === 11 ? "black" : "" }}
                onClick={() => setActiveIndexs(11)}
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
