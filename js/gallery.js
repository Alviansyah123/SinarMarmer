document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("closeLightbox");

  document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    }
  });
});

const buttons = document.querySelectorAll(".category-btn");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Hapus class active di semua tombol
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    items.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
        item.classList.add("visible");
      } else {
        item.style.display = "none";
        item.classList.remove("visible");
      }
    });
  });
});

// Tampilkan semua item pertama kali
window.addEventListener("DOMContentLoaded", () => {
  items.forEach((item) => item.classList.add("visible"));
});
