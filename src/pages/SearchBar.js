import React from "react";

const SearchBar = ({changeCategory, genre, searchTerm, searchMovie, setSearchTerm}) => {
  return (
    <div>
      <h3>Search or filter to find your favorite movie</h3>

      <form className="form">
        <select
          value={genre}
          onChange={changeCategory}
          id="genreOptions"
          placeholder="CHOOSE"
        >
          <option value="comedy">Select Genre</option>
          <option value="Comedy">Comedy</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
          <option value="Music">Music</option>
          <option value="Adventure">Adventure</option>
          <option value="History">History</option>
          <option value="Thriller">Thriller</option>
          <option value="Animation">Animation</option>
          <option value="Family">Family</option>
          <option value="Mystery">Mystry</option>
          <option value="Biography">Biography</option>
          <option value="Film-Noir">Film-Noir</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="War">War</option>
          <option value="Sport">Sport</option>
        </select>
        <div className="inputBtn">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Title"
          />
          <i className="fa fa-search" id="glass" onClick={searchMovie}></i>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
