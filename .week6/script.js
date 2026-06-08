// Variables - storage boxes for value
// let & const - let - can change its value, const - remain fixed
// numeric, string, boolean, null, undefined, object, array

// numeric - used for math operations
let a = 10;

// string - text containing alphanumeric value
const name = "rohit";

// boolean - true or false
let isItRaining = false;

// object - group of properties belonging to the same entity (Student, properties; age, name, id)
let student = {
  name: "rohit",
};
// student.name student.id

// arrays - collection but they all are of same type
let grades = [34, 65, 68, 79];
let names = ["rohit", "a", "b", "c"];
// grades[2] = 68 IMP: arrays start at 0
// grades.length

// conditional statement
// if (condition) {true -> execute this}
// else {false -> execute this}

if (isItRaining) {
  console.log("yes it is");
} else {
  console.log("no");
}

// loops - iterate through a function or set of instructions
// for loop
for (let i = 0; i < names.length; i++) {
  console.log("hello", names[i]);
}

// functions
let b = 10;
add(a, b);
// let c = a+b;

function add(a, b) {
  let c = a + b;
  console.log("value of c", c);
}
// this is called defining a funtion

add(a, b);
// this is calling a funtion - function executes when it is called
add(4, 5);
let c = add(a, 50);
console.log("value of c", c);

function greet(name) {
  let greetings = "hello" + name;
  return greetings;
}

let welcome = greet(" alice");
console.log(welcome);
console.log(greet(" Oda"));
