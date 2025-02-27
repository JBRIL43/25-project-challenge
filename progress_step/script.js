document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progress-bar");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const circles = document.querySelectorAll(".circle");
  let currentActive = 1;

  function updateProgress() {
    circles.forEach((circle, index) => {
      if (index < currentActive) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });
    const activesCount = document.querySelectorAll(".circle.active").length;
    progressBar.style.width =
      ((activesCount - 1) / (circles.length - 1)) * 100 + "%";

    // disable/enable buttons
    prevBtn.disabled = currentActive === 1;
    nextBtn.disabled = currentActive === circles.length;
  }

  nextBtn.addEventListener("click", () => {
    currentActive = Math.min(currentActive + 1, circles.length);
    updateProgress();
  });

  prevBtn.addEventListener("click", () => {
    currentActive = Math.max(currentActive - 1, 1);
    updateProgress();
  });

  // Initial update on load
  updateProgress();
});
