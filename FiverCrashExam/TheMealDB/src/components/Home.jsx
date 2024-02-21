/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Home({ data }) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 max-w-[90%] mx-auto px-[28px]">
                
                {data.length ? (
                    // eslint-disable-next-line react/prop-types
                    data.map(meal => (
                        <div key={meal.idMeal} className="hero  bg-base-200 max-h-[600px] border border-gray-700 rounded">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={meal.strMealThumb} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-4xl font-bold">{meal.strMeal}</h1>
                                    <p className="py-6">{meal.strInstructions.slice(0,300)}....</p>
                                    <Link className="btn btn-primary" to={`/details/${meal.idMeal}`} >Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                    <span className="loading loading-dots loading-xs"></span>
                    <span className="loading loading-dots loading-sm"></span>
                    <span className="loading loading-dots loading-md"></span>
                    <span className="loading loading-dots loading-lg"></span>
                        
                    </div>
                )}
            </div>
        </>
    );
}

export default Home;