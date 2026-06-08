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

// fullscreen logic

const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullscreen);

// function to make video go fullscreen on doubleclick
myVideo.addEventListener("dblclick", goFullscreen);

function goFullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// progressbar logic

const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  //   console.log(myVideo.currentTime);
  let progress = (myVideo.currentTime / myVideo.duration) * 100;

  // //   use Math.floor function to see the progress as numbers in the javascript console
  //   let progress = Math.floor((myVideo.currentTime / myVideo.duration) * 100);

  console.log(progress);
  progressBar.style.width = progress + "%";
}

// videolist logic - how to change between medias!

// firstly, access all your media through their id's
const videoList = [
  { id: 1, src: "stardust.mp4", name: " Stardust" },
  { id: 2, src: "zenscape.mp4", name: " Zenscape" },
  {
    id: 3,
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    name: " Music Video",
  },
];

// then create functions for each video that changes the image source in the javascript upon click
const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);
stardustButton.addEventListener("click", function () {
  chooseVideo(0);
});

const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);
zenscapeButton.addEventListener("click", function () {
  chooseVideo(1);
});

const musicvideoButton = document.querySelector("#musicvideo-vid-button");
console.log(musicvideoButton);
musicvideoButton.addEventListener("click", function () {
  chooseVideo(2);
});

const msg = document.querySelector("#msg");
console.log(msg);

// create a function that actually changes the media/video src on the webage
function chooseVideo(id) {
  console.log(videoList[id].name);
  msg.textContent = "now playing" + videoList[id].name;
  myVideo.src = videoList[id].src;
  myVideo.load();
  //   myVideo.play();
}
