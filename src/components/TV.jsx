import React from "react";
import Host from "./Host";
import Footer from "./Footer";
import Shows from "./Shows";
import tv from "./img/tv.jpg";
import Navs from "./Navs";

const TV = () => {
  const stylings = {
    backgroundImage: `url(${tv})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center", // Center the image within the div
    minHeight: "100vh", // Ensure the background div fills the entire viewport
    width: "100%",
  };

  const movieStyles = {
    backgroundColor: "rgba(0, 0, 0, 0.850)",
    minHeight: "100vh", // Ensure the Moviebox fills the entire viewport
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={movieStyles} className="Moviebox">
      <div className="styling" style={stylings}>
        <Navs />
        <Host />
      </div>
      <Shows />
      <Footer />
    </div>
  );
};

export default TV;
