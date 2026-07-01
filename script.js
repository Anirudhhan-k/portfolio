// ================= LOADER FIX =================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    loader.style.transition = "0.5s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});


// ================= MOBILE MENU (optional fix) =================
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


// ================= TYPING EFFECT (hero text) =================
const typingText = document.getElementById("typing");

if (typingText) {
  const words = [
    "AI/ML Student",
    "Python Developer",
    "Frontend Developer",
    "Problem Solver"
  ];

  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  function type() {
    currentWord = words[i];

    if (isDeleting) {
      j--;
    } else {
      j++;
    }

    typingText.textContent = currentWord.substring(0, j);

    if (!isDeleting && j === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 80 : 120);
  }

  type();
}
