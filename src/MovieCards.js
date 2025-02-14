import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./Redux/actions";
import MovieCard from "./MovieCard";
import LanguageContext from "./LanguageContext";

const MovieCards = () => {
  const langContext = useContext(LanguageContext).language;
  const dispatch = useDispatch();
  const { movies, currentPage, totalPages, searchQuery } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies(searchQuery, currentPage, langContext));
  }, [searchQuery, currentPage, dispatch]);

  const handlePageChange = (page) => {
    dispatch(fetchMovies(searchQuery, page));
  };

  const generatePageNumbers = () => {
    const visiblePages = 5;
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);
    for (let page = startPage; page <= endPage; page++) {
      pages.push(page);
    }
    return pages;
  };

  return (
    <div>
      <div className="boxes" id="movieList">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            id={movie.id}
            year={movie.release_date}
            type="Movie"
            img={movie.poster_path}
          />
        ))}
      </div>
      <nav
        aria-label="Page navigation"
        className="d-flex justify-content-center mt-4"
      >
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>

          {generatePageNumbers().map((page) => (
            <li
              key={page}
              className={`page-item ${page === currentPage ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MovieCards;
