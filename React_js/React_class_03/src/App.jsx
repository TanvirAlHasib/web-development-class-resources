import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './MovieCard';

function App() {

  //for movie api
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWE5YTc1YTk0NWVkZDNhNDg3OWVmMzk3ZGEwNzVmNSIsInN1YiI6IjY1Y2RhZWY4YjA0NjA1MDE4M2RhODhmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rYi7skjYovKzixMoBapAsJGHeNSIYp0MajL-aSoZnAU'
    }
  };

  const URL = "https://api.themoviedb.org/3/trending/all/day?language=en-US";

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    fetchMovies(URL);

  }, []);

  async function fetchMovies(URL) {

    const response = await fetch(URL,options);
    const data = await response.json();
    setMovies(data.results);
    
  }

  if (movies.length == 0) {

    return(
      <>
        <div>

        <h3>Loading...</h3>


        </div>
      </>
    )
    
  } 

  return <MovieCard movies = {movies}/>;

}

export default App
