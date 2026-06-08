const hoverClickButton = document.querySelector("#hoverclick-button");
console.log(hoverClickButton);
hoverClickButton.addEventListener("click", gotoFLIP);

function gotoFLIP() {
  location.href = "flip.html";
}

const dragDropButton = document.querySelector("#dragdrop-button");
console.log(dragDropButton);
dragDropButton.addEventListener("click", function () {
  location.href = "drag.html";
});

const multiDragDropButton = document.querySelector("#multidragdrop-button");
console.log(multiDragDropButton);
multiDragDropButton.addEventListener("click", function () {
  location.href = "multidragdrop.html";
});

const findQueenButton = document.querySelector("#findqueen-button");
console.log(findQueenButton);
findQueenButton.addEventListener("click", function () {
  location.href = "findqueen.html";
});

const gameButton = document.querySelector("#completegame-button");
console.log(gameButton);
gameButton.addEventListener("click", function () {
  location.href = "game.html";
});
