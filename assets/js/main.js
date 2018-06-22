const timeDisplay = document.getElementById('timeDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const pauseButton = document.getElementById('pauseButton');
const refreshButton = document.getElementById('refreshButton');

startButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)
refreshButton.addEventListener('click', function () {refresh(timeDisplay)})

let seconds = 60;
let minutes = 25;
let paused = false;
let started = false;

//TIMERS
function workTimer() {

}

function breakTimer() {

}

function updateTimerDisplay(timer) {
  if (seconds < 10) {
    timer.innerHTML = minutes + ':' + '0' + seconds;
    console.log(minutes + ':' + '0' + seconds);
  } else if (seconds == 60) {
    timer.innerHTML = minutes + ':' + '00';
  } else {
    timer.innerHTML = minutes + ':' + seconds;
    console.log(minutes + ':' + seconds)
  }
}

let countdown = null
//OPERATORS
function start() {
  if (started == true && paused == false) {
    return 1;
  }
  started = true;
  if (paused == true) {
    paused = false;
  }
  if (minutes != 0 && seconds != 0) {
    countdown = setInterval(function() { decreaseTime(timeDisplay) }, 1000);
  }
}

function pause() {
  paused = true;
}

function refresh(timerName) {
  seconds = 60;
  minutes = 25;
  paused = false;
  started = false;
  updateTimerDisplay(timerName);
}

//HELPERS
function decreaseTime(timerName) {
    seconds -= 1;
    if (seconds == 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
    }
    updateTimerDisplay(timerName);
    if (seconds == 0 && minutes == 0) {
      clearInterval(countdown);
    }
    if (paused == true) {
      clearInterval(countdown);
    }
}
