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

  const texts = [
    "Gasless transactions.",
    "Easy transfers.",
    "Covers gas fees.",
  ];
  const typingElement = document.querySelector(".typing-effect");
  const cursorElement = document.createElement("span");
  cursorElement.className = "cursor";
  typingElement.appendChild(cursorElement);

  let textIndex = 0;
  let charIndex = 0;
  const typingSpeed = 70;
  const backSpeed = 30;
  const delay = 2000;

  function type() {
    if (charIndex < texts[textIndex].length) {
      typingElement.textContent = texts[textIndex].substring(0, charIndex + 1);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, backSpeed);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, typingSpeed);
    }
  }

  setTimeout(type, delay);

  // slide up
  // const slideUpDiv = document.querySelector(".slide-up");
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       slideUpDiv.classList.add("visible");
  //     }
  //   });
  // });

  // observer.observe(slideUpDiv);

  const slideUpDivs = document.querySelectorAll(".slide-up");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  slideUpDivs.forEach((div) => {
    observer.observe(div);
  });
});
