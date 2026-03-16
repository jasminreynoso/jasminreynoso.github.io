const revealElements = document.querySelectorAll(".section, .project-card, .about-card, .writing-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));

const style = document.createElement("style");
style.textContent = `
  .section,
  .project-card,
  .about-card,
  .writing-card {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .section.is-visible,
  .project-card.is-visible,
  .about-card.is-visible,
  .writing-card.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

document.head.appendChild(style);
