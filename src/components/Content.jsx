import React from "react";
import { Link } from "react-router-dom";
import './Content.css'

const Content = () => {
  return (
    <div>
      <div className="content">
        <div className="text">
          <h2>Unlimited movies, TV shows, and more...</h2>
        </div>
        <div className="sig">Watch anywhere. Cancel anytime.</div>
        <div className="email">
          <p>Ready to watch? Click on the Get Started Button to register.</p>
        </div>
        <div className="love">
          <div className="btn">
            <Link to="/movies">
              <button>
                <h3>Our Movies</h3>
              </button>
            </Link>
            <Link to="/signup">
              <button>
                <h3>Get Started</h3>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
