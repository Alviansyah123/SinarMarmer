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
