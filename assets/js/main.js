const workTimerDisplay = document.getElementById('workTimerDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const pauseButton = document.getElementById('pauseButton');
const refreshButton = document.getElementById('refreshButton');

startButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)
refreshButton.addEventListener('click', refresh)

let seconds = 60;
let minutes = 25;
let paused = false

//TIMERS
function workTimer() {

}

function breakTimer() {

}

function updateTimerDisplay() {
  if (seconds < 10) {
    workTimerDisplay.innerHTML = minutes + ':' + '0' + seconds;
    console.log(minutes + ':' + '0' + seconds);
  } else if (seconds == 60) {
    workTimerDisplay.innerHTML = minutes + ':' + '00';
  } else {
    workTimerDisplay.innerHTML = minutes + ':' + seconds;
    console.log(minutes + ':' + seconds)
  }
}

let countdown = null
//OPERATORS
function start() {
  if (paused == true) {
    paused = false;
  }
  if (minutes != 0 && seconds != 0) {
    countdown = setInterval(function() { decreaseTime() }, 1000);
  }
}

function pause() {
  paused = true;
}

function refresh() {
  seconds = 60;
  minutes = 25;
  paused = false;
  updateTimerDisplay();
}

//HELPERS
function decreaseTime() {
    seconds -= 1;
    if (seconds == 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
    }
    updateTimerDisplay();
    if (seconds == 0 && minutes == 0) {
      clearInterval(countdown);
    }
    if (paused == true) {
      clearInterval(countdown);
    }
}
