// variable intro and declaretion

const inputs = document.querySelectorAll(".element input");

inputs.forEach(input => {

    input.addEventListener("change", () => {

        const suffix = input.dataset.sizing || "";
        console.log(suffix);

    });

});