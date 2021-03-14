const form = document.querySelector(".js-form"),
input = form.querySelectorAll("input"),
greeting = document.querySelector(".js-greeting");

const LS_USER = "userName";
const CN_SHOWING = "showing";

function paintGreeting(text) {
	form.classList.remove(CN_SHOWING);
	greeting.classList.add(CN_SHOWING);
	greeting.innerText = `Welcome ${text}`;	
}

function loadName() {
	const currentUser = localStorage.getItem(LS_USER);

	if (currentUser === null) {
		// user is not
	} else {
		paintGreeting(currentUser);
	}
}

function init() {
	loadName();
}

init();
