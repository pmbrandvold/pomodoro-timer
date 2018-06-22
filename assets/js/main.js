//work timer objects
const timeDisplay = document.getElementById('timeDisplay');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const refreshButton = document.getElementById('refreshButton');
//work timer listeners
startButton.addEventListener('click', startWork)
pauseButton.addEventListener('click', pauseWork)
refreshButton.addEventListener('click', function () {refreshWork(timeDisplay)})

//brake timer objects
const brakeTimerDisplay = document.getElementById('brakeDisplay');
const brakeStartButton = document.getElementById('brakeStartButton');
const brakePauseButton = document.getElementById('brakePauseButton');
const brakeRefreshButton = document.getElementById('brakeRefreshButton');
//brake timer listeners
brakeStartButton.addEventListener('click', startBrake)
brakePauseButton.addEventListener('click', pauseBrake)
brakeRefreshButton.addEventListener('click', function () {refreshBrake(brakeTimerDisplay)})

//work variables
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
//work timer functions
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

//************************
//************************

//brakeTimerFunctions
let brakeSeconds = 60;
let brakeMinutes = 5;
let brakePaused = false;
let brakeStarted = false;

function updateBrakeTimerDisplay(timer) {
  if (brakeSeconds < 10) {
    timer.innerHTML = brakeMinutes + ':' + '0' + brakeSeconds;
    console.log(brakeMinutes + ':' + '0' + brakeSeconds);
  } else if (brakeSeconds == 60) {
    timer.innerHTML = brakeMinutes + ':' + '00';
  } else {
    timer.innerHTML = brakeMinutes + ':' + brakeSeconds;
    console.log(brakeMinutes + ':' + brakeSeconds)
  }
}

let brakeCountdown = null
//OPERATORS
function startBrake() {
  if (brakeStarted == true && brakePaused == false) {
    return 1;
  }
  brakeStarted = true;
  if (brakePaused == true) {
    brakePaused = false;
  }
  if (brakeMinutes != 0 && brakeSeconds != 0) {
    brakeCountdown = setInterval(function() { decreaseBreakTime(brakeTimerDisplay) }, 1000);
  }
}

function pauseBrake() {
  brakePaused = true;
}

function refreshBrake(timerName) {
  brakeSeconds = 60;
  brakeMinutes = 5;
  brakePause = false;
  brakeStarted = false;
  updateBrakeTimerDisplay(timerName);
}

//HELPERS
function decreaseBreakTime(timerName) {
    brakeSeconds -= 1;
    if (brakeSeconds == 0 && brakeMinutes != 0) {
      brakeMinutes -= 1;
      brakeSeconds = 59;
    }
    updateBrakeTimerDisplay(timerName);
    if (brakeSeconds == 0 && brakeMinutes == 0) {
      clearInterval(brakeCountdown);
    }
    if (brakePaused == true) {
      clearInterval(brakeCountdown);
    }
}
