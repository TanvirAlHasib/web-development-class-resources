// variable intro and declaretion

const inputs = document.querySelectorAll(".element input");

inputs.forEach(input => {

    input.addEventListener("change", () => {

        const suffix = input.dataset.sizing || "";
        document.documentElement.style.setProperty(`--${input.name}`,input.value + suffix);

    });

    input.addEventListener("mousemove", () =>{

        const suffix = input.dataset.sizing || "";
        document.documentElement.style.setProperty(`--${input.name}`,input.value + suffix);

    });

    input.addEventListener("click", () =>{

        const suffix = input.dataset.sizing || "";
        document.documentElement.style.setProperty(`--${input.name}`,input.value + suffix);

    });

});