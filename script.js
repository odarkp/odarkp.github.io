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

  // wait for postcard animation (3s delay + transition time)
  setTimeout(() => {
    spawnIcons();
  }, 3000); // same delay as the postcard
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
    let currentIcon = null;
    let offsetX = 0;
    let offsetY = 0;

    icon.addEventListener("mousedown", (e) => {
      isDragging = true;
      currentIcon = icon;

      const rect = icon.getBoundingClientRect();

      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      icon.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging || !currentIcon) return;

      currentIcon.style.left = `${e.clientX - offsetX}px`;
      currentIcon.style.top = `${e.clientY - offsetY}px`;
    });

    document.addEventListener("mouseup", () => {
      if (!isDragging || !currentIcon) return;

      currentIcon.style.cursor = "grab";

      // ONLY drop check here
      if (isInsidePostcard(currentIcon)) {
        currentIcon.remove();
      }

      isDragging = false;
      currentIcon = null;
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
