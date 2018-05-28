const workTimerDisplay = document.getElementById('workTimerDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const pauseButton = document.getElementById('pauseButton');
const refreshButton = document.getElementById('refreshButton');

startButton.addEventListener('click', start)
stopButton.addEventListener('click', stop)
pauseButton.addEventListener('click', pause)
refreshButton.addEventListener('click', refresh)

let seconds = 60;
let minutes = 25;
let paused = false
let stopped = false;

//TIMERS
function workTimer() {

}

function breakTimer() {

}

function updateTimerDisplay() {

}

let countdown = null
//OPERATORS
function start() {
  if (paused == true) {
    paused = false;
  }
  if (stopped == true) {
    stopped = false;
  }
  if (minutes != 0 && seconds != 0) {
    countdown = setInterval(function() { decreaseTime() }, 1000);
  }
}

function stop() {
  stopped = true;
}

function pause() {
  paused = true;
}

function refresh() {

}

//HELPERS
function decreaseTime() {
    seconds -= 1;
    if (seconds == 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
    }
    if (seconds < 10) {
      workTimerDisplay.innerHTML = minutes + ':' + '0' + seconds;
      console.log(minutes + ':' + '0' + seconds);
    } else {
      workTimerDisplay.innerHTML = minutes + ':' + seconds;
      console.log(minutes + ':' + seconds)
    }
    if (seconds == 0 && minutes == 0) {
      clearInterval(countdown);
    }
}
