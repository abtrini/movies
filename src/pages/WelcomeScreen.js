import React from "react";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <div className="container">
      <div className="welcome">
        <div className="appTitle">CINEMOUNT <br/> <span>Movie App</span> </div>
        <Link  to={`/movieList`}>
          </Link>
      </div>
    </div>
  );
};

export default WelcomeScreen;
