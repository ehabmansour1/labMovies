import React, { useState } from "react";
import MovieCards from "./MovieCards";
import Search from "./Search";


const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <MovieCards searchQuery={searchQuery} />
    </>
  );
};

export default Home;
