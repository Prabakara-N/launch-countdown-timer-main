//elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

//functions
const countdown = () => {
  const endDate = new Date("December 31, 2022 00:00:00").getTime(); //date future
  const now = new Date().getTime(); // date today

  const difference = endDate - now;

  const seconds = 1000; // 1 sec = 1000 ms
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let timeDays = Math.floor(difference / days);
  let timeHours = Math.floor((difference % days) / hours);
  let timeMinutes = Math.floor((difference % hours) / minutes);
  let timeSeconds = Math.floor((difference % minutes) / seconds);

  //condition for when timing is less than 10, the timing wil be 09...08 like that (not 9..8..7)
  timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
  timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

  daysEl.innerHTML = timeDays;
  hoursEl.innerHTML = timeHours;
  minutesEl.innerHTML = timeMinutes;
  secondsEl.innerHTML = timeSeconds;
};

setInterval(countdown, 1000);
