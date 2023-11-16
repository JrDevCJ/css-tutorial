const circularProgressBar = document.querySelector("#circularProgressBar");
const circularProgressBarNumber = document.querySelector(
  "#circularProgressBar .progress-value"
);

let chartValue = 60;

const addValue = (value) => {
  if (chartValue < 100) {
    chartValue += value;
    setInfoCircularProgressBar();
  }
};
const decreaseValue = (value) => {
  if (chartValue > 0) {
    chartValue -= value;
    setInfoCircularProgressBar();
  }
};

function setInfoCircularProgressBar() {
  let multiplierFactor = 360 / 100;

  circularProgressBarNumber.textContent = `${chartValue}%`;
  circularProgressBar.style.background = `conic-gradient(var(--orange) ${
    chartValue * multiplierFactor
  }deg, var(--purple) 0deg)`;
}

setInfoCircularProgressBar();
