
// variable declaretion and intro done

let value1 = document.getElementById("input_one");
let value2 = document.getElementById("input_two");
let display = document.getElementById("tvDisplay");
let open_popup = document.getElementById("popup");

// function for ok button

function close_popup(){

    open_popup.classList.remove("open_popup");

}


// add button function


function add(){

    display.innerText = "Result:";
    if ((value1.value) && (value2.value)) {

        let sum = parseInt(value1.value) + parseInt(value2.value);
        display.innerText = display.innerText+" "+sum;

    } else{

        open_popup.classList.add("open_popup");

    }

}


// sub button function

function sub(){

    display.innerText = "Result:";
    if ((value1.value) && (value2.value)) {

        let sub = parseInt(value1.value) - parseInt(value2.value);
        display.innerText = display.innerText+" "+sub;

    } else{

        open_popup.classList.add("open_popup");

    }

}