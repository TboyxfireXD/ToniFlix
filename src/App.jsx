import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { createContext } from "react";
import Home from "./components/Home";
import Moviebox from "./components/Movies/Moviebox";
import SignUp from "./components/SignUp";
import TV from "./components/TV/TV";
import Search from "./components/Movies/Search";
import TVsearch from "./components/TV/TVsearch";
import Upcoming from "./components/Movies/Upcoming";
import Popular from "./components/Movies/Popular";
import Top_Rated from "./components/Movies/Top_Rated";
import Now_Playing from "./components/Movies/Now_Playing";
import Trending from "./components/Movies/Trending";
import Airing_today from "./components/TV/Airing_today";
import On_the_air from "./components/TV/On_the_air";
import Populatv from "./components/TV/Populatv";
import Top_ratedtv from "./components/TV/Top_ratedtv";
import Trendingtv from "./components/TV/Trendingtv";

export const Context = createContext();

const App = () => {
  const [cast, setCast] = useState([]);
  const [video, setVideo] = useState([]);
  const [videos, setVideos] = useState([]);
  const [pag, setPag] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndexs, setActiveIndexs] = useState(null);

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

  const handleCardClicks = async (id) => {
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
      console.error("Error fetching movie cast: ", error);
    }
  };
  
  const handleVideoClicks = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/videos`,
        {
          params: { api_key: "5f13d4e3e7df06b5fb904015b934cc00" },
        }
      );
      if (response.data.results.length > 0) {
        setVideo([response.data.results[0]]); // Set only the first video
      } else {
        setVideo([]); // No videos available
      }
    } catch (error) {
      console.error("Error fetching TV video: ", error);
    }
  };

  const handleVideoClick = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        {
          params: { api_key: "5f13d4e3e7df06b5fb904015b934cc00" },
        }
      );
      if (response.data.results.length > 0) {
        setVideos([response.data.results[0]]); // Set only the first video
      } else {
        setVideos([]); // No videos available
      }
    } catch (error) {
      console.error("Error fetching movie video: ", error);
    }
  };

  return (
    <div>
      <Context.Provider
        value={{
          handleCardClick,
          handleCardClicks,
          cast,
          pag,
          setPag,
          activeIndex,
          activeIndexs,
          setActiveIndex,
          setActiveIndexs,
          handleVideoClicks,
          handleVideoClick,
          videos,
          video,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Moviebox />}>
              <Route path="upcoming" element={<Upcoming />} />
              <Route path="popular" element={<Popular />} />
              <Route path="top_rated" element={<Top_Rated />} />
              <Route path="now_playing" element={<Now_Playing />} />
              <Route path="trending" element={<Trending />} />
              <Route path="search" element={<Search />} />
            </Route>
            <Route path="/tvshows" element={<TV />}>
              <Route path="search" element={<TVsearch />} />
              <Route path="airing_today" element={<Airing_today />} />
              <Route path="on_the_air" element={<On_the_air />} />
              <Route path="popular" element={<Populatv />} />
              <Route path="top_rated" element={<Top_ratedtv />} />
              <Route path="trending" element={<Trendingtv />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
};

export default App;
