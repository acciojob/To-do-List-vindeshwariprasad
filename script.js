document.addEventListener("DOMContentLoaded", () => {
    let addTodoBtn = document.getElementById("addTodoBtn");

    addTodoBtn.addEventListener("click", () => {
        let newTodoInput = document.getElementById("newTodoInput");
        let todoList = document.getElementById("todoList");
        let newTodoValue = newTodoInput.value.trim();

        if (newTodoValue !== "") {
            let listItem = document.createElement("li");
            listItem.textContent = newTodoValue;
            todoList.appendChild(listItem);
            newTodoInput.value = ""; // Clear the input field after adding todo
        } else {
            alert("Please enter a valid todo.");
        }
    });
});



