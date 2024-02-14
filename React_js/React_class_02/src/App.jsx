import './App.css'
import Header, { HeaderElements as H_elements } from './assets/components/Header'
import { people } from "./assets/listRendering/data";

function App() {

  return (
    <>

    <div>
    
    <h1>Second try in react</h1>
    <Profile/>

    <Header/>
    <H_elements/>

    <h1>
      listRendering start
    </h1>

    </div>

    <div>

    {
  people.map(person => (
    <li key={person.id}>{person.name}</li>
  ))
}


    </div>

    </>
  )
}

export default App

function Profile(){

  const avatar = 'https://i.imgur.com/MK3eW3As.jpg';
  const description = 'Gregorio Y. Zara';

  //creating object in react

  const style = {

    color : "white",
    backgroundColor : "black",

  };


  return (
    
    <>

    <img
      src={avatar}
      alt={description}
    />

    <h3 style={{color: "white", backgroundColor :"black"}}>
      My name is {description}
    </h3>

    <h3 style={style}>
      and I do not know what I do
    </h3>

    </>

  );

}
