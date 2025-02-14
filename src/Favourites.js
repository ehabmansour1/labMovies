import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import axios from "axios";
import "./Favourites.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LanguageContext from "./LanguageContext";

const Favorites = () => {
  const langContext = useContext(LanguageContext).language;
  const favoriteIds = useSelector((state) => state.favorites.favorites);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const movieRequests = favoriteIds.map((id) =>
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=1c61f7854caf371b34a23ef611f0efed&language=${langContext}`
        )
      );
      const responses = await Promise.all(movieRequests);
      const moviesData = responses.map((response) => response.data);
      setMovies(moviesData);
    };
    fetchFavoriteMovies();
  }, [favoriteIds, langContext]);

  return (
    <div style={{ overflow: "hidden" }}>
      <h1 className="text-center my-4">Your Favorite Movies</h1>
      <div className="boxes" id="movieList">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              id={movie.id}
              year={movie.release_date}
              type="Movie"
              img={movie.poster_path}
            />
          ))
        ) : (
          <div class="empty-state">
            <div class="empty-icon floating">
              <lord-icon
                src="https://cdn.lordicon.com/cvwrvyjv.json"
                trigger="loop"
                colors="primary:#60a5fa,secondary:#a78bfa"
                style={{ width: "200px", height: "200px" }}
              ></lord-icon>
            </div>
            <h2 class="empty-title">Your Favorites List is Empty</h2>

            <Link
              to="/"
              href="https://movies.example.com/browse"
              class="browse-button"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
              Browse Movies
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
