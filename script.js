// This is the script.js file for "My Exchange in Melbourne". It contains...

// First of all, I have to get get access to the postcard for the start animation, so I will use a const variable.
const postcard = document.querySelector("#postcard");
console.log(postcard);

// I also need to get access to the photo area where the photos will be displayed.
const photoArea = document.querySelector("#photo-area");
console.log(photoArea);

// then I will choose to use an array of objects to store the photos,
// so that I can easily access them later when I want to display them on the website.
const photos = [
  {
    front: "photo1.png",
    back: "photo1-back.png",
  },
  {
    front: "images/photo2.jpg",
    back: "images/photo2-back.jpg",
  },
  {
    front: "images/photo3.jpg",
    back: "images/photo3-back.jpg",
  },
  {
    front: "images/photo4.jpg",
    back: "images/photo4-back.jpg",
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

// Open postcard

// postcard.addEventListener("click", function () {
//   postcard.classList.add("postcard-open");

//   scatterPhotos();
// });
postcard.addEventListener("click", function () {
  console.log("POSTCARD CLICKED!");

  postcard.classList.add("postcard-open");

  scatterPhotos();
});

// Flip functionality
function enableFlip(card) {
  card.addEventListener("dblclick", function () {
    card.classList.toggle("flipped");
  });
}

// Drag functionality
function enableDrag(card) {
  let isDragging = false;

  let offsetX;
  let offsetY;

  card.addEventListener("mousedown", function (e) {
    isDragging = true;

    offsetX = e.offsetX;
    offsetY = e.offsetY;

    card.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", function (e) {
    if (!isDragging) return;

    card.style.left = `${e.pageX - offsetX}px`;
    card.style.top = `${e.pageY - offsetY}px`;
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
    card.style.cursor = "grab";
  });
}
