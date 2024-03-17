const initSlider = () => {
  const imageList = document.querySelector(".main .main_container");
  const slideButtons = document.querySelectorAll(".main_container .arrow");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
 // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  }
  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
  });
}

window.addEventListener("load", initSlider);
