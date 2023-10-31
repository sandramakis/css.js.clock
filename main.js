" use strict";

const secondHand = document.querySelector(".sec-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const timeDisplay = document.querySelector(".time");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();

  const secondsDegree = (seconds / 60) * 360 + 90;
  const minuteDegree = (minutes / 60) * 360 + 90;
  const hourDegree = (hour / 12) * 360 + 90;

  console.log(seconds, minutes, hour);

  timeDisplay.textContent = `The time is: ${hour}: ${minutes}`;

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
