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
const breakTimerDisplay = document.getElementById('breakDisplay');
const breakStartButton = document.getElementById('breakStartButton');
const breakPauseButton = document.getElementById('breakPauseButton');
const breakRefreshButton = document.getElementById('breakRefreshButton');
//break timer listeners
breakStartButton.addEventListener('click', startBreak)
breakPauseButton.addEventListener('click', pauseBreak)
breakRefreshButton.addEventListener('click', function () {refreshBreak(breakTimerDisplay)})

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
      refreshWork(timeDisplay);
      alert("Time for your 5 minute break!");
      startBreak()
    }
    if (paused == true) {
      clearInterval(countdown);
    }
}

//************************
//************************

//breakTimerFunctions
let breakSeconds = 60;
let breakMinutes = 5;
let breakPaused = false;
let breakStarted = false;

function updateBreakTimerDisplay(timer) {
  if (breakSeconds < 10) {
    timer.innerHTML = breakMinutes + ':' + '0' + breakSeconds;
    console.log(breakMinutes + ':' + '0' + breakSeconds);
  } else if (breakSeconds == 60) {
    timer.innerHTML = breakMinutes + ':' + '00';
  } else {
    timer.innerHTML = breakMinutes + ':' + breakSeconds;
    console.log(breakMinutes + ':' + breakSeconds)
  }
}

let breakCountdown = null
//OPERATORS
function startBreak() {
  if (breakStarted == true && breakPaused == false) {
    return 1;
  }
  breakStarted = true;
  if (breakPaused == true) {
    breakPaused = false;
  }
  if (breakMinutes != 0 && breakSeconds != 0) {
    breakCountdown = setInterval(function() { decreaseBreakTime(breakTimerDisplay) }, 1000);
  }
}

function pauseBreak() {
  breakPaused = true;
}

function refreshBreak(timerName) {
  breakSeconds = 60;
  breakMinutes = 5;
  breakPause = false;
  breakStarted = false;
  updateBreakTimerDisplay(timerName);
}

//HELPERS
function decreaseBreakTime(timerName) {
    breakSeconds -= 1;
    if (breakSeconds == 0 && breakMinutes != 0) {
      breakMinutes -= 1;
      breakSeconds = 59;
    }
    updateBreakTimerDisplay(timerName);
    if (breakSeconds == 0 && breakMinutes == 0) {
      clearInterval(breakCountdown);
      refreshBreak(breakTimerDisplay);
      alert("Did you enjoy your break? Time to get some more stuff done!")
      startWork();
    }
    if (breakPaused == true) {
      clearInterval(breakCountdown);
    }
}
