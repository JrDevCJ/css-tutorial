const speedDial = document.querySelector(".speeddial");
const speedDialButton = document.querySelector(".speeddial-button");

speedDialButton.onclick = function (e) {
  e.preventDefault();
  speedDial.classList.toggle("speeddial-opened");  
};
