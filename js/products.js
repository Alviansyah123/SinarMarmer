// Animasi muncul saat scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".product-item").forEach((item) => {
  observer.observe(item);
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".category-btn");
  const items = document.querySelectorAll(".product-item");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      items.forEach((item) => {
        const match = filter === "all" || item.dataset.category === filter;
        item.style.display = match ? "block" : "none";
        if (match) {
          observer.observe(item); // pantau hanya item yang tampil
        } else {
          item.classList.remove("visible");
        }
      });
    });
  });

  // Inisialisasi animasi saat awal load
  items.forEach((item) => observer.observe(item));
});
