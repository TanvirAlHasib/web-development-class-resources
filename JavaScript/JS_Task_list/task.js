// variable declaretion and intro

const form = document.getElementById("new_task");
const input = document.getElementById("input_task");
const tasklist = document.getElementsByClassName("taskList");

form.addEventListener("submit", (event)=>{

    // reload prevent
    event.preventDefault();
    
    // input value taken to a variable
    const input_value = input.value;

    if(input_value){


    } else{

        alert("please input all values")
    }

})