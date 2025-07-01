document.addEventListener("DOMContentLoaded", () => {
  const layananCards = document.querySelectorAll(".layanan-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__fadeInUp");
          entry.target.classList.add("animate__animated");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  layananCards.forEach((card) => observer.observe(card));
});
