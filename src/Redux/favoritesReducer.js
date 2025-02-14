const initialState = {
  favorites: [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      if (state.favorites.includes(action.payload)) {
        return {
          ...state,
          favorites: state.favorites.filter((id) => id !== action.payload),
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
    default:
      return state;
  }
};
