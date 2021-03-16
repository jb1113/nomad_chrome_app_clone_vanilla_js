const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greeting");

const LS_USER = "userName";
const CN_SHOWING = "showing";

function saveName(name) {
	localStorage.setItem(LS_USER, name);
}

function handleSubmit(event) {
	event.preventDefault();
	const currentValue = input.value;
	paintGreeting(currentValue);

	saveName(currentValue);
}

function askForName() {
	form.classList.add(CN_SHOWING);
	form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
	form.classList.remove(CN_SHOWING);
	greeting.classList.add(CN_SHOWING);
	greeting.innerText = `Welcome ${text}`;	
}

function loadName() {
	const currentUser = localStorage.getItem(LS_USER);

	if (currentUser === null) {
		askForName();
	} else {
		paintGreeting(currentUser);
	}
}

function init() {
	loadName();
}

init();
