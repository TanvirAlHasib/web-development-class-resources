import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { useEffect } from 'react';
import About from './components/About';
import Details from './components/Details';

function App() {

  //default api url
  let MEAL_LIST_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
  //state for fetched meal
  const [meals, setMeals] = useState([]);
  //state for checking have i got data or not
  const [loading, setLoading] = useState(true);

  //function for search meal by name
  const search = (value) => {

    if (value) {

      //if user searched by any name of meals then it will update the fetch url
      MEAL_LIST_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
      
    }

    //after updating fetching data again
    mealFetch();

  }

  //useEffect for first fetch
  useEffect(()=>{

    mealFetch();

  },[]);

  //fetch function to fetch meals
  const mealFetch = async() => {

    const res = await fetch(MEAL_LIST_URL);
    const data = await res.json();
    //updating the meal state by getting meals data
    setMeals(data.meals.slice(0,36));
    //updating loading state to false
    setLoading(false);

  }

  return (
    <>
    {/* passing search and fetch function for further use */}

      <Header search = {search} fetch = {mealFetch}/>

{/* a ternary operator to check am i getting data or not, if i get then render the data or show the loading state to the user */}
      {
        loading ? (<div className='h-[80vh] flex justify-center items-center'>
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-sm"></span>
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-lg"></span>

        </div>) :(
          <Routes>
            <Route path='/' element={<Home data={meals}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/details/:id' element={<Details/>}/>
          </Routes>
        )
      }

    </>
  )
}

export default App
