import React from "react";
import { useParams } from "react-router";
import { useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const MovieDetails = ({movies, setMovies}) => {
  const { id } = useParams();
  useEffect(() => {
    const loadMovieInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/movies/${id}`);
        
        setMovies(response.data);

      } catch (err) {
        console.log(err);
      }
    };
    loadMovieInfo();
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="detailspage">
          <div className="detailsmain">
            <img src={movies.posterUrl} alt={movies.title} />
            <span>
              <h1> {movies.title}</h1>
              <h4><span className="desc">Actors:</span> {movies.actors}</h4>
              <h4> <span className="desc">Plot: </span>{movies.plot}</h4>
              <h4> <span className="desc">Year:</span> {movies.year}</h4>
              <h4> <span className="desc">Time: </span>{movies.runtime}</h4>
              <h4><span className="desc">Genre: </span>  { movies.genres } </h4>
              <h4><span className="desc"> Director:</span> {movies.director}</h4>
               <h4><span className="desc cric"> <Link  style={{textDecoration: 'none'}} to={`/critques/${movies.id}`}>See Critics</Link></span> </h4>


            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
