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
	job:"Developer"
	hobby:["camping", "food", "movie", "music"]
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
	console.log('Hello', name, ' you like ', hobby);
}

sayHobby('JB', 'camping');
sayHobby('SY', 'exercise');
sayHobby('Miho', 'walk');
sayHobby('Tami', 'eat');
