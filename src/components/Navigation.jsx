import React from "react";
import { Link } from "react-router-dom";
import { GiFilmStrip } from "react-icons/gi";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="container">
        <Link to="/" className="title">
          <span>
            <GiFilmStrip />
          </span>
          <h1>OMDB REACT APP</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
