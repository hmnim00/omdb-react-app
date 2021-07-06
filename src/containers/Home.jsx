import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import Films from "../components/films/Films";

const API = process.env.API_URL;

const Home = () => {
  const [films, setFilms] = useState([]);
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");

  const fetchFilms = async () => {
    const res = await axios.get(`${API}&s=${nombre}`);
    setFilms(res.data.Search);
    setNombre("");
    // console.log("DATA =>", res.data.Search);
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nombre === "") return setError("No hay nada qué buscar");

    fetchFilms();

    // console.log(nombre);
    return setNombre(""), setError("");
  };

  return (
    <div className="home">
      <div className="container">
        {/* búsqueda */}
        <div className="search-box">
          <form onSubmit={handleSubmit}>
            <div className="form">
              <input
                type="text"
                name="nombre"
                className="form__text"
                placeholder="Buscar por nombre"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
              />
            </div>
            <div className="form">
              <button className="btn__search">
                <span>
                  <BiSearchAlt />
                </span>
              </button>
            </div>
          </form>
          <div className="errorMessage">
            {error ? <p className="error-msg">{error}</p> : <p></p>}
          </div>
        </div>
      </div>
      {films && <Films films={films} />}
    </div>
  );
};

export default Home;
