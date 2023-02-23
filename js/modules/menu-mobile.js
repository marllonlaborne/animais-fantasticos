import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ['click', 'touchstart'];
  const activeClass = 'active';

  function openMenu() {
    menuList.classList.add(activeClass);
    menuButton.classList.add(activeClass);
    outsideClick(menuList, events, () => {
      menuList.classList.remove(activeClass);
      menuButton.classList.remove(activeClass);
    });
  }

  if (menuButton) {
    events.forEach((userEvent) => menuButton.addEventListener(userEvent, openMenu));
  }
}
