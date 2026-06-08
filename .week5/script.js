console.log("hi");
// this is a comment

// Datatypes withing JS
// let is for defining variables or creating boxes whose value change
// const is for defining boxes for variables whose value is constant

// numbers , they can be both positive as well as negative as well as fractions

let MyStudentId = 1234;
console.log(MyStudentId);
MyStudentId = 4567;
console.log(MyStudentId);
let MyBudget = 30;
console.log("I can spend today: $", MyBudget);
let a = 20;
let b = 40;
let c = a + b;
console.log(c);

// boolean: mainly used for condition check
let isItFriday = true;
let isItPublicHoliday = true;

if (isItPublicHoliday) {
  console.log("thank god no class today");
} else {
  console.log("sorry classes today");
}

// null and undefined: null means empty box, and undefined means blind/unknown box
let iAmUnkown;
let emptyBox = null;
console.log(emptyBox);

// strings to store alphanumeric values including html
const myName = "Oda Roenning";
console.log("Hello", myName);

let myCity = "Melbourne";
console.log("I live in", myCity);

// objects to group things that belong to the same entity
// here you can have multiple datatypes
const myRecord = { myName: "Oda Roenning", id: 1234, city: "Melbourne" };
console.log(myRecord);
console.log(myRecord.city);

// I can make a list like under here but it is a lot easier to use arrays
const grade1 = 67;
const grade2 = 84;

// logical condition operations
if (grade1 >= 60 && grade1 < 70) {
  console.log("you got C");
} else if ("grade1>=70 && grade1 <80") {
  console.log("you got D");
}

// arrays is a collection of elements of the same kind
const grades = [67, 84, 93, 76];
const cities = ["Melbourne", "Oslo", "Perth"];
// array starts at 0 not 1
console.log("Grade of student 3", grades[2]);
console.log("Second city I visited", cities[1]);

// how to use for loop
const students = ["alice", "bob", "carol", "elisa", "peter"];
console.log(students.length);
for (let i = 0; i < students.length; i++) {
  console.log("hello", students[i]);
}

const expenditures = [34, 4, 67, 5, 10];
let totalSpend = 0;
// let g = expenditures[0];
// let h = expenditures[1];
// let i = expenditures[2];
// let d = expenditures[3];
// let e = expenditures[4];
// let f = g+h+i+d+e;
// console.log(f);
console.log(expenditures.length);
for (let i = 0; i < expenditures.length; i++) {
  totalSpend = totalSpend + expenditures[i];
  console.log("expenditure so far", totalSpend);
}
console.log("total expenditure is:", totalSpend);

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];
console.log(shoppingCart[0].price);
let purchases = 0;
console.log(shoppingCart.length);
for (let i = 0; i < shoppingCart.length; i++) {
  purchases = purchases + shoppingCart[i].price;
  console.log(
    "purchased:",
    shoppingCart[i].name,
    "for: $",
    shoppingCart[i].price,
  );
}
console.log("total purchase is:", purchases);
let discount = 0;
if (purchases > 100) {
  discount = purchases - 10 * (purchases / 100);
  console.log("dicounted price is:", discount);
}
