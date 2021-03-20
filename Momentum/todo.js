const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input")
toDoList = document.querySelector(".js-toDoList");

const LS_TODOS = "toDos";

const toDos = [];

function saveToDos() {
	localStorage.setItem(LS_TODOS, JSON.stringify(toDos));
}

function paintToDo(text) {
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.lenght + 1;

	delBtn.innerText = "❌";
	span.innerText = text;

	li.appendChild(span);
	li.appendChild(delBtn);
	li.id = newId;
	toDoList.appendChild(li);

	const toDoObj = {
		text: text,
		id: newId;
	}
	toDos.push(toDoObj);
	saveToDos();
}

function handleSubmit(event) {
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value = "";
}

/*
function externalFunction(toDo) {
	paintToDo(toDo.text);
}
*/
function loadToDos() {
	const loadedToDos = localStorage.getItem(LS_TODOS);

	if (loadedToDos !== null) {
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function(toDo) {
			paintToDo(toDo.text);
		});
		// parsedToDos.forEach(externalFunction);
	}
}

function init() {
	loadToDos();
	toDoForm.addEventListener("submit", handleSubmit);
}

init();
