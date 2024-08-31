import React from "react";
import Movies from "./Movies";
import Navs from "../Navs";
import Opener from "./Opener";
import Footer from "../Footer";
import fav from "../img/fav.jpg";

const Moviebox = () => {
  const styling = {
    backgroundImage: `url(${fav})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // Changed from 'cover' to 'contain' to show the full image
    backgroundPosition: "center", // Center the image within the div
    minHeight: "100vh", // Ensure the background div fills the entire viewport
    width: "100%", // Make sure the background covers the full width
  };

  const movieStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.850)",
    minHeight: "100vh", // Ensure the Moviebox fills the entire viewport
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={movieStyle} className="Moviebox">
      <div className="styling" style={styling}>
        <Navs />
        <Opener />
      </div>
      <Movies />
      <Footer />
    </div>
  );
};

export default Moviebox;
