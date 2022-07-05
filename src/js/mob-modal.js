(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mob-modal-open]'),
    closeModalBtn: document.querySelector('[data-mob-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();