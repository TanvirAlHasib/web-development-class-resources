// variable intro and declaretion 

const genaratedPin = document.getElementById("genaratedPin");
const pinGenarateButton = document.getElementById("pinGenarateButton");
const showDailedValue = document.getElementById("showDailedValue");
// from buttons div taking all buttons
const buttons = document.querySelectorAll(".buttons button");
let genaratedPinCount = 3;


// pin genarated section start



pinGenarateButton.addEventListener("click",randomPinGenaration);


//function for pin genarating
function randomPinGenaration() {
    const randomNumber = Math.floor((Math.random()*9000) + 1000);
    // to check that has user already genarated pin or not
    if (genaratedPinCount > 0) {
        
        genaratedPin.value = randomNumber;
        genaratedPinCount = genaratedPinCount - 1;

    } else{

        alert("you have already genarated pins three times");

    };
};



//pin genarated section end


// pin match section start

// taking input from display
buttons.forEach(button => {

    button.addEventListener("click", () => {

        showDailedValue.value += button.innerHTML;

    });

});

// taking input from keyboard for pin
window.addEventListener("keypress", (e) => {

    //checking is it digit or string
    if (isFinite(e.key)) {

        showDailedValue.value += e.key;

    } else {
        
        alert("please enter only digits");

    }

});


// pin match section end