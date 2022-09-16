// -A user must be able to add and delete a todo item, from the UI and from your storage.
// -Save each todo item as an object, with a key for the todo text and an "id" key that represents a random number you can use to search it by. 
// 	So, you should have an array of objects that you're saving in localStorage.
// -Hint: use JavaScript localStorage to store the todos. 
// -Hint: To convert an array into the string representation, you'll need JSON stringify. To convert it back to an array, you'll need JSON parse.
// -Send me the project for review and get started on the next project.

// You can store your Todos in an array, but keep in mind that localStorage can only store strings, so that means 
// you'll have to convert your array of todos into a string before you can store it. And when you retrieve it, you have to convert it 
// from a string back to an array. Those are all things you can do with JavaScript, so make sure to look those up.

// Also, you can use JavaScript to add an "onclick" attribute to elements you're using JavaScript to create. 
// This may be of note when thinking of how to delete the todo element. 

// const axios = require('axios').default;

//select elements 
const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');
const todosListEl = document.getElementById('todos-list');

//variables
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// 1st render
renderTodos();

//Form submit 
form.addEventListener('submit', function (event){
	event.preventDefault();

	saveTodo();
	renderTodos();
	localStorage.setItem('todos', JSON.stringify(todos));
})

//save todo
function saveTodo(){
  const todoValue = todoInput.value;

  //check if todo empty
  if (todoValue === ''){
  	alert("Please enter a todo item");
  } else {
  	const todo = {
	  	value: todoValue,
	  	checked: false,
	  	id: Date.now()
  	};

  	todos.push(todo);
  	todoInput.value = '';

  }
}

//render todos
function renderTodos(){
	//clear element before re-render
	todosListEl.innerHTML = '';

  todos.forEach((todo, index) => {
  	todosListEl.innerHTML += `
  	<div class="todo" id=${index}>			
		<i class="bi ${todo.checked ? 'bi-check-circle-fill' : 'bi-circle'}" data-action="check"></i>	
		<p class="${todo.checked ? 'checked' : ''}" data-action="check">${todo.value}</p>
		<i class="bi bi-trash" data-action="delete"></i>
	</div>
  	`;
  });
}

//Click event listener for todos
todosListEl.addEventListener('click', (event) => {
	const target = event.target;
	const parentElement = target.parentNode;

	if(parentElement.className !== 'todo') return;

	// todo id
	const todo = parentElement;
	const todoId = Number(todo.id);

	// target action 
	const action = target.dataset.action;

	action === "check" && checkTodo(todoId);
	action === "delete" && deleteTodo(todoId);

})

// check todo function 
function checkTodo(todoId){
	todos = todos.map((todo, index) => ({
			value: todo.value,
			checked: index === todoId ? !todo.checked : todo.checked,
			id: todo.id
		}));

	renderTodos();
	localStorage.setItem('todos', JSON.stringify(todos));
}

// delete todo function 
function deleteTodo(todoId){
	todos = todos.filter((todo, index) => index !== todoId);

	// re-render todos
	renderTodos();
	localStorage.setItem('todos', JSON.stringify(todos));
}

// if (localStorage.getItem('todos') === null){
// 	for (let i = 0; i < 5; i++){
// 		axios.get('https://jsonplaceholder.typicode.com/todos')
//      .then(response => {
//             todos.push(response.data[i].title);	
//         })
// 	}

// 	localStorage.setItem('todos', JSON.stringify(todos));
	
// }

if (localStorage.getItem('todos') === null){
	axios.get('https://jsonplaceholder.typicode.com/todos')
     .then(response => {   
	     	for (let i = 0; i < 5; i++){
	     		todos.push(response.data[i].title)
	     	}      
	     	console.log(todos);  	
     })
}

// localStorage.setItem('todos', JSON.stringify(todos));