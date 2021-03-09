console.log("I'm Working. I'm JS. I'm Beautiful. I'm worth it");

// let a = 100;
const a = 100;

let b = a + 50;

// a = 200; Assignment to constant variable

console.log(b, a);

// String, "text"
const name = "JB";
console.log(name)

// Boolean, true or false
const married = false;
console.log(married);

// Number, 12345
const age = 30;
console.log(age);

// Float 3.141592
const PI = 3.14;
console.log(PI);

// Array
const monday = "Mon";
const tuesday = "Tue";
const wednesday = "Wed";
const thursday = "Thu";
const friday = "Fri";
const saturday = "Sat";
const sunday = "Sun";
console.log(monday, tuesday, wednesday, thursday, friday, saturday, sunday);

const something = "dog";
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 123, true, "miho", something];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);
// console.log(daysOfWeek[100]); undefined 

// Object
const identity = ["JB", 33, "Male", "developer"];
console.log(identity);
console.log(identity[0]);

const info = {
	name:"JB",
	age:33,
	gender:"Male",
	job:"Developer",
	hobby:["camping", "food", "movie", "music"],
	favorite: [{lover:"SY", pet:"miho"}]
}
console.log(info);

console.log(info.job);
info.job = "Backend Developer";
console.log(info.job);

// info = true; Assignment to constant variable

// Function
console.log(console);

console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');

console.log('Hello JB');
console.log('Hello SY');
console.log('Hello Miho');
console.log('Hello Tami');

console.log('Greeting JB');
console.log('Greeting SY');
console.log('Greeting Miho');
console.log('Greeting Tami');

function sayHello() {
	console.log('Hello');
}

sayHello();
console.log('Hi');

function greeting(name) {
	console.log('Greeting', name);
}

greeting('JB');
greeting('SY');
greeting('Miho');
greeting('Tami');

function sayHobby(name, hobby) {
	// console.log('Hello ' + name + ' you like ' + hobby);
	// console.log('Hello', name, ' you like ', hobby);
	console.log(`Hello ${name} you like ${hobby}`);
}

sayHobby('JB', 'camping');
sayHobby('SY', 'exercise');
sayHobby('Miho', 'walk');
sayHobby('Tami', 'eat');

// Return
function returnHobby(name, hobby) {
	return `Hello ${name} you like ${hobby}`;
}

const greetJB = returnHobby('JB', 'camping');
const greetSY = returnHobby('SY', 'exercise');
const greetMiho = returnHobby('Miho', 'walk');
const greetTami = returnHobby('Tami', 'eat');

// Calculator
const calculator = {
	add: function(left, right) {
		return left + right;
	},
	sub: function(left, right) {
		return left - right;
	}, 
	mul: function(left, right) {
		return left * right;
	},
	div: function(left, right) {
		return left / right;
	},
	pow: function(left, right) {
		return left ** right;
	}
}

const plus = calculator.add(10, 5);
const minus = calculator.sub(10, 5);
const multiply = calculator.mul(10, 5);
const divide = calculator.div(10, 5);
const power = calculator.pow(10, 5);

console.log(plus);
console.log(minus);
console.log(multiply);
console.log(divide);
console.log(power);

// DOM
console.log(document);

const title = document.getElementById("title");
console.log(title);
console.error("Error");

// DOM Function
title.innerHTML = "Hello! from JS!";;

// Modifying the DOM with JS
console.dir(title);
title.style.color = "tomato";

console.dir(document);
document.title = "clone chrome app Momentum";

// QuerySelector
const query_title = document.querySelector("#title");

// Event and Event Listeners
console.log(window);

function handleResize() {
	console.log("I have been resized");
}

/*
function handleResize(event) {
	console.log(event);
}
*/

window.addEventListener("resize", handleResize);
// window.addEventListener("resize", handleResize(event));

// Event Handlers
function handleClick() {
	title.style.color = "white";
}

title.addEventListener("click", handleClick);

// If, Else
if (10 > 5) {
	console.log("if");
} else {
	console.log("else");
}

if ("10" === 10) {
	console.log("if");
} else {
	console.log("else");
}

if ("JB" === "SY") {
	console.log("if");
} else {
	console.log("else");
}

// Else If
if ("10" === 10) {
	console.log("if");
} else if ("10" === "10") {
	console.log("else if");
} else {
	console.log("else");
}

if ("JB" === "SY") {
	console.log("if");
} else if ("JB" === "JB") {
	console.log("else if");
} else {
	console.log("else");
}

// And
if (10 > 5 && "JB" === "JB") {
	console.log("if");
} else {
	console.log("else");
}

if (10 > 5 && "10" === 10) {
	console.log("if");
} else {
	console.log("else");
}

// Or
if (10 > 10 || "10" === "10") {
	console.log("if");
} else {
	console.log("else");
}

if (10 > 10 || "10" === 10) {
	console.log("if");
} else {
	console.log("else");
}

// Prompt
// prompt("Ask something from user");
const drinking = prompt("How old are you?");
console.log(drinking);

if (drinking > 18) {
	console.log("you can drink");
} else {
	console.log("you can't");
}

if (drinking >= 18 && drinking <= 21) {
	console.log("you can drink but you should not");
} else if (drinking > 21) {
	console.log("go ahead");
} else {
	console.log("too young");
}

// DOM if else Function practice
const heading = document.querySelector("#heading");

const BASE_COLOR = "white";
const OTHER_COLOR = "rgb(52, 73, 94)";

function handlerClick() {
	const currentColor = heading.style.color;

	if (currentColor === BASE_COLOR) {
		heading.style.color = OTHER_COLOR;
	} else {
		heading.style.color = BASE_COLOR;
	}
}

function init() {
	heading.style.color = BASE_COLOR;
	heading.addEventListener("click", handlerClick);
}
init();

// MDN javascript DOM event example
function handleOffline() {
	alert("Bye Bye");
}

function handleOnline() {
	aler("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
