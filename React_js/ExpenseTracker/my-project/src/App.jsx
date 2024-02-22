import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Table from './components/Table'
import AddExpenses from './components/AddExpenses';

function App() {

  // eslint-disable-next-line no-unused-vars
  const [expenses, setExpenses] = useState([{

    id : 1,
    category: "Utilities",
    description: "cost of utilities",
    amount : 60,

  }, 
  {

    id : 2,
    category: "Bazar",
    description: "cost of bazar",
    amount : 100,

  },
  {

    id : 3,
    category: "Rent",
    description: "cost of home rent",
    amount : 300,

  },
  {

    id : 4,
    category: "Utilities",
    description: "cost of utilities",
    amount : 60,

  },
  {

    id : 5,
    category: "Tour",
    description: "cost of tour",
    amount : 1000,

  },]);

  //state for filtered category
  const [filterCategory, setFilterCategory] = useState("");

  // function for deleting spesific item
  const deletItem = (id) =>{

    //see the documentation of filter method
    setExpenses((expenses.filter((expense)=> expense.id !== id)));

  }


  // function for showing data according to category

  const filteredCategory = filterCategory ? expenses.filter((expense) => expense.category === filterCategory) : expenses;


  return (
    <>
      <Header/>
      <AddExpenses expenses = {(newExpenses) => setExpenses([...expenses,{...newExpenses, id: expenses.length+1}]) }/>
      <Table data = {filteredCategory} deletItem = {deletItem} gettingFilteredCategory = { (category) => setFilterCategory(category) }/>
    </>
  )
}

export default App
