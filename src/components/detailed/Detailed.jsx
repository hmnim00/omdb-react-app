import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import "./detailed.scss";

const API = process.env.OMDB_URL;
const URI = process.env.OMDB_URI;

const Detailed = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [film, setFilm] = useState({});

  useEffect(() => {
    const getFilm = async () => {
      const res = await axios.get(`${API}${path}${URI}`);
      // console.log(res.data);
      setFilm(res.data);
    };
    getFilm();
  }, [path]);

  return (
    <div className="detailed">
      <div className="d-board">
        <div className="d-board__header">
          <div className="d-board__header--title">
            <h1>{film.Title}</h1>
          </div>
          <div className="d-board__header--info">
            <p>{film.Year}</p>
            <p>{film.Rated}</p>
            <p>{film.Runtime}</p>
          </div>
        </div>

        <div className="d-board__body">
          <div
            className="d-board__body--image"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(39,39,39,1) 0%, rgba(39,39,39,0.891176538974965) 50%, rgba(39,39,39,1) 100%), url(${film.Poster})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={film.Poster} alt="film/cover" />
          </div>
          <div className="d-board__body--info">
            <p className="info--text">{film.Plot}</p>
            <div className="info--rating">
              <AiFillStar />
              <p>
                <span>{film.imdbRating}</span>/10
              </p>
            </div>
            <div className="info--add">
              <p>
                Pais: <b>{film.Country}</b>
              </p>
              <p>
                Actores: <b>{film.Actors}</b>
              </p>
              <p>
                Fecha de lanzamiento: <i>{film.Released}</i>
              </p>
            </div>
          </div>
        </div>

        <div className="d-board__footer">
          <div className="d-board__footer--info">
            <h4>Director</h4>
            <p>{film.Director}</p>
          </div>
          <div className="d-board__footer--info">
            <h4>Escritor</h4>
            <p>{film.Writer}</p>
          </div>
          <div className="d-board__footer--info">
            <h4>Género</h4>
            <p>{film.Genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
