// import React from 'react';
import './App.css'

export default function MovieCard({ movies }) {

  return (
    <div>
      {/* You can render individual movie cards here */}
      {movies.map(movie => (
        <div key={movie.id} className='movieCard'>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
          <h2>Title: {movie.original_title}</h2>
          <h4>overview: {movie.overview}</h4>
          <h5>popularity: {movie.popularity}</h5>
          <h5>release date: {movie.release_date}</h5>
        </div>
      ))}
    </div>
  );
}
