// variable intro and declaretion 

const genaratedPin = document.getElementById("genaratedPin");
const pinGenarateButton = document.getElementById("pinGenarateButton");
const showDailedValue = document.getElementById("showDailedValue");
const eraseButton = document.getElementById("erase");
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

        //earse button start
        if (button.innerHTML === "x") {

            if (showDailedValue.value) {

                showDailedValue.value = showDailedValue.value.slice(0,-1);

            } else {

                alert("here is nothing to erase");
            }
            //earse button start
            
        } else {

            showDailedValue.value += button.innerHTML;
        }

    });

});

// taking input from keyboard for pin
window.addEventListener("keydown", (e) => {

    //checking is it digit or string
    if (isFinite(e.key)) {

        showDailedValue.value += e.key;

    } else if (e.key === "Backspace") {

        //earse button start
        if (showDailedValue.value) {

            showDailedValue.value = showDailedValue.value.slice(0,-1);

        } else {

            alert("here is nothing to erase");
        }

    } else{

        alert("please enter digits");
    };

});


// pin match section end