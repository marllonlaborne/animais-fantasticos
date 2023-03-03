export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;
    this.activeClass = 'ativo';

    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distância de cada item
  // em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map(section => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.halfWindow),
      };
    });
  }

  // Verifica a distância em cada objeto
  // em relação ao scroll do site
  checkDistance() {
    this.distance.forEach(item => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add(this.activeClass);
      } else if (item.element.classList.contains(this.activeClass)) {
        item.element.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove eventListener de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
