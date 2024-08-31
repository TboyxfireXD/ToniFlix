import React from "react";
import './Heads.css'
import { Link } from "react-router-dom";

const Heads = () => {
  return (
    <div>
      <div className="head">
        <div className="logo">
          <Link style={{textDecoration:"none"}} to="/">
            <h2>TONIFLIX</h2>
          </Link>
        </div>
        <div className="sign">
          <Link style={{textDecoration:"none"}} to="/signup">
            <h2>Sign Up</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heads;
