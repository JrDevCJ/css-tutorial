const stars = document.querySelectorAll(".star");
let ratingValue = 0;
const ratingScore = document.getElementById("ratingScore");

function highlightStars(value) {
  stars.forEach((star) => {
    if (star.dataset.value <= value) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
}

stars.forEach((star) => {
  star.addEventListener("click", () => {
    ratingValue = star.dataset.value;
    highlightStars(ratingValue);
    ratingScore.textContent = `Score: ${ratingValue} star(s)`;
  });

  star.addEventListener("mouseover", () => {
    highlightStars(star.dataset.value);
  });

  star.addEventListener("mouseout", () => {
    highlightStars(ratingValue);
  });
});
