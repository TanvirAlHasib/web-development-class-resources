import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

function Details() {

    //using paramas to get the id for fetching data about the specific meal
    const params = useParams();
    // every times updating the url by meal id
    const DETAILS_API_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`;
    // state for storing meal details
    const [mealDetails, setMealDetails] = useState([]);

    // useEffect for calling fetchDetails function
    useEffect(() => {

        fetchDetails();

    },[]);

    // function for fetching meal details
    const fetchDetails = async() =>{
        const res = await fetch(DETAILS_API_URL);
        const data = await res.json();
        // updating the mealDetails state with fetched data
        setMealDetails(data.meals);
        
    }

    // renedering the details
  return (
    <>

    <div>
        {mealDetails.length ? (
                        // eslint-disable-next-line react/prop-types
                        mealDetails.map(meal => (
                            <div key={meal.idMeal} className="hero max-h-screen max-w-[86%] mx-auto bg-base-200" style={{backgroundImage: `url(${meal.strMealThumb})`}}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div>
                                    <h1 className="mb-5 text-5xl font-bold">{meal.strMeal}</h1>
                                    <h1 className="mb-3 text-2xl font-bold">Category: {meal.strCategory}</h1>
                                    <h1 className="mb-5 text-2xl font-bold">Area: {meal.strArea}</h1>
                                    <p className="mb-5">{meal.strInstructions}</p>
                                    <Link className="btn btn-primary" to={'/'} >Back to home</Link>
                                    </div>
                                </div>
                                </div>
                        ))
                    ) : (
                        <div className='h-[80vh] flex justify-center items-center'>
                        <span className="loading loading-dots loading-xs"></span>
                        <span className="loading loading-dots loading-sm"></span>
                        <span className="loading loading-dots loading-md"></span>
                        <span className="loading loading-dots loading-lg"></span>
                            
                        </div>
                    )}
    </div>

    </>
  )
}

export default Details