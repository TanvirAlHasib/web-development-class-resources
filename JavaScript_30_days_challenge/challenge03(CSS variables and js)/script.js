// variable intro and declaretion

const inputs = document.querySelectorAll(".element input");

inputs.forEach(input => {

    input.addEventListener("change", () => {

        console.log(input.name, input.value);

    });

});