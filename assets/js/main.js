//work timer objects
const timeDisplay = document.getElementById('timeDisplay');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const refreshButton = document.getElementById('refreshButton');
//work timer listeners
startButton.addEventListener('click', startWork)
pauseButton.addEventListener('click', pauseWork)
refreshButton.addEventListener('click', function () {refreshWork(timeDisplay)})

//break timer objects
const breakTimeDisplay = document.getElementById('breakDisplay');
const breakStartButton = document.getElementById('breakStartButton');
const breakPauseButton = document.getElementById('breakPauseButton');
const breakRefreshButton = document.getElementById('breakRefreshButton');
//break timer listeners
let seconds = 60;
let minutes = 25;
let paused = false;
let started = false;


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
function startWork() {
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

function pauseWork() {
  paused = true;
}

function refreshWork(timerName) {
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
