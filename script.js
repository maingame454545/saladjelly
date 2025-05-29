// Animasi masuk saat halaman dimuat
window.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".contact-box");
  box.style.opacity = 0;
  box.style.transform = "translateY(20px)";
  setTimeout(() => {
    box.style.transition = "all 0.8s ease";
    box.style.opacity = 1;
    box.style.transform = "translateY(0)";
  }, 100);
});

// Konfirmasi saat klik tombol
document.querySelectorAll(".contact-button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const service = btn.classList.contains("whatsapp")
      ? "WhatsApp"
      : "Instagram";
    const confirmGo = confirm(`Anda akan diarahkan ke ${service}. Lanjutkan?`);
    if (!confirmGo) {
      e.preventDefault(); // Batalkan jika user klik "Batal"
    }
  });
});
