//variable and declaretion
const picker_button = document.getElementById("pick");
const clear_all = document.getElementById("clear_all");
const picked_color_lists = document.querySelector(".picked_color_lists");

//picked colors array
let picked_colors_array = JSON.parse(localStorage.getItem("array") || '[]');

//if there is any picked colors remian in local storage that will show
if (picked_colors_array.length) {

    //after picking color display will be visible
    picked_color_lists.style.display = "flex"

    picked_colors_array.forEach(colour => {

        picked_color_lists.innerHTML += `<li id="color">
        <div class="color_demo" style="background-color: ${colour};"></div>
        <span class="color_value">${colour}</span>
        </li>`;

    });
    
} else{

    //defualt color list section hide
    picked_color_lists.style.display = "none";

}

//eye droper starting event for picking color
picker_button.addEventListener("click", async() => {

    try {
        
    //eye dropper method initialized
    const eyeDropper = new EyeDropper();
    const colour = await eyeDropper.open();

    //after picking color display will be visible
    picked_color_lists.style.display = "flex"

    picked_color_lists.innerHTML += `<li id="color">
    <div class="color_demo" style="background-color: ${colour.sRGBHex};"></div>
    <span class="color_value">${colour.sRGBHex}</span>
    </li>`;

    picked_colors_array.push(colour.sRGBHex);
    localStorage.setItem("array", JSON.stringify(picked_colors_array));


    } catch (error) {
        
        alert("something went wrong");

    }

});

//clear picked color
clear_all.addEventListener("click", () => {

    picked_color_lists.innerHTML = "";
    picked_colors_array.length = 0;
    localStorage.setItem("array",JSON.stringify(picked_colors_array))

});