// Check the HTMLMediaElement API ("https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement")

const playPauseButton = document.querySelector('.playpause');
const stopButton = document.querySelector('.stop');
const rewindButton = document.querySelector('.rwd');
const forwardButton = document.querySelector('.fwd');
const timeLabel = document.querySelector('.time');

// Let's remove the controls
const player = document.querySelector('video');
player.loop = true;
player.removeAttribute('controls');

// Variables for the Play, Pause, Stop, Forward and Rewind icons
const pauseIcon = `<i class="fa-solid fa-pause"></i>`;
const playIcon = `<i class="fa-solid fa-play">`;

// On Click Events
playPauseButton.addEventListener('click', playPauseVideo);
stopButton.addEventListener('click', stopVideo);

// Functions

// PlayPuaseMedia Function
function playPauseVideo() {
  if (player.paused) {
    // run the player
    player.play();
    // add the pause icon and remove attribute title
    playPauseButton.innerHTML = pauseIcon;
    playPauseButton.removeAttribute('title');
  } else {
    // pause the player and add the title attribute
    player.pause();
    playPauseButton.innerHTML = playIcon;
    playPauseButton.setAttribute('title', 'Play (k)');
  }
}

// Stop event
function stopVideo() {
  player.pause();
  player.currentTime = 0;
  playPauseButton.innerHTML = playIcon;
}

rewindButton.onclick = function () {
  player.currentTime -= 3;
};

forwardButton.onclick = function () {
  player.currentTime += 3;
  if (player.currentTime >= player.duration || player.paused) {
    player.pause();
    player.currentTime = 0;
    playPauseButton.innerHTML = playIcon;
  }
};

// Keyboard events
document.addEventListener('keyup', function(e){
  console.log(e)
  if(player.paused && e.key === 'k' ){
    player.play();
    // add the pause icon and set attribute title to "Pause"
    playPauseButton.innerHTML = pauseIcon;
    playPauseButton.setAttribute('title', 'Pause');
  } else if(player.played && e.key === 'k') {
    player.pause();    
    playPauseButton.innerHTML = playIcon;
    playPauseButton.removeAttribute('title');
  } 
})

player.ontimeupdate = function () {
  const minutes = Math.floor(player.currentTime / 60);
  const seconds = Math.floor(player.currentTime - minutes * 60);
  let minuteValue;
  let secondValue;

  if (minutes < 10) {
    minuteValue = '0' + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = '0' + seconds;
  } else {
    secondValue = seconds;
  }

  const mediaTime = minuteValue + ':' + secondValue;
  timeLabel.textContent = mediaTime;
};
