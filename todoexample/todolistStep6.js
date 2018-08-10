window.onload = function () {
    var inputElement = document.getElementById("input");
    var todoList = document.getElementById("list");
    var addButton = document.getElementById("add");

    var listIndex = 0;
    
    addButton.addEventListener("click", function () {
	console.log("Is this working?");
	var itemText = document.createTextNode(inputElement.value + " ");
	var newItem  = document.createElement("li");
	var divvy = document.createElement("div");

	var deleteBut = document.createElement("button");
	var deleteText = document.createTextNode("X");

	newItem.setAttribute("id","item"+listIndex);
	
	deleteBut.appendChild(deleteText);
	
	divvy.appendChild(itemText);
	divvy.appendChild(deleteBut);
	
	newItem.appendChild(divvy);
	todoList.appendChild(newItem);
	inputElement.value = "";
    });
}
