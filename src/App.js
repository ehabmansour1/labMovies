import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Login from "./Login";
import NavBar from "./NavBar";
import Register from "./Register";
import Home from "./Home";
import Movie from "./Movie";
import NotFound from "./NotFound";
import favourites from "./Favourites";
import Loader from "./Loader";
import LanguageContext from "./LanguageContext";
import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <BrowserRouter>
        <NavBar />
        <Loader />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/favourites" component={favourites} exact />
          <Route path="/movie/:id" component={Movie} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </LanguageContext.Provider>
  );
}

export default App;
