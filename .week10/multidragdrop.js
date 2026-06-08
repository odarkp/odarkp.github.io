const myCards = [
  { id: 1, name: "Queen", src: "queen.png" },
  { id: 2, name: "King", src: "king.png" },
  { id: 3, name: "Jack", src: "jack.png" },
  //   Here I can add multiple cards to the deck:
  //   { id: 4, name: "Ace", src: "ace.png" },
];

let cardComposition = "";

const deck = document.querySelector(".deck");
console.log(deck);

for (let i = 0; i < myCards.length; i++) {
  let content = `
 <div class="card-container">
            <div class="card" draggable="true">
              <div class="card-face"><img src="cloud.png" alt="Back" /></div>
              <div class="card-face flip">
                <img src="${myCards[i].src}" alt="${myCards[i].name}" />
              </div>
            </div>
          </div>`;
  cardComposition = cardComposition + content;
}

console.log(cardComposition);

deck.innerHTML = cardComposition;

const cards = document.querySelectorAll(".card");
console.log(cards);
let draggedCard = null;

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("dragstart", function (e) {
    draggedCard = cards[i];
    console.log(draggedCard);
  });
}

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

dropbox.addEventListener("dragover", function (e) {
  dropbox.innerHTML = "";
  e.preventDefault();
});

dropbox.addEventListener("drop", function (e) {
  //   let clone = draggedCard.cloneNode(true);
  let clone = draggedCard;
  dropbox.appendChild(clone);
  clone.addEventListener("click", function () {
    clone.classList.toggle("flip");
  });
  draggedCard = null;
});

// let cardComposition = "";

// for (let i = 0; i < myCards.length; i++) {
//   cardComposition += `
// <div class="card-container">
//         <div class="card" draggable="true">
//           <div class="card-face"><img src="cloud.png" alt="Back" /></div>
//           <div class="card-face flip">
//             <img src="${myCards[i].src}" alt="${myCards[i].name}" class="card-front" />
//           </div>
//         </div>
//       </div>
// `;
//   console.log(cardComposition);
// }

// const deck = document.querySelector(".deck");
// deck.innerHTML = "";
// deck.innerHTML = cardComposition;

// const cards = document.querySelectorAll(".card");
// console.log(cards);

// let draggedCard = null;

// const dropBox = document.querySelector(".dropbox");
// dropBox.innerHTML = "";
// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener("dragstart", function () {
//     draggedCard = cards[i];
//     dropBox.innerHTML = "";
//   });
// }

// dropBox.addEventListener("dragover", function (e) {
//   e.preventDefault();
// });

// dropBox.addEventListener("drop", function () {
//   if (draggedCard && !dropBox.querySelector(".card")) {
//     // const clone = draggedCard.cloneNode(true);
//     const clone = draggedCard;
//     clone.classList.remove("flip");
//     clone.addEventListener("click", function () {
//       clone.classList.toggle("flip");
//     });
//     dropBox.appendChild(clone);
//   }
// });
