console.log("script loaded");

const postcard = document.getElementById("postcard");
const postcardImg = document.getElementById("postcardImg");
const iconContainer = document.getElementById("iconContainer");
const instructions = document.getElementById("instructions");
const thanksMessage = document.getElementById("thanksMessage");
const thanksMessageDelay = document.getElementById("thanksMessageDelay");

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

  // show instructions after postcard opens
  setTimeout(() => {
    instructions.classList.add("show");
  }, 3500);

  // hide instructions after 5 seconds
  setTimeout(() => {
    instructions.classList.remove("show");
  }, 13500);
});

// Create draggable/flippable icons
function spawnIcons() {
  const iconsData = [
    ["assets/img1-front.png", "assets/img1-back.png"],
    // ["assets/img2-front.png", "assets/img2-back.png"],
    // ["assets/img3-front.png", "assets/img3-front.png"],
    // ["assets/img4-front.png", "assets/img4-front.png"],
    // ["assets/img5-front.png", "assets/img5-front.png"],
    // ["assets/img6-front.png", "assets/img6-front.png"],
    // ["assets/img7-front.png", "assets/img7-front.png"],
    // ["assets/img8-front.png", "assets/img8-front.png"],
    // ["assets/img9-front.png", "assets/img9-back.png"],
    // ["assets/img10-front.png", "assets/img10-back.png"],
    // ["assets/img11-front.png", "assets/img11-back.png"],
    // ["assets/img12-front.png", "assets/img12-back.png"],
    // ["assets/img13-front.png", "assets/img13-back.png"],
    // ["assets/img14-front.png", "assets/img14-back.png"],
    // ["assets/img15-front.png", "assets/img15-back.png"],
    // ["assets/img16-front.png", "assets/img16-back.png"],
    // ["assets/img17-front.png", "assets/img17-back.png"],
    // ["assets/img18-front.png", "assets/img18-back.png"],
    // ["assets/img19-front.png", "assets/img19-back.png"],
    // ["assets/img20-front.png", "assets/img20-back.png"],
  ];
  console.log("spawning icon");
  iconsRemaining = iconsData.length;

  // When the icons spawn on my webpage, they tend to overlap each other, which is not ideal for the user experience.
  // Therefore I am creating an array to store the positions of the icons, and then I will check if the new icon is
  // spawning on top of an existing icon, and if it is, it will generate a new position.
  // The const variable under implements this in my code.
  const placedPositions = [];

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

    if (i === 2 || i === 3 || i === 4) {
      iconSize = 50;
      icon.style.width = "50px";
      icon.style.height = "50px";
    }

    const maxX = window.innerWidth - iconSize - padding;
    const maxY = window.innerHeight - iconSize - padding;

    let x, y;

    const card = postcard.getBoundingClientRect();

    const side = i < iconsData.length / 2 ? "left" : "right";

    let attempts = 0;
    let validPosition = false;

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

    // The code under is my "almost perfect" code for the even scattering of the icons,
    // but it still makes the icons overlap eachother a lot,so I will attemt to reduce
    // this overlapping with a new code over.
    // const side = i < iconsData.length / 2 ? "left" : "right";

    // if (side === "left") {
    //   x = padding + Math.random() * (card.left - iconSize - padding);
    // } else {
    //   x =
    //     card.right +
    //     padding +
    //     Math.random() *
    //       (window.innerWidth - card.right - iconSize - padding * 2);
    // }

    // y = padding + Math.random() * (maxY - padding);

    // The code under is my second attempt at scattering the icons, which worked better than the original one,
    // but it scattered most of the icons on the left side of the postcard, so I wanted to implement a new code
    // // that evenly distributes the icons on the screen.
    // let x, y;

    // const card = postcard.getBoundingClientRect();

    // do {
    //   x = padding + Math.random() * maxX;
    //   y = padding + Math.random() * maxY;
    // } while (
    //   x > card.left - iconSize &&
    //   x < card.right + iconSize &&
    //   y > card.top - iconSize &&
    //   y < card.bottom + iconSize
    // );

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
      // here I am creating a delay so the user can see the last photo go in
      setTimeout(() => {
        postcard.classList.remove("open");

        // this will show thank you AFTER closing of the postcard begins
        thanksMessage.classList.add("show");

        // this will show another delayed message after the initial thank you message.
        setTimeout(() => {
          thanksMessageDelay.classList.add("show");
        }, 2000);
      }, 5000);
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
