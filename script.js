// First of all, I created an initial console.log, to ensure that my Javascript file has loaded correctly.
console.log("script loaded");

// Then I need to get access to the all the elements I wish to include in the website, so I will use const variables.
const postcard = document.getElementById("postcard");
const iconContainer = document.getElementById("iconContainer");
const instructions = document.getElementById("instructions");
const thanksMessage = document.getElementById("thanksMessage");
const thanksMessageDelay = document.getElementById("thanksMessageDelay");
const stampButton = document.getElementById("stampButton");

// The let under tracks whether the postcard has already been opened or not, to prevent the opening animation from running multiple times.
let opened = false;

//  The let under tracks how many icons are left to post before the postcard can close.
let iconsRemaining = 0;

// This eventlistener opens the postcard when it is clicked and starts the website experience.
postcard.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  postcard.classList.add("open");

  // setTimeout creates a delay for the transitions of my website's elements.
  setTimeout(() => {
    spawnIcons();
  }, 5000); // (same delay as the postcard)

  // This function shows instructions after the postcard opens.
  setTimeout(() => {
    instructions.classList.add("show");
  }, 5000);

  // This function hides the instructions after 10 seconds.
  setTimeout(() => {
    instructions.classList.remove("show");
  }, 15000);
});

// I added the function under so that the user can click the stamp button to reopen the postcard and revisit the photos,
// which enhances the user experience by allowing them to interact with the postcard multiple times and not just once.
stampButton.addEventListener("click", (e) => {
  // The code right under prevents the click eventlistener from also triggering the postcard click event underneath.
  e.stopPropagation();
  // This hides end-screen elements.
  thanksMessage.classList.remove("show");
  thanksMessageDelay.classList.remove("show");
  stampButton.classList.remove("show");

  // Re-opens postcard.
  postcard.classList.add("open");

  // Doublechecks and removes any leftover icons.
  iconContainer.innerHTML = "";

  // Recreates the icons.
  setTimeout(() => {
    spawnIcons();
  }, 5000);

  // Shows instructions again.
  setTimeout(() => {
    instructions.classList.add("show");
  }, 5000);

  setTimeout(() => {
    instructions.classList.remove("show");
  }, 10000);
});

// The funtion under creates the draggable/flippable icons.
function spawnIcons() {
  iconContainer.innerHTML = "";

  // The const variable under lets me easily delete, modify and add new icons to the list.
  const iconsData = [
    ["assets/img1-front.png", "assets/img1-back.png"],
    ["assets/img2-front.png", "assets/img2-back.png"],
    ["assets/img3-front.png", "assets/img3-front.png"],
    ["assets/img4-front.png", "assets/img4-front.png"],
    ["assets/img5-front.png", "assets/img5-front.png"],
    ["assets/img6-front.png", "assets/img6-front.png"],
    ["assets/img7-front.png", "assets/img7-front.png"],
    ["assets/img8-front.png", "assets/img8-front.png"],
    ["assets/img9-front.png", "assets/img9-back.png"],
    ["assets/img10-front.png", "assets/img10-back.png"],
    ["assets/img11-front.png", "assets/img11-back.png"],
    ["assets/img12-front.png", "assets/img12-back.png"],
    ["assets/img13-front.png", "assets/img13-back.png"],
    ["assets/img14-front.png", "assets/img14-back.png"],
    ["assets/img15-front.png", "assets/img15-back.png"],
    ["assets/img16-front.png", "assets/img16-back.png"],
    ["assets/img17-front.png", "assets/img17-back.png"],
    ["assets/img18-front.png", "assets/img18-back.png"],
    ["assets/img19-front.png", "assets/img19-back.png"],
    ["assets/img20-front.png", "assets/img20-back.png"],
  ];
  console.log("spawning icon");
  iconsRemaining = iconsData.length;

  // When the icons spawn on my webpage, they tend to overlap each other, which is not ideal for the user experience.
  // Therefore I am creating an array to store the positions of the icons, and then I will check if the new icon is
  // spawning on top of an existing icon, and if it is, it will generate a new position.
  // The const variable under implements this in my code.
  const placedPositions = [];

  // This functions closes the postcard after all icons have been dragged into it.
  function closePostcard() {
    // Here I am creating a delay so the user can see the last photo go in.
    setTimeout(() => {
      postcard.classList.remove("open");

      // This function will show the thank you message after closing of the postcard begins.
      thanksMessage.classList.add("show");

      // This will show the stamp button at the same time as the thank you message,
      // so the user can click it to reopen the postcard and revisit the photos.
      stampButton.classList.add("show");

      // This will show another delayed message after the initial thank you message.
      // I am creating this delayed effect so the reading experience is also easier.
      setTimeout(() => {
        thanksMessageDelay.classList.add("show");
      }, 2000);
    }, 5000);
  }

  // The function under loops through each image pair (front+back) and creates one draggable icon.
  iconsData.forEach((imgs, i) => {
    const icon = document.createElement("div");
    icon.classList.add("icon");

    let iconSize = 200; // this value must match CSS Oda!
    const padding = 20;

    // This if function is to create one of my icons (the photobooth one) bigger than the other icons,
    // to make it more legible and enhance the user experience.
    if (i === 1) {
      iconSize = 300;
      icon.style.width = "300px";
      icon.style.height = "300px";
    }

    //  This if function is to create the letter beads smaller than the other icons.
    if (i === 2 || i === 3 || i === 4) {
      iconSize = 50;
      icon.style.width = "50px";
      icon.style.height = "50px";
    }

    // When working on the spawnIcons code I faced a lot of problems, such as: icons kept overlapping, icons kept spawning outside of the viewframe,
    // and most of the icons kept spawning in the same area on my webpage. I had to make multiple attempts to resolve these issues to ensure a smooth UX and clean UI,
    // however because of the limitations to my knowledge of code, I used AI as a tool. I acknowledge the use of AI in this project to help me solve the problems I faced
    // while developing the code for the spawning of the icons. Although I chose to use AI in this part of my development process, I still made sure that I completely
    // understood the code suggestions it was giving me, so I could learn in the process.

    const maxX = window.innerWidth - iconSize - padding;
    const maxY = window.innerHeight - iconSize - padding;

    let x, y;

    const card = postcard.getBoundingClientRect();

    // This const variable places half of the icons I have on each side of the postcard, ensuring a more balanced layout, and solving my problem where most of the icons
    // tend to spawn on one side of the postcard.
    const side = i < iconsData.length / 2 ? "left" : "right";

    let attempts = 0;
    let validPosition = false;

    // The function under solves my problem of heavily overlapping icons, where it keeps generating random positions (up to 100), and then stops when it finds a valid position for the icon.
    while (!validPosition && attempts < 100) {
      attempts++;

      if (side === "left") {
        x = padding + Math.random() * (card.left - iconSize - padding);
      } else {
        x =
          card.right +
          padding +
          Math.random() *
            (window.innerWidth - card.right - iconSize - padding * 2);
      }

      y = padding + Math.random() * (maxY - padding);

      validPosition = true;

      for (const pos of placedPositions) {
        const dx = x - pos.x;
        const dy = y - pos.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        // In this code, this if function is important as it determines the distance between the icons,
        // so I can easily adjust it by tweaking the value.
        if (distance < 100) {
          validPosition = false;
          break;
        }
      }
    }

    placedPositions.push({ x, y });

    icon.style.left = `${x}px`;
    icon.style.top = `${y}px`;

    icon.innerHTML = `
  <div class="icon-inner">
    <img class="front" src="${imgs[0]}"/>
    <img class="back" src="${imgs[1]}"/>
  </div>
`;

    // Here I am creating the code for dragging.
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

      // This function checks whether the icon has been dropped completely inside the postcard.
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

    // This function doublechecks if icon has been completely dragged inside postcard area, and if true, the icon is removed and regarded as successfully
    // added inside the postcard.
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

    // This let variable tracks whether the icon is currently showing its front or back side.
    let flipped = false;
    // Flips the icon on dblclick!
    icon.addEventListener("dblclick", () => {
      flipped = !flipped;
      const inner = icon.querySelector(".icon-inner");
      inner.style.transform = flipped ? "rotateY(180deg)" : "rotateY(0deg)";
    });

    iconContainer.appendChild(icon);

    // For finishing touches, I also made the icons slowly fade in so all the elements have the same transition effects.
    setTimeout(() => {
      icon.classList.add("show");
    }, 50);
  });
}
