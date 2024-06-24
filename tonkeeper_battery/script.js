document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  const backToTopButton = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
