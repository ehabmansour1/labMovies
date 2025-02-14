import axios from "axios";
import { React, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./Movie.css";
import LanguageContext from "./LanguageContext";

const Movie = () => {
  const langContext = useContext(LanguageContext).language;
  console.log(langContext);
  const id = useParams().id;

  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=${langContext}-US`,
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2IyNzIwYTg2NDFkYjI0MjlhY2M3MDM3NDAwYjVlMSIsIm5iZiI6MTczNDY3MzA4OC40MjUsInN1YiI6IjY3NjUwMmMwYjY3ZTQ1NDcyNTVkZThkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P8DRWcm4TUCu61w1tJYUiNm5wADg7qulMAgkyq6Hc04",
          },
        }
      )
      .then((response) => {
        setMovie(response.data);
        console.log(response);
      });
  }, [langContext]);
  return (
    <section
      className="movie-hero"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w1280//${movie.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="movie-content">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.backdrop_path}`}
            alt="te"
          />
        </div>
        <div className="movie-details">
          <h1 className="movie-title">{movie.title}</h1>
          <div className="genre-tags">
            {movie.genres && movie.genres.length > 0 ? (
              movie.genres.map((genre) => (
                <span key={genre.id} className="genre-tag">
                  {genre.name}
                </span>
              ))
            ) : (
              <span></span>
            )}
          </div>
          <p className="movie-description">{movie.overview}</p>
          <div className="movie-stats">
            <div className="stat-item">
              <div className="stat-value">
                {(movie.vote_average || 0).toFixed(1)}
              </div>
              <div className="stat-label">Vote </div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{movie.original_language}</div>
              <div className="stat-label">Language</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                {movie.release_date ? movie.release_date.substring(0, 4) : ""}
              </div>
              <div className="stat-label">Release Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
