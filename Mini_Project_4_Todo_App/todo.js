//Selection
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#input-Todo");
const todoAddButton = document.querySelector("#addTodo");
const todoLists = document.getElementById("lists");
const messageElement = document.getElementById("message");

//Show message
const showMessage = (text,status) => {
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(()=>{
        messageElement.textContent = "";
        messageElement.classList.remove(`bg-${status}`);
    },1000)
}

//delete todo
const getDeleteTodo = (event) =>{
    const selectedTodo = event.target.parentElement.parentElement.parentElement;
    todoLists.removeChild(selectedTodo);
    showMessage("Todo is deleted","danger");

    let todos = getTodosFromLocalstorage();
    todos = todos.filter((todo)=>todo.todoId !== selectedTodo.id);
    localStorage.setItem("myTodos",JSON.stringify(todos));
}

//create todo
const createTodo = (todoId,todoValue) =>{
    const todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("list-style");
    todoElement.innerHTML = `<span>${todoValue}</span>
    <span> <button class = "btn" id = "deleteButton"> 
    <i class = "fa fa-trash"> </i></button></span>`;
    todoLists.appendChild(todoElement);
    const deleteTodo = todoElement.querySelector("#deleteButton");
    deleteTodo.addEventListener("click",getDeleteTodo);
}

//get todos from local storage
const getTodosFromLocalstorage = () =>{
    return localStorage.getItem("myTodos") ? JSON.parse(localStorage.getItem("myTodos")) : [];
}

//add todo
const addTodo = (event) =>{
    event.preventDefault();
    const todoValue = todoInput.value;

    //unique id
    const todoId = Date.now().toString();

    createTodo(todoId,todoValue);
    showMessage("Todo is addaed","sucess");

    //set to localstorage
    const todos = getTodosFromLocalstorage();
    todos.push({todoId,todoValue});
    localStorage.setItem("myTodos",JSON.stringify(todos));
    todoInput.value = ""
}
//load todos
const loadTodos = () =>{
    const todos = getTodosFromLocalstorage();
    todos.map((todo)=>createTodo(todo.todoId,todo.todoValue));
}

//adding listener
todoForm.addEventListener("submit",addTodo);
window.addEventListener("DOMContentLoaded",loadTodos);