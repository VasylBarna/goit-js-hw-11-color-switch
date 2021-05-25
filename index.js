const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

refs.startBtn.addEventListener("click", onStartColor);
refs.stopBtn.addEventListener("click", onStopColor);

let intervalColor = null;

function onStartColor() {
  intervalColor = setInterval(() => {
    const randomIntegerColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
    refs.body.style.backgroundColor = randomIntegerColor;

    console.log(randomIntegerColor);

  }, 1000);

  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function onStopColor() {
  clearInterval(intervalColor);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
