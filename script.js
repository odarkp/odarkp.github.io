const video = document.querySelector("#custom-video-player");

// when video plays
video.addEventListener("play", () => {
  document.body.style.animationPlayState = "running";
});

// when video paused
video.addEventListener("pause", () => {
  document.body.style.animationPlayState = "paused";
});

const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");

// progressbar logic
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here

// mute unmute logic

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

// now I want to create a function so that the user can interact with the button
muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (video.muted == true) {
    video.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    video.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

// volume change logic

const lowVolumeButton = document.querySelector("#low-volume-button");
console.log(lowVolumeButton);

const highVolumeButton = document.querySelector("#high-volume-button");
console.log(highVolumeButton);

// now I want to create a function so that the user can interact with the buttons
lowVolumeButton.addEventListener("click", lowerSound);

function lowerSound() {
  video.volume -= 0.5;
}

highVolumeButton.addEventListener("click", higherSound);

function higherSound() {
  video.volume += 0.5;
}

// skip to start & end logic

const skipToStartButton = document.querySelector("#skip-to-start-button");
console.log(skipToStartButton);

const skipToEndButton = document.querySelector("#skip-to-end-button");
console.log(skipToEndButton);

// now I want to create a function so that the user can interact with the skip to start button
skipToStartButton.addEventListener("click", skipToStart);

// now I want to create a function so that the user can interact with skip to end button
skipToEndButton.addEventListener("click", skipToEnd);

function skipToStart() {
  // go to start
  video.currentTime = 0;
}

function skipToEnd() {
  // go to end
  video.currentTime = 240;
}

// fast forward & rewind logic

const rewindButton = document.querySelector("#rewind-button");
console.log(rewindButton);

const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

// now I want to create a function so that the user can interact with the rewind button
rewindButton.addEventListener("click", goBack);
// now I want to create a function so that the user can interact with the fast forward button
fastForwardButton.addEventListener("click", goForward);

function goBack() {
  // go back 10 seconds
  video.currentTime -= 10;
}

function goForward() {
  // go forward 10 seconds
  video.currentTime += 10;
}

// fullscreen logic

const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullscreen);

// function to make video go fullscreen on doubleclick
video.addEventListener("dblclick", goFullscreen);

function goFullscreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// replay logic

const replayButton = document.querySelector("#replay-button");
console.log(replayButton);

// function to make video replay
replayButton.addEventListener("click", replayVideo);

function replayVideo() {
  // go back to start of video
  video.currentTime = 0;

  // then I automatically make the video play again
  video.play();
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
