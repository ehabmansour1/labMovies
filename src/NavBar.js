import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LanguageContext from "./LanguageContext";
import { fetchMovies } from "./Redux/actions";

function NavBar() {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favorites.favorites).length;
  const { language, setLanguage } = useContext(LanguageContext);
  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    dispatch(fetchMovies("", 1, newLang));
    setLanguage(newLang);
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="logo">
          <i className="fa-solid fa-video logo-text" aria-hidden="true"></i>
          <span className="logo-text">POP CIMA</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto navLinks">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favourites">
                Favourites (<span>{favs}</span>)
              </Link>
            </li>
            <li className="nav-item">
              <button className="lang-btn" onClick={toggleLanguage}>
                {language === "en" ? "AR" : "EN"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
