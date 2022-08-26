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

let inputField = document.getElementById("myInput");
const addButton = document.getElementById("addBtn");
let myList = document.getElementById("myList");

let todoArray = [];

function addTodo(inputField) {
  const todo = {
    inputField,
    id: Date.now(),
  };

  todoArray.push(todo);
}


function addItem(){
	let listItem = document.createElement("li");
	
  	if (inputField.value == ""){
		alert("Please enter a task");
		return false;
	} else {
		listItem.innerText = inputField.value;
		myList.appendChild(listItem);
		addTodo(inputField);
  	inputField.value = "";
  	listItem.addEventListener('click', function(){
  		listItem.style.textDecoration = "line-through";
  	});
	}

  	console.log(todoArray);
}
