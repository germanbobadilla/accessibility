const playPauseBtn = document.querySelector('.playpause');
const stopBtn = document.querySelector('.stop');
const rwdBtn = document.querySelector('.rwd');
const fwdBtn = document.querySelector('.fwd');
const timeLabel = document.querySelector('.time');
const allButton = document.querySelectorAll('button')

// Let's remove the controls
const player = document.querySelector('video');
player.removeAttribute('controls');

// Variables for the Play, Pause, Stop, Forward and Rewind icons
playPauseBtn.innerHTML = `<i class="fa-solid fa-play">`
const pauseIcon = `<i class="fa-solid fa-pause"></i>`
const playIcon = `<i class="fa-solid fa-play">`
const stopIcon = `<i class="fa-solid fa-stop"></i>`
const forwardIcon = `<i class="fa-solid fa-forward"></i>`
const rewindIcon = `<i class="fa-solid fa-backward"></i>`

// Focusable keyboard

focusMethod = function getFocus(){
  allButton.focus()
}


// On Click Events
playPauseBtn.onclick = function() {
  if(player.paused) {
    player.play();
    playPauseBtn.innerHTML = pauseIcon;
    playPauseBtn.setAttribute("title", "Pause")
  } else {
    player.pause();
    playPauseBtn.innerHTML = playIcon;
    playPauseBtn.removeAttribute("title")
  }
};

// stop event
stopBtn.onclick = function() {
  player.pause()
  player.currentTime = 0
  playPauseBtn.innerHTML = playIcon;
}

rwdBtn.onclick = function() {
  player.currentTime -= 3;
};

fwdBtn.onclick = function() {
  player.currentTime += 3;
  if(player.currentTime >= player.duration || player.paused) {
    player.pause();
    player.currentTime = 0;
    playPauseBtn.innerHTML = playIcon;
  }
};

player.ontimeupdate = function () {
  const minutes = Math.floor(player.currentTime / 60);
  const seconds = Math.floor(player.currentTime - minutes * 60);
  let minuteValue;
  let secondValue;

  if (minutes < 10) {
    minuteValue = "0" + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = "0" + seconds;
  } else {
    secondValue = seconds;
  }

  const mediaTime = minuteValue + ":" + secondValue;
  timeLabel.textContent = mediaTime;
};
