import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Navs from "./Navs";

const Home = () => {
  const homeStyle = {
    backgroundImage:
      'url("https://www.shutterstock.com/image-photo/affectionate-young-family-watching-tv-600nw-1516327862.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    minHeight: "100vh", // Ensure the Moviebox fills the entire viewport
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={homeStyle}>
      <Navs />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
