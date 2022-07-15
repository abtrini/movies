import React from 'react'
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Critiques = ({movies, setMovies}) => {

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
    <div className="container">
      <div className="criticsmain">
        <img src={movies.criticimage} alt={movies.title} />
        <span>
          <h4><span className="crictdesc">Critic Name:</span> {movies.critic}</h4>
          <h4> <span className="crictdesc">Movie: </span>{movies.title}</h4>
          <h4> <span className="crictdesc">FeedBack:</span> {movies.feedback}</h4>
          <h4> <span className="crictdesc">Rating:</span> {movies.rating}</h4>


        </span>
      </div>
  </div>
  )
}

export default Critiques