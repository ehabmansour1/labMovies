import { createStore, applyMiddleware, combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";
import LoaderReducer from "./loaderReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import MoviesReducer from "./MoviesReducer";

import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  loader: LoaderReducer,
  movies: MoviesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
