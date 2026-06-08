console.log("script loaded");

const postcard = document.getElementById("postcard");
const postcardImg = document.getElementById("postcardImg");
const iconContainer = document.getElementById("iconContainer");

let opened = false;

// Open postcard animation
postcard.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  postcard.classList.add("open");
  postcardImg.src = "assets/postcard-open.png";

  spawnIcons();
});

// Create draggable/flippable icons
function spawnIcons() {
  const iconsData = [["assets/img1-front.png", "assets/img1-back.png"]];

  iconsData.forEach((imgs, i) => {
    const icon = document.createElement("div");
    icon.classList.add("icon");

    icon.style.left = `${50 + i * 80}px`;
    icon.style.top = `${350 + Math.random() * 100}px`;

    icon.innerHTML = `
      <img class="front" src="${imgs[0]}"/>
      <img class="back" src="${imgs[1]}"/>
    `;

    // Dragging
    let isDragging = false;
    let offsetX, offsetY;

    icon.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
      icon.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      icon.style.left = `${e.pageX - offsetX}px`;
      icon.style.top = `${e.pageY - offsetY}px`;
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      icon.style.cursor = "grab";

      // Drop into postcard detection
      if (isInsidePostcard(icon)) {
        icon.remove();
      }
    });

    // Flip on double click
    let flipped = false;
    icon.addEventListener("dblclick", () => {
      flipped = !flipped;
      icon.style.transform = flipped ? "rotateY(180deg)" : "rotateY(0deg)";
    });

    iconContainer.appendChild(icon);
  });
}

// Check if icon is inside postcard area
function isInsidePostcard(icon) {
  const card = postcard.getBoundingClientRect();
  const rect = icon.getBoundingClientRect();

  return !(
    rect.right < card.left ||
    rect.left > card.right ||
    rect.bottom < card.top ||
    rect.top > card.bottom
  );
}
