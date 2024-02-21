import { useState } from "react"
import { NavLink } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function Header({search, fetch}) {
    // taking value state for taking value from search input and reseting the search field after search
    const [value, setValue] = useState("");
  return (
    <>
        <div className="navbar bg-base-100 max-w-[90%] mx-auto mb-9 mt-7">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {/* wher user click the home page drop down menu then user will see the defualt home page with default meal data */}
                    <li><NavLink to={'/'} onClick={()=> fetch()}>Home page</NavLink></li>
                    {/* after click user will route to about page */}
                    <li><NavLink to={'/about'}>about</NavLink></li>
                </ul>
                </div>
            </div>
            <div className="navbar-center">
            {/* wher user click logo then user will see the defualt home page with default meal data */}
                <NavLink className="btn btn-ghost text-[30px]" to={'/'} onClick={()=> fetch()}>TheMealDB</NavLink>
            </div>
            <div className="navbar-end">

            {/* searchbar */}
            <div className="form-control mr-3">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" value={value} onChange={(e)=>{

                    // updating state by onChange event
                    setValue(e.target.value);

                }}/>
            </div>
            <button className="btn btn-primary" onClick={() => {

                //calling the search method with user inputed search value
                search(value);
                // after calling the search function reseting the value and also search filed
                setValue("");

            }}>Sreach</button>
            </div>
        </div>
    </>
  )
}

export default Header