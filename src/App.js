import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./pages/MovieList";
import WelcomeScreen from "./pages/WelcomeScreen";
import MovieDetails from "./pages/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Critiques from "./pages/Critiques";

function App() {
  const [movies, setMovies] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadMovieInfoInfo = async () => {
      try {
        const response = await axios.get(" http://localhost:5000/movies");
        setMovies(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadMovieInfoInfo();
  }, []);

  const searchMovie = (e) => {
    e.preventDefault();
    const newFilter = movies.filter((value) => {
      return value.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setMovies(newFilter);
  };

  const changeCategory = (e) => {
    e.preventDefault();
    const filteredMovies = movies.filter((movie) =>
      movie.genres.includes(e.target.value)
    );
    setMovies(filteredMovies);
    console.log(filteredMovies);
  };

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<WelcomeScreen />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/movielist"
              exact
              element={
                <MovieList
                  movies={movies}
                  searchMovie={searchMovie}
                  setMovies={setMovies}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  changeCategory={changeCategory}
                />
              }
            />
            <Route
              path="/movielist/:id"
              element={<MovieDetails movies={movies} setMovies={setMovies} />}
            />
            <Route
              path="/critques/:id"
              element={<Critiques movies={movies} setMovies={setMovies} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;