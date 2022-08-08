(() => {
  //   Modal Window

  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }

  //Mobile menu v2
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const mobileClose = document.querySelector('[data-mobile-close]');

  menuOpenBtn.addEventListener('click', toggleMenu);
  menuCloseBtn.addEventListener('click', toggleMenu);
  mobileClose.addEventListener('click', closeMenu);

  function toggleMenu() {
    mobileMenu.classList.toggle('menu-active');
  }
  function closeMenu() {
    mobileMenu.classList.remove('menu-active');
  }
})();
