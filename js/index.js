// index.js - Slider otomatis
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#heroCarousel");

  if (carousel) {
    const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 5000, // Ganti slide setiap 5 detik
      ride: "carousel",
      pause: false, // Tidak berhenti meskipun user hover
      wrap: true, // Setelah slide terakhir, kembali ke awal
    });
  }
});

// index.js - Slider otomatis (testimoni)
const testimonialCarousel = document.querySelector("#testimonialCarousel");
if (testimonialCarousel) {
  const carousel = new bootstrap.Carousel(testimonialCarousel, {
    interval: 6000,
    ride: "carousel",
  });
}

// Scroll-to-top behavior (versi cepat muncul)
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollToTopBtn");
  const waBtn = document.getElementById("whatsappBtn");

  // WhatsApp muncul segera setelah halaman siap (khusus mobile pun aman)
  if (waBtn) {
    waBtn.classList.add("show");
  }

  // ScrollToTop hanya muncul jika scroll melebihi ambang tertentu
  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const isMobile = window.innerWidth <= 768;
    const threshold = isMobile ? 80 : 150;

    if (scrollY > threshold) {
      scrollBtn?.classList.add("show");
    } else {
      scrollBtn?.classList.remove("show");
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Klik tombol scroll ke atas
  scrollBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Jalankan fungsi saat halaman load (kalau user reload di tengah halaman)
  handleScroll();
});
