//variable and declaretion
const picker_button = document.getElementById("pick");
const clear_all = document.getElementById("clear_all");
const picked_color_lists = document.querySelector(".picked_color_lists");

//defualt color list section hide
picked_color_lists.style.display = "none";

//eye droper starting event for picking color
picker_button.addEventListener("click", async() => {

    //eye dropper method initialized
    const eyeDropper = new EyeDropper();
    const colour = await eyeDropper.open();

    //after picking color display will be visible
    picked_color_lists.style.display = "flex"

    picked_color_lists.innerHTML += `<li id="color">
    <div class="color_demo" style="background-color: ${colour.sRGBHex};"></div>
    <span class="color_value">${colour.sRGBHex}</span>
    </li>`;


});