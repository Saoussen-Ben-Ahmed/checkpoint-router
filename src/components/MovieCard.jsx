import React from "react";
import Rate from "./Rate";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="card-body">
        <Rate rating={movie.rating} />
        <h3 className="card-title">{movie.title}</h3>
        <img
          src={movie.image}
          alt="im"
          style={{ height: "500px", width: "500px" }}
        />

        <p className="card-text">{movie.description}</p>
        <Link to={`/mouvies/${movie.id}`}>More Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
