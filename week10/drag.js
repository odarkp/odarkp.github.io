const card = document.querySelector(".card");
console.log(card);

card.addEventListener("click", function (e) {
  card.classList.toggle("flip");
});

let draggedCard = null;

card.addEventListener("dragstart", function (e) {
  draggedCard = card;
  console.log(draggedCard);
});

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

dropbox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropbox.addEventListener("drop", function (e) {
  //   let clone = draggedCard.cloneNode(true);
  let clone = draggedCard;
  dropbox.appendChild(clone);
  draggedCard = null;
});
