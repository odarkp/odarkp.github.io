// This is the script.js file for "My Exchange in Melbourne". It contains...

console.log("script loaded");

// First of all, I have to get get access to the postcard for the start animation, so I will use a const variable.
const postcard = document.querySelector("#postcard");
console.log(postcard);

// Open postcard
let opened = false;

postcard.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  postcard.classList.add("postcard-open");

  setTimeout(() => {
    scatterPhotos();
    showMessage();
  }, 800);
});

// I also need to get access to the photo area where the photos will be displayed.
const photoArea = document.querySelector("#photo-area");
console.log(photoArea);

function showMessage() {
  const msg = document.createElement("div");
  msg.textContent =
    "help me post all my memories to my family and friends back home";

  msg.style.position = "absolute";
  msg.style.top = "10%";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.fontSize = "18px";
  msg.style.textAlign = "center";
  msg.style.maxWidth = "400px";
  msg.style.opacity = "0";
  msg.style.transition = "opacity 1.5s ease";

  document.body.appendChild(msg);

  requestAnimationFrame(() => {
    msg.style.opacity = "1";
  });
}

// Flip functionality
function enableFlip(card) {
  let clickCount = 0;
  let clickTimer;

  card.addEventListener("click", () => {
    clickCount++;

    clickTimer = setTimeout(() => {
      if (clickCount === 2) {
        card.classList.toggle("flipped");
      }
      clickCount = 0;
    }, 250);
  });
}

// then I will choose to use an array of objects to store the photos,
// so that I can easily access them later when I want to display them on the website.
const photos = [
  {
    front: "photo1.png",
    back: "photo1-back.png",
  },
  {
    front: "photo2.png",
    back: "photo2-back.png",
  },
  {
    front: "photo3.png",
    back: "photo3-back.png",
  },
  {
    front: "photo4.png",
    back: "photo4-back.png",
  },
];

// Create photos
function createPhoto(photoData) {
  const card = document.createElement("div");

  card.classList.add("photo-card");

  card.innerHTML = `
    <div class="photo-face front">
      <img src="${photoData.front}">
    </div>

    <div class="photo-face back">
      <img src="${photoData.back}">
    </div>
  `;

  return card;
}

// Scatter photos
function scatterPhotos() {
  console.log("PHOTO TEST");
  photos.forEach((photoData) => {
    const card = createPhoto(photoData);

    photoArea.appendChild(card);

    // Start in centre
    card.style.left = "50%";
    card.style.top = "50%";

    // Wait one frame
    requestAnimationFrame(() => {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;

      card.style.left = `${randomX}px`;
      card.style.top = `${randomY}px`;
    });

    enableFlip(card);
    enableDrag(card);
  });
}

// Drag functionality
function enableDrag(card) {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  card.addEventListener("mousedown", (e) => {
    isDragging = true;

    offsetX = e.offsetX;
    offsetY = e.offsetY;

    card.style.zIndex = 1000;
    card.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    card.style.left = `${e.pageX - offsetX}px`;
    card.style.top = `${e.pageY - offsetY}px`;
  });

  document.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    isDragging = false;

    card.style.cursor = "grab";
    card.style.zIndex = "";

    const x = e.pageX;
    const y = e.pageY;

    // 👉 DROP INTO POSTCARD
    if (isInsidePostcard(x, y)) {
      sendToPostcard(card);
    }
  });
}

// Drop functionality
function isInsidePostcard(x, y) {
  const rect = postcard.getBoundingClientRect();

  return x > rect.left && x < rect.right && y > rect.top && y < rect.bottom;
}

function sendToPostcard(card) {
  card.style.transition = "transform 0.6s ease, opacity 0.6s ease";

  const rect = postcard.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const currentX = parseFloat(card.style.left);
  const currentY = parseFloat(card.style.top);

  const dx = centerX - currentX;
  const dy = centerY - currentY;

  card.style.transform = `translate(${dx}px, ${dy}px) scale(0.2)`;
  card.style.opacity = "0";

  setTimeout(() => {
    card.remove();
  }, 600);
}
