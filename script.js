// Get references to the HTML elements
const userInput = document.querySelector("#userInput");
const enter = document.querySelector("#enter");
const todo = document.querySelector(".todo");
const Delete = document.querySelector("#delete");
const DeleteSelected = document.querySelector("#delete-selected");

// Check if the user input is empty or contains only whitespace
function inputLength() {
  return userInput.value.trim() === "";
}

// Perform different actions based on whether the input is empty or not
function if_else() {
  if (inputLength()) {
    alert("Please enter an item");
  } else {
    createElement();
  }
}

// Add a list item when the enter button is clicked
function addListAfterClick() {
  if_else();
}

// Add a list item when the Enter key is pressed
function addListAfterKeypress(event) {
  if (event.code === "Enter") {
    if_else();
  }
}

// Create a new list item and append it to the todo list
function createElement() {
  var todoText = document.createElement("span");
  var deleteButton = document.createElement("button");
  var todoItem = document.createElement("li");

  todoText.appendChild(document.createTextNode(userInput.value));

  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.addEventListener("click", deleteListItem);

  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);

  todo.insertAdjacentElement("beforeend", todoItem);
  userInput.value = "";
}

// Toggle the "done" class of a list item when its text is clicked
function toggleDone(event) {
  if (event.target.tagName === "SPAN") {
    event.target.parentElement.classList.toggle("done");
  }
}

// Delete the clicked list item
function deleteListItem(event) {
  var listItem = event.target.parentElement;
  listItem.remove();
}

// Delete all list items
function deleteAllItem() {
  if (todo.childElementCount === 0) {
    alert("There are no items to delete all");
    return;
  }
  while (todo.firstChild) {
    todo.firstChild.remove();
  }
}

// Delete selected list items with the "done" class
function deleteSelectedItem() {
  var isSelectedItem = todo.querySelector(".done");
  if (!isSelectedItem) {
    alert("Please select an item");
  } else {
    var selectedItem = todo.getElementsByClassName("done");
    while (selectedItem.length > 0) {
      selectedItem[0].remove();
    }
  }
}

// Event listeners
userInput.addEventListener("keypress", addListAfterKeypress);
enter.addEventListener("click", addListAfterClick);
todo.addEventListener("click", toggleDone);
Delete.addEventListener("click", deleteAllItem);
DeleteSelected.addEventListener("click", deleteSelectedItem);
