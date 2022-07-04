(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// Скрипт зміни падінга для body в залежності висоти .page-header

// Визначаємо висоту .page-header
// const { height: pageHeaderHeight } = document.querySelector('.page-header').getBoundingClientRect().height;

// Встановлюємо нову властивість paddingTop для body
// document.body.style.paddingTop = `${pageHeaderHeight}px`;
