// This is the script.js file for "The Band". It contains all the JavaScript code for the custom video player,
// as well as the share button and popup logic. The code is organized into sections for each feature,
// and includes comments to explain the functionality of each part of the code.

// Firstly, I need to get access to the video element, so I will use a const variable.
const video = document.querySelector("#custom-video-player");

// Here I have to insert "if (video)" to ensure that the other HTML pages that do not include a video (about, contact & socials), will still have an operational Javascript.
// So, it prevents JavaScript errors on pages that do not contain video elements.
if (video) {
  // Function for animatied background visuals. It runs when video plays.
  video.addEventListener("play", () => {
    document.body.style.animationPlayState = "running";
  });

  // And it stops when video is paused.
  video.addEventListener("pause", () => {
    document.body.style.animationPlayState = "paused";
  });

  // Then, I need to get access to the button elements, so I will use a const variable.
  const playPauseBtn = document.querySelector("#play-pause-btn");
  console.log(playPauseBtn);
  const playPauseImg = document.querySelector("#play-pause-img");
  console.log(playPauseImg);

  // Progressbar logic
  const progressBar = document.querySelector("#progress-bar-fill");
  video.removeAttribute("controls");
  // playPauseBtn.addEventListener("click", togglePlayPause);
  video.addEventListener("timeupdate", updateProgressBar);

  // This function is for the play/pause button, so that the user can interact with it and the button changes based on the interaction.
  function togglePlayPause() {
    if (video.paused || video.ended) {
      video.play();
      playPauseImg.src =
        "https://img.icons8.com/?size=100&id=lr54fx0xVwRX&format=png&color=000000";
    } else {
      video.pause();
      playPauseImg.src =
        "https://img.icons8.com/?size=100&id=KVmY50QrSUEu&format=png&color=000000";
    }
  }
  // This function is for updating the progress bar based on the video's current time.
  function updateProgressBar() {
    const value = (video.currentTime / video.duration) * 100;
    progressBar.style.width = value + "%";
  }

  // Mute/unmute logic

  // Firstly, I need to get access to the button elements, so I will use a const variable.
  const muteUnmuteButton = document.querySelector("#mute-unmute-button");
  console.log(muteUnmuteButton);

  const muteUnmuteImg = document.querySelector("#mute-unmute-img");
  console.log(muteUnmuteImg);

  // Now I want to create a function so that the user can interact with the button.
  muteUnmuteButton.addEventListener("click", toggleSound);

  // This function is for the mute/unmute button, so that the button appearance changes when the user clicks on it.
  function toggleSound() {
    if (video.muted == true) {
      video.muted = false;
      muteUnmuteImg.src =
        "https://img.icons8.com/?size=100&id=2Flf95HoihHv&format=png&color=000000";
    } else {
      video.muted = true;
      muteUnmuteImg.src =
        "https://img.icons8.com/?size=100&id=dc6K5qHhfI1u&format=png&color=000000";
    }
  }

  // Volume change logic

  // Firstly, I need to get access to the button elements, so I will use a const variable.
  const lowVolumeButton = document.querySelector("#low-volume-button");
  console.log(lowVolumeButton);
  const highVolumeButton = document.querySelector("#high-volume-button");
  console.log(highVolumeButton);

  // Now I want to create a function so that the user can interact with the low volume button.
  lowVolumeButton.addEventListener("click", lowerSound);

  // This function is for the low volume button, so that the user can lower the volume by clicking on it.
  function lowerSound() {
    video.volume -= 0.5;
  }

  // Then I want to create a function so that the user can interact with the high volume button.
  highVolumeButton.addEventListener("click", higherSound);

  // This function is for the high volume button, so that the user can increase the volume by clicking on it.
  function higherSound() {
    video.volume += 0.5;
  }

  // Skip to start & end logic

  // Firstly, I need to get access to the button elements, so I will use a const variable.
  const skipToStartButton = document.querySelector("#skip-to-start-button");
  console.log(skipToStartButton);
  const skipToEndButton = document.querySelector("#skip-to-end-button");
  console.log(skipToEndButton);

  // Now I want to create a function so that the user can interact with the skip to start button.
  skipToStartButton.addEventListener("click", skipToStart);

  // Then I want to create a function so that the user can interact with skip to end button.
  skipToEndButton.addEventListener("click", skipToEnd);

  // This function sets the currentTime of the video to 0 sec when the user clicks the "skip to start" button.
  function skipToStart() {
    // go to start
    video.currentTime = 0;
  }

  // This function sets the currentTime of the video to 240 sec (end of video) when the user clicks the "skip to end" button.
  function skipToEnd() {
    // go to end
    video.currentTime = 240;
  }

  // Fast forward & rewind logic

  // Firstly, I need to get access to the button elements, so I will use a const variable.
  const rewindButton = document.querySelector("#rewind-button");
  console.log(rewindButton);
  const fastForwardButton = document.querySelector("#fast-forward-button");
  console.log(fastForwardButton);

  // Now I want to create a function so that the user can interact with the rewind button.
  rewindButton.addEventListener("click", goBack);

  // Now I want to create a function so that the user can interact with the fast forward button.
  fastForwardButton.addEventListener("click", goForward);

  // This function is for the rewind button, so that the user can go back 10 seconds by clicking on it.
  function goBack() {
    // go back 10 seconds
    video.currentTime -= 10;
  }

  // This function is for the fast forward button, so that the user can go forward 10 seconds by clicking on it.
  function goForward() {
    // go forward 10 seconds
    video.currentTime += 10;
  }

  // Fullscreen logic

  // Firstly, I need to get access to the button element, so I will use a const variable.
  const fullscreenButton = document.querySelector("#fullscreen-button");
  console.log(fullscreenButton);

  // Now I want to create a function so that the user can interact with the fullscreen button.
  fullscreenButton.addEventListener("click", goFullscreen);

  // Function to make video go fullscreen on doubleclick.
  video.addEventListener("dblclick", goFullscreen);

  // Function to toggle fullscreen mode.
  function goFullscreen() {
    if (!document.fullscreenElement) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  // Replay logic

  // Firstly, I need to get access to the button element, so I will use a const variable.
  const replayButton = document.querySelector("#replay-button");
  console.log(replayButton);

  // Function to make video replay on user "click".
  replayButton.addEventListener("click", replayVideo);

  // This function resets the currentTime of the video to 0 sec when the user clicks the "replay" button.
  function replayVideo() {
    video.currentTime = 0;

    // Then I automatically make the video play again for a more seamless user experience.
    video.play();
  }

  // Heart button logic

  // Firstly, I need to get access to the button element, so I will use a const variable.
  const heartButton = document.querySelector("#heart-button");
  console.log(heartButton);

  // Now I need to get access to the likes count so it can be displayed besides the heart button.
  const likes = document.querySelector("#likes");
  console.log(likes);

  // Then I need to use a let variable to store the current number of likes.
  let likesCount = 0;

  // Function to add a like when the user clicks the heart button.
  heartButton.addEventListener("click", addLike);

  function addLike() {
    likesCount++;
    console.log(likesCount);

    //Here I am adding a function to display the likes count.
    likes.textContent = likesCount;
  }
}

// Share button and popup logic

// Firstly, I need to get access to the share button and popup elements, so I will use const variables.
const shareButton = document.getElementById("share-button");
console.log(shareButton);
const popup = document.getElementById("share-popup");
console.log(popup);

// This functionality is only relevant for the home, about and contact pages, so I will add an if statement to ensure that the other HTML pages that do not include a share button
// and popup (socials), will still have an operational Javascript, and an error message will not show up.

// This function removes the "hidden" mode for the popup when the user clicks the share button.
if (shareButton && popup) {
  shareButton.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });

  //This function adds the "hidden" mode back to the popup when the user clicks outside of the popup content.
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });
}
