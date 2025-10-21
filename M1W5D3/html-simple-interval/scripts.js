const myCountdown = document.querySelector('#countdown');
const myMinutes = document.querySelector('#countdown-minutes');
let minutes = 10;
let seconds = 30;

const myCountdownID = setInterval( () => {
  
  myCountdown.textContent = seconds;
  myMinutes.textContent = minutes;

  if ( minutes === 0 && seconds === 0) {
    clearInterval(myCountdownID);
  }

  if (seconds === 0) {
    seconds = 60;
    minutes--;
  }

  seconds--;

}, 500);