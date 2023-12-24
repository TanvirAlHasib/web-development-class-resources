// variable intro and declaretion 

const genaratedPin = document.getElementById("genaratedPin");
const pinGenarateButton = document.getElementById("pinGenarateButton");
const showDailedValue = document.getElementById("showDailedValue");
const eraseButton = document.getElementById("erase");
const submit = document.getElementById("submit");
const notificationSection = document.querySelector(".notificationSection");
const correctNotification = document.querySelector(".correctNotification");
const wrongNotification = document.querySelector(".wrongNotification");
const tryLeft = document.getElementById("tryLeft");
const tryLeftClass = document.querySelector(".tryLeft");
// from buttons div taking all buttons
const buttons = document.querySelectorAll(".buttons button");
let genaratedPinCount = 3;


//initially hiding notification section
notificationSection.style.display = "none";


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
        genaratedPin.value = "";
        pinGenarateButton.setAttribute("disabled", "disabled");
        submit.setAttribute("disabled", "disabled");
        tryLeft.innerHTML = "sorry, you have alredy genarated 3 pins, so no" // try left from p tag's innterHTML

    };
};



//pin genarated section end





// pin display section start



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
            //earse button end
            
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

        //erase button end

    } else{

        alert("please enter digits");
    };

});


// pin display section end




//pin match section start



// pin checking from display submit button
submit.addEventListener("click", () => {

    if (genaratedPin.value === "" || showDailedValue.value === "") {

        alert("please fill up all sections");
        
    } else {

        if (showDailedValue.value === genaratedPin.value) {
        
            notificationSection.style.display = "flex";
            wrongNotification.style.display = "none";
            correctNotification.style.display = "inline";
            genaratedPin.value = "";
            showDailedValue.value = "";
            pinGenarateButton.setAttribute("disabled", "disabled");
            submit.setAttribute("disabled", "disabled");
            submit.style.backgroundColor = "rgb(9, 224, 9)";
            tryLeftClass.innerHTML = "Pin has matched";
            tryLeftClass.style.color = "rgb(9, 224, 9)";
    
        } else {
            
            notificationSection.style.display = "flex";
            correctNotification.style.display = "none";
            wrongNotification.style.display = "inline";
            genaratedPin.value = "";
            showDailedValue.value = "";

            //try left section start 

            if (parseInt(tryLeft.innerHTML) > 1) {

                tryLeft.innerHTML = parseInt(tryLeft.innerHTML) - 1 ;

                if (parseInt((tryLeft.innerHTML)) === 2) {

                    tryLeftClass.style.color = "rgb(255, 165, 0)";
                    
                };
                
            } else {

                pinGenarateButton.setAttribute("disabled", "disabled");
                submit.setAttribute("disabled", "disabled");
                tryLeft.innerHTML = parseInt(tryLeft.innerHTML) - 1 ;
                tryLeftClass.style.color = "#FF0000";

            };

            //try left section end
    
        };
        
    };

});




//pin match section end