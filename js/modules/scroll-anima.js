export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    // Bind
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const activeClass = 'ativo';
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.halfWindow) < 0;
      if (isSectionVisible) {
        section.classList.add(activeClass);
      } else if (section.classList.contains(activeClass)) {
        section.classList.remove(activeClass);
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }
}
