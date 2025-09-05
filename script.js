let todoInput = document.querySelector(".input");
let addTodoButton = document.querySelector(".button");
let showTodos = document.querySelector(".todos-container")
let todo;
let todoList = [];

// Create a function for get a unique id
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

addTodoButton.addEventListener("click", (e) => {
    e.preventDefault();
    todo = todoInput.value;
    // console.log(todo);
    if (todo.length > 0){
        todoList.push({id: uuid(), todo, isCompleted : false})
    }
    renderTodoList(todoList)
    
})

showTodos.addEventListener("click", (e) => {
    let key = e.target.dataset.key;
    todoList = todoList.map(todo => todo.id === key ? {...todo, isCompleted: !todo.isCompleted} : todo);
    renderTodoList(todoList);
    console.log(todoList);
    
})

function renderTodoList(todoList){
    console.log(todoList);
    showTodos.innerHTML = todoList.map(({id, todo, isCompleted}) =>   `<div> <input type="checkbox" id="item-${id}"  data-key=${id}> <label for="item-${id}" class="todo todo-text t-pointer ${isCompleted ? "checked-todo" : ""}"  data-key=${id}>${todo}</label> <button> Delete </button> </div>`);
}

renderTodoList(todoList)