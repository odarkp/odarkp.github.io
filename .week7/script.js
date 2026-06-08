// first get access to the audio element so that we can control it with javascript

const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

// access my video
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// similarly access the play button
const playButton = document.querySelector("#play-button");
console.log(playButton);

// create a function to make the button play an audio upon clicking
playButton.addEventListener("click", playAudio);

function playAudio() {
  airportAudio.play();
  //   attach video to button function
  myVideo.play();
  msg.textContent = "audio is playing";
}

// access pause button
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

// create a function to make the button pause an audio upon clicking
pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  airportAudio.pause();
  //   attach video to button function
  myVideo.pause();
  msg.textContent = "audio is paused";
}

// get access to pop audio
const popSound = document.querySelector("#pop-audio");
console.log(popSound);

// access pop button
const popButton = document.querySelector("#pop-button");
console.log(popButton);

// create a function to make the button play an audio upon clicking
popButton.addEventListener("click", makeItPOP);

function makeItPOP() {
  popSound.play();
  msg.textContent = "audio is playing";
}
