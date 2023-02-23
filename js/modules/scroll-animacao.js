export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const halfWindow = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const activeClass = 'ativo';
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - halfWindow) < 0;
      if (isSectionVisible) {
        section.classList.add(activeClass);
      } else if (section.classList.contains(activeClass)) {
        section.classList.remove(activeClass);
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
