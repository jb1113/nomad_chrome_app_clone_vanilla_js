const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input")
toDoList = document.querySelector(".js-toDoList");

const LS_TODOS = "toDos";

let toDos = [];

/*
function filterFn(toDo) {
	return toDo.id !== li.id;
}
*/

function deleteToDo(event) {
	const btn = event.target;
	const li = btn.parentNode;

	toDoList.removeChild(li);

	// const cleanToDos = toDos.filter(filterFn);
	const cleanToDos = toDos.filter(function(toDo) {
		return toDo.id !== parseInt(li.id);
	});

	toDos = cleanToDos;
	saveToDos();
}

function saveToDos() {
	localStorage.setItem(LS_TODOS, JSON.stringify(toDos));
}

function paintToDo(text) {
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length + 1;

	delBtn.addEventListener("click", deleteToDo);
	delBtn.innerText = "❌";
	span.innerText = text;

	li.appendChild(span);
	li.appendChild(delBtn);
	li.id = newId;
	toDoList.appendChild(li);

	const toDoObj = {
		text: text,
		id: newId
	};
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
