import React from "react";
import Film from "../Film";
import "./films.scss";

const Films = ({ films }) => {
  return (
    <div className="board">
      {films.map((film, i) => (
        <Film film={film} key={i} />
      ))}
    </div>
  );
};

export default Films;
