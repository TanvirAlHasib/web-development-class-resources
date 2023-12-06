// variable declaretion and intro

const form = document.getElementById("new_task");
const input = document.getElementById("input_task");
const tasklist = document.querySelector(".taskList");


// for form section

form.addEventListener("submit", (event)=>{

    // reload prevent
    event.preventDefault();

    // input value taken to a variable
    const input_value = input.value;
    

    if(input_value){

        // clear input area 
        input.value = "";

        // task list content div creating
        const task_list_content = document.createElement("div");
        task_list_content.classList.add("taskListContent");
        tasklist.appendChild(task_list_content);

        // taskListInputDisplay div creating
        const taskListInputDisplay = document.createElement("div");
        taskListInputDisplay.classList.add("taskListInputDisplay");
        task_list_content.appendChild(taskListInputDisplay);

        // input_display creating
        const input_display = document.createElement("input");
        input_display.classList.add("input_display");
        input_display.value = input_value;
        input_display.setAttribute("readOnly", "readOnly");
        taskListInputDisplay.appendChild(input_display);

        //edit button creating
        const edit_button = document.createElement("button");
        edit_button.classList.add("edit");
        edit_button.innerHTML="EDIT";
        taskListInputDisplay.appendChild(edit_button);

        //edit button fuctional
        edit_button.addEventListener("click", () => {

            input_display.removeAttribute("readOnly");
            edit_button.innerHTML = "SAVE";

        })

        // delete button creating
        const delete_button = document.createElement("button");
        delete_button.classList.add("delete");
        delete_button.innerHTML="DELETE";
        taskListInputDisplay.appendChild(delete_button);

        //complete button creating
        const complete_button = document.createElement("button");
        complete_button.classList.add("complete");
        complete_button.innerHTML="COMPLETE";
        taskListInputDisplay.appendChild(complete_button);


    } else{

        alert("please input all values");
    }

});