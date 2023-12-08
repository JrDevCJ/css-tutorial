const spinnerValue = document.querySelector(".spinner input");

const spinnerAddValue = () => {
  spinnerValue.value = Number(spinnerValue.value) + 1;
};

const spinnerSubtractValue = () => {
  spinnerValue.value = Number(spinnerValue.value) - 1;
};