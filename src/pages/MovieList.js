import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import {useNavigate} from "react-router-dom";
const MovieList = ({movies, searchTerm, setSearchTerm,  searchMovie, changeCategory, results, setResults}) => {
  let history = useNavigate();
if(movies.length === 0){
  return <div className="container noMovie">
                No Movies <br />to show 
            <div>
              <button onClick={()=>{history("/movielist")}}> Back to movie List</button>
            </div>
        </div>
} 

return (

  <div className="container">
  
    <div className="filterMain">
      <SearchBar  changeCategory={changeCategory} setSearchTerm={setSearchTerm} searchTerm={searchTerm} searchMovie={searchMovie}/>
    </div>
    <div className="main">
      {movies && movies.slice(0, 20).map((movie) => (
          <div className="content" key={movie.id}>
            <Link to={`/movielist/${movie.id}`}>
              <img  src={`${movie.posterUrl}`} alt="" />
            </Link>
            <div className="innerContent">
              <h1><span className="desc">Title: </span>{movie.title} </h1>
              <h3><span className="desc">Year: </span>{movie.year}</h3>
              <h3><span className="desc">Rating: </span>{movie.rating}</h3>
              <h3><span className="desc">Genre: </span>{movie.genres.map((genre) => " / " + genre + " ")} </h3>
            </div>
          </div>
        ))}
    </div>
  </div>
  );
  
};

export default MovieList;
