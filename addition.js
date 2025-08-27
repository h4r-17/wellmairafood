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


        // API ke spreadsheet
        function showPopup(message, isError = false) {
        const overlay = document.getElementById("popup-overlay");
        const box = document.getElementById("popup-box");
        const msg = document.getElementById("popup-message");

        msg.textContent = message;
        box.className = "popup-box " + (isError ? "error" : "success");

        overlay.style.display = "flex";
        setTimeout(() => box.classList.add("show"), 50);
        }

        function closePopup() {
        const overlay = document.getElementById("popup-overlay");
        const box = document.getElementById("popup-box");
        box.classList.remove("show");
        setTimeout(() => overlay.style.display = "none", 300);
        }

        document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();

        const form = this;
        const formData = new FormData(form);

        fetch("https://script.google.com/macros/s/AKfycbxoQnhFFSs79ROmE8ZKWJJTEWle4Igr2GYwBfv8cIAPFVOkAMLRSLuhYARWCaCydPU/exec", {
        method: "POST",
        body: formData
        })
        .then(res => res.text())
        .then(data => {
        showPopup("Thank you for submit ✅", false);
        form.reset();
        })
        .catch(err => {
        showPopup("Failed. Please try again ❌", true);
        });
        });




