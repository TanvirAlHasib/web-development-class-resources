// variable intro and declaretion 

const genaratedPin = document.getElementById("genaratedPin");
const pinGenarateButton = document.getElementById("pinGenarateButton");
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

    }
}



//pin genarated section end