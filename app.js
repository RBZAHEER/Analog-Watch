const hrEle = document.querySelector(".hr");
const minEle = document.querySelector(".min");
const secEle = document.querySelector(".sec");
const digitalClockEle = document.getElementById("digital-clock");

setInterval(() => {
  const date = new Date();

  const hr = date.getHours() * 30;
  const min = date.getMinutes() * 6;
  const sec = date.getSeconds() * 6;

  hrEle.style.transform = `rotateZ(${hr + min / 12}deg)`;
  minEle.style.transform = `rotateZ(${min}deg)`;
  secEle.style.transform = `rotateZ(${sec}deg)`;

  // Update digital clock
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  digitalClockEle.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);
