const INITIAL_VALUE = {
  movies: [],
  currentPage: 1,
  totalPages: 1,
  searchQuery: "",
  lang: "en",
};

export default function MoviesReducer(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case "GET_MOVIES_LIST":
      return {
        ...state,
        movies: action.payload.movies,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
        searchQuery: action.payload.searchQuery,
        lang: action.payload.lang,
      };

    case "CHANGE_LANGUAGE":
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
}
