// Отсчет времени 30мин
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

let time = 1800;

function startTimer() {
   interval = setInterval(() => {

      time--;
      displayTime();

      if (time <= 0) {
         stopTimer();
      }
   }, 1000)
}

function stopTimer() {
   interval = clearInterval(interval);
}

function displayTime() {
   const minutes = Math.floor(time / 60);
   const seconds = time % 60;

   const displaySec = `${seconds < 10 ? 0 : ''}${seconds}`
   const displayMin = `${minutes < 10 ? 0 : ''}${minutes}`

   minutesEl.textContent = displayMin;
   secondsEl.textContent = displaySec;
}

startTimer();