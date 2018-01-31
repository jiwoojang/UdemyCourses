// The logic for the basic to do List

// The list variable
var todos = [];

// The user input
var input = prompt("Please enter a command");

// Only the quit command will break this loop
while (input !== "quit") {
  if (input === "list") {
    listToDos();
  } else if (input === "new") {
    addToDo();
  } else if (input === "delete") {
    deleteToDo();
  }

  // Keep asking for commmands
  input = prompt("Please enter a command");
}

console.log("You quit the app");

function listToDos() {
  console.log("******");

  // List the items in the to do
  // Using forEach and an annonymous function
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });

  console.log("******");
}

function addToDo() {
  // Get the item the user wants to add to the list
  var newToDo = prompt("Enter a new to-do");
  todos.push(newToDo);

  console.log("Added todo");
}

function deleteToDo() {
  // Ask for index of item to be deleted
  var index = prompt("Please enter the index of the todo to delete");

  // Use splice to delete at index
  todos.splice(index, 1);
  console.log("Deleted todo");
}
