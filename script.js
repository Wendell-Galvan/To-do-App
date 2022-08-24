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

// let inputField = document.getElementById("myInput");
// const addButton = document.getElementById("addBtn");
// let myList = document.getElementById("myList");




// function addItem(){
// 	let toDoArray = [];
// 	let listItem = document.createElement("li");
	
//   	listItem.innerText = inputField.value;
//   	let newTask = listItem.innerText;
// 	toDoArray.push(newTask);
//   	// console.log(newTask);
//   	console.log(toDoArray);

//   	myList.appendChild(listItem);
//   	inputField.value = "";
//   	listItem.addEventListener('click', function(){
//   		listItem.style.textDecoration = "line-through";
//   	})
// }

let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  console.log(todoItems);
}

function addItem(){
	const input = document.getElementById("myInput");

	const text = input.value.trim();
	  if (text !== '') {
	    addTodo(text);
	    input.value = '';
	    input.focus();
	  }
}