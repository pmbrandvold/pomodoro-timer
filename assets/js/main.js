const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const pauseButton = document.getElementById('pauseButton');
const refreshButton = document.getElementById('refreshButton');

startButton.addEventListener('click', start)
stopButton.addEventListener('click', stop)
pauseButton.addEventListener('click', pause)
refreshButton.addEventListener('click', refresh)
