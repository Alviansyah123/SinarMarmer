document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const navbarNav = document.getElementById("navbarNav");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navbarNav.classList.toggle("show");
  });
});

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

const waMenuToggle = document.getElementById("waMenuToggle");
const waContactOptions = document.getElementById("waContactOptions");

waMenuToggle.addEventListener("click", () => {
  const isVisible = waContactOptions.style.display === "flex";
  waContactOptions.style.display = isVisible ? "none" : "flex";
});

document.addEventListener("click", (e) => {
  if (
    !waMenuToggle.contains(e.target) &&
    !waContactOptions.contains(e.target)
  ) {
    waContactOptions.style.display = "none";
  }
});
