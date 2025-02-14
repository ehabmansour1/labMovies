import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MovieCard = (props) => {
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.favorites.favorites);
  const isFavorite = favoriteIds.includes(props.id);
  const toggleFavorite = (id) => {
    console.log("Toggle Favorite", id);
    dispatch({ type: "TOGGLE_FAVORITE", payload: id });
  };
  return (
    <div className="movie">
      <button className="fav" onClick={() => toggleFavorite(props.id)}>
        {isFavorite ? (
          <i className="fa-solid fa-star"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </button>
      <Link to={`movie/${props.id}`} className="movie-card" id={props.id}>
        <div className="media-type">{props.type}</div>
        <div className="movie-bg">
          <img
            alt={props.title}
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${props.img}`}
          />
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{props.title}</h3>
          <p className="movie-year">{props.year.substring(0, 4)}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
