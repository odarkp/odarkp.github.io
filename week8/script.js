const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// then, I need to get access to a button Element, so I will use a const variable
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// now I want to create a function so that the user can interact with the video
playPauseButton.addEventListener("click", toggleVideo);

function toggleVideo() {
  if (myVideo.paused == true || myVideo.ended == true) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}

// mute unmute logic

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

// now I want to create a function so that the user can interact with the button
muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (myVideo.muted == true) {
    myVideo.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myVideo.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

// step logic (button 1 & 2)

const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

// now I want to create a function so that the user can interact with the "1" button
step1Button.addEventListener("click", gotoStep1);
// now I want to create a function so that the user can interact with the "2" button
step2Button.addEventListener("click", gotoStep2);

function gotoStep1() {
  // set the time for when step1 occurs
  myVideo.currentTime = 17.0;
}

function gotoStep2() {
  // set the time for when step2 occurs
  myVideo.currentTime = 27.0;
}

// heart button logic

const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

// Now I need to get access to the likes count so it can be displayed besides the heart button
const likes = document.querySelector("#likes");
console.log(likes);

// then I need to use a let variable to make the like count increase on click
let = likesCount = 0;

heartButton.addEventListener("click", addLike);

function addLike() {
  likesCount++;
  console.log(likesCount);

  //   Here I am adding a function to display the likes count
  likes.textContent = likesCount;
}
