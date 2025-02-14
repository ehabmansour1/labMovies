import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Search.css";
import { fetchMovies } from "./Redux/actions";

const Search = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery || "");

  const handleSearch = (e) => {
    const query = e.target.value;
    setLocalSearchQuery(query);
    dispatch(fetchMovies(query));
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search movies by title or year..."
        value={localSearchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
