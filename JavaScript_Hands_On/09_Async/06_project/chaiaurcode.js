const randomColor = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
const body = document.body;

function changeColor() {
  body.style.backgroundColor = randomColor();
}

start_button = document.querySelector("#start");
stop_button = document.querySelector("#stop");
let interval;
start_button.addEventListener("click", function (e) {
  if (!interval) {
    interval = setInterval(changeColor, 1000);
  }
});
stop_button.addEventListener("click", function (e) {
  clearInterval(interval);
  interval = null;
});
