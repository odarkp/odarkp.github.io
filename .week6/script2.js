const heading = document.querySelector("h1");
console.log(heading);

console.log(heading.textContent);
// reading dom
heading.textContent = "I already know DOM";
// modifying / updating DOM

const subheading = document.querySelector("h2");
console.log(subheading);
for (let i = 0; i < subheading.length; i++) {
  console.log(subheading[i].textContent);
}

const subsubheading = document.querySelector("h3");
console.log(subsubheading);

// const subheading = document.querySelectorAll("h2");
// console.log(subheading);

const blueItems = document.querySelectorAll("blue-color");
console.log(blueItems);

const subHead = document.querySelector("#subhead-1");
console.log(subHead);

// innerHTML - how to modify the contents inside your HTML
const courseName = "Interactive Media";
const courseId = "OART1013";
const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
header.innerHTML += `<h3 class="blue-color"> ${courseName} </h3>
<button> ${courseId} </button>
<p> I am another paragraph </p>
`;

// adding button toggle interaction for Cat PFP
myButton = document.querySelector("#my-button");
console.log(myButton);
myCat.addEventListener("click", toggleMe);
myCat.addEventListener("mouseenter", addMe);
myCat.addEventListener("mouseleave", removeMe);

function toggleMe() {
  const myCat = document.querySelector("#my-cat");
  console.log(myCat);
  myCat.classList.toggle("round");
}

function removeMe() {
  myCat.classList.remove("round");
  myButton.textContent = "not clicked";
  body.style.backgroundcolor = "lime";
}
function addMe() {
  myCat.classList.add("round");
  myButton.textContent = "clicked";
}
