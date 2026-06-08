console.log("script loaded");

const postcard = document.getElementById("postcard");
const postcardImg = document.getElementById("postcardImg");
const iconContainer = document.getElementById("iconContainer");

let opened = false;

let iconsRemaining = 0;

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
  const iconsData = [
    ["assets/img1-front.png", "assets/img1-back.png"],
    ["assets/img2-front.png", "assets/img2-back.png"],
    ["assets/img3-front.png", "assets/img3-front.png"],
    ["assets/img4-front.png", "assets/img4-front.png"],
    ["assets/img5-front.png", "assets/img5-front.png"],
    ["assets/img6-front.png", "assets/img6-front.png"],
    ["assets/img7-front.png", "assets/img7-front.png"],
    ["assets/img8-front.png", "assets/img8-front.png"],
  ];
  console.log("spawning icon");
  iconsRemaining = iconsData.length;

  iconsData.forEach((imgs, i) => {
    const icon = document.createElement("div");
    icon.classList.add("icon");

    const iconSize = 200; // this value must match CSS Oda!
    const padding = 20;

    // This if function is to create one of my icons (the photobooth one) bigger than the other icons,
    // to make it more legible and enhance the user experience.
    if (i === 1) {
      icon.style.width = "300px";
      icon.style.height = "300px";
    }

    if (i === 2 || i === 3 || i === 4) {
      icon.style.width = "50px";
      icon.style.height = "50px";
    }

    const maxX = window.innerWidth - iconSize - padding;
    const maxY = window.innerHeight - iconSize - padding;

    let x, y;

    const card = postcard.getBoundingClientRect();

    do {
      x = padding + Math.random() * maxX;
      y = padding + Math.random() * maxY;
    } while (
      x > card.left - iconSize &&
      x < card.right + iconSize &&
      y > card.top - iconSize &&
      y < card.bottom + iconSize
    );

    // original function, but didn't work because icons kept spawning outside of the viewframe...
    // const card = postcard.getBoundingClientRect();

    // let x, y;

    // // keep generating until outside postcard
    // do {
    //   x = Math.random() * window.innerWidth;
    //   y = Math.random() * window.innerHeight;
    // } while (
    //   x > card.left &&
    //   x < card.right &&
    //   y > card.top &&
    //   y < card.bottom
    // );

    // icon.style.left = `${x}px`;
    // icon.style.top = `${y}px`;

    icon.style.left = `${x}px`;
    icon.style.top = `${y}px`;

    icon.innerHTML = `
  <div class="icon-inner">
    <img class="front" src="${imgs[0]}"/>
    <img class="back" src="${imgs[1]}"/>
  </div>
`;

    // This functions closes the postcard after all icons have been dragged into it.
    function closePostcard() {
      // wait a moment so the player sees the last photo go in
      setTimeout(() => {
        postcard.classList.remove("open");
      }, 1000);
    }

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

      // ONLY drop here
      if (isInsidePostcard(currentIcon)) {
        currentIcon.remove();
        iconsRemaining--;
        if (iconsRemaining === 0) {
          closePostcard();
        }
      }

      isDragging = false;
      currentIcon = null;
    });

    // Check if icon is inside postcard area
    function isInsidePostcard(icon) {
      const card = postcard.getBoundingClientRect();
      const rect = icon.getBoundingClientRect();

      return (
        rect.left > card.left &&
        rect.right < card.right &&
        rect.top > card.top &&
        rect.bottom < card.bottom
      );
    }

    // Flip on double click
    let flipped = false;
    icon.addEventListener("dblclick", () => {
      flipped = !flipped;
      const inner = icon.querySelector(".icon-inner");
      inner.style.transform = flipped ? "rotateY(180deg)" : "rotateY(0deg)";
    });

    iconContainer.appendChild(icon);
  });
}
