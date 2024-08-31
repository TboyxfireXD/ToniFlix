import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { createContext } from "react";
import Home from "./components/Home";
import Moviebox from "./components/Moviebox";
import SignUp from "./components/SignUp";
import TV from "./components/TV";
import Search from "./components/Search";
import TVsearch from "./components/TVsearch";

export const Context = createContext();

const App = () => {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [cast, setCast] = useState([]);
  const [pag, setPag] = useState(1);

  const plus = () => {
    setPag(pag + 1);
    console.log(pag)
  };

  const minus = () => {
    setPag(pag - 1);
    console.log(pag)
  };

  const ret = () => {
    setPag(1);
    console.log(pag)
  };

  const fetchMovies = async (link) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/${link}`, {
        params: {
          api_key: "5f13d4e3e7df06b5fb904015b934cc00",
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies: ", error);
    }
  };

  useEffect(() => {
    handleNavClick(0, "movie/upcoming"); // Fetch upcoming movies by default
  }, []);

  const handleNavClick = (index, link) => {
    setActiveIndex(index);
    if (link) {
      fetchMovies(link);
    } else {
      setMovies([]); // Clear movies when navigating to the search
    }
  };

  const handleCardClick = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits`,
        {
          params: {
            api_key: "5f13d4e3e7df06b5fb904015b934cc00",
          },
        }
      );
      setCast(response.data.cast);
    } catch (error) {
      console.error("Error fetching movie cast: ", error);
    }
  };

  return (
    <div>
      <Context.Provider
        value={{
          movies,
          setMovies,
          activeIndex,
          setActiveIndex,
          handleNavClick,
          handleCardClick,
          cast,
          pag,
          setPag,
          plus,
          minus,
          ret,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Moviebox />}>
              <Route path="search" element={<Search />} />
            </Route>
            <Route path="/tvshows" element={<TV />}>
              <Route path="search" element={<TVsearch />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
};

export default App;
