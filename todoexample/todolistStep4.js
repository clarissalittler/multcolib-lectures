window.onload = function () {
    var inputElement = document.getElementById("input");
    var todoList = document.getElementById("list");
    var addButton = document.getElementById("add");

    addButton.addEventListener("click", function () {
	console.log("Is this working?");
	var itemText = document.createTextNode(inputElement.value);
	var newItem  = document.createElement("li");
	newItem.appendChild(itemText);
	todoList.appendChild(newItem);
	inputElement.value = "";
    });
}
