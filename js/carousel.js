document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const prev = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");

  const scrollByOneSlide = (direction) => {
    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  };

  prev.addEventListener("click", () => scrollByOneSlide(-1));
  next.addEventListener("click", () => scrollByOneSlide(1));
});
