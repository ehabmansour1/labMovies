import axios from "axios";

export const isLoading = (payload) => {
  return {
    type: "IS_LOADING",
    payload,
  };
};
export const toggleFavorite = (id) => ({
  type: "TOGGLE_FAVORITE",
  payload: id,
});


export const fetchMovies =
  (searchQuery, currentPage = 1, lang) =>
  async (dispatch) => {
    const url = searchQuery.trim()
      ? `https://api.themoviedb.org/3/search/movie?api_key=55f4b2316c4b8c8fa71e776cab7e4a69&language=${lang}&query=${searchQuery}&page=${currentPage}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=55f4b2316c4b8c8fa71e776cab7e4a69&language=${lang}&page=${currentPage}`;

    try {
      const response = await axios.get(url);
      dispatch({
        type: "GET_MOVIES_LIST",
        payload: {
          movies: response.data.results,
          totalPages: response.data.total_pages,
          currentPage,
          searchQuery,
          lang,
        },
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
