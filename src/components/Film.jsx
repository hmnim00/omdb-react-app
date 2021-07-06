import React from "react";
import { Link } from "react-router-dom";

const Film = ({ film }) => {
  return (
    <div className="board__film">
      <div className="board__film--cover">
        <img src={film.Poster} alt="cover" />
      </div>
      <div className="board__film--info">
        <h4>{film.Title}</h4>
        <hr />
        <div className="more-info">
          <p>Año: {film.Year}</p>
          <Link to={`/detalle/${film.imdbID}`}>
            <p>ver más</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Film;
