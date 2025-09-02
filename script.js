let todoInput = document.querySelector(".input");
let addTodoButton = document.querySelector(".button");
let todo;

addTodoButton.addEventListener("click", (e) => {
    e.preventDefault();
    todo = todoInput.value
    console.log("clicked");
    
})