        document.addEventListener("DOMContentLoaded", () => {
        const header = document.querySelector("header");

        // Tambahkan class show dengan delay sedikit
        setTimeout(() => {
        header.classList.add("show");
        }, 200);
        });


        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Automatic scrolling functionality for sales channels
      document.addEventListener('DOMContentLoaded', function() {
      const channelsContainer = document.querySelector('.channels-auto-scroll');
    
    if (channelsContainer) {
        // Clone the content for seamless scrolling
        const originalContent = channelsContainer.innerHTML;
        channelsContainer.innerHTML += originalContent;
        
        // Calculate animation duration based on content length
        const totalWidth = channelsContainer.scrollWidth / 2;
        const animationDuration = Math.max(20, totalWidth / 50); // Minimum 20s, adjust speed
        
        // Apply animation
        channelsContainer.style.animationDuration = animationDuration + 's';
        
        // Pause on hover
        channelsContainer.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        channelsContainer.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            });
            }
    });

        // Disable klik kanan hanya pada gambar
        document.addEventListener("contextmenu", function(e) {
        if (e.target.tagName === "IMG" && e.target.closest(".channels-auto-scroll, .store-retail, .store-souvenir, .container")) {
        e.preventDefault();
            }
        });

        // Disable drag & drop untuk gambar di dalam .channels-auto-scroll
        document.querySelectorAll(".channels-auto-scroll img, .store-retail, .store-souvenir, .container").forEach(img => {
        img.setAttribute("draggable", "false");
        });

    // tambahan untuk pop-up form
async function showPopup(messageKey, isError = false) {
  const translations = await loadTranslations();
  const currentLang = localStorage.getItem("lang") || "id";

  const overlay = document.getElementById("popup-overlay");
  const box = document.getElementById("popup-box");
  const msg = document.getElementById("popup-message");

  // ambil teks dari lang.json
  msg.textContent = translations[currentLang][messageKey] || messageKey;

  box.className = "popup-box " + (isError ? "error" : "success");

  overlay.classList.add("show");
  setTimeout(() => {
    box.classList.add("show");
  }, 50);
}

    function closePopup() {
        const overlay = document.getElementById("popup-overlay");
        const box = document.getElementById("popup-box");

        box.classList.remove("show");
        setTimeout(() => {
        overlay.classList.remove("show");
          }, 300);
      }
   // Helper: tampil/sembunyi loading
function showLoading(){
  const overlay = document.getElementById("loading-overlay");
  overlay.classList.add("show");
}
function hideLoading(){
  document.getElementById("loading-overlay").classList.remove("show");
}


  // Handler submit (versi baru)
  document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);

  showLoading();

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbxoQnhFFSs79ROmE8ZKWJJTEWle4Igr2GYwBfv8cIAPFVOkAMLRSLuhYARWCaCydPU/exec", {
      method: "POST",
      body: formData
    });

    hideLoading();

    if (!res.ok) {
      showPopup("error", true);
      return;
    }

    await res.text(); // biar tetap baca responsenya
    showPopup("success", false);
    form.reset();
  } catch (err) {
    hideLoading();
    showPopup("error", true);
    console.error(err);
  }
});



