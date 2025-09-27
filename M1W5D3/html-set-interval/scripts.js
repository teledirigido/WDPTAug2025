console.log('Scripts loaded!');

const button = document.querySelector('#start-countdown');
const resetButton = document.querySelector('#reset-countdown');
const minutes = document.querySelector('#countdown-minutes');
const seconds = document.querySelector('#countdown-seconds');

let timeSeconds = 0;
let timeMinutes = 2;
// let time = countdown.getAttribute('data-time');


button.addEventListener('click', () => {
  const myInterval = setInterval( () => {
    seconds.textContent = timeSeconds;
    minutes.textContent = timeMinutes;

    if (timeSeconds == 0) {
      timeSeconds = 59;
      timeMinutes--;
    }

    timeSeconds--;

  }, 1000);
});

resetButton.addEventListener('click', () => {
  // time = countdown.getAttribute('data-time');
  // countdown.textContent = time;
});