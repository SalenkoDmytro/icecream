(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-franch-open]'),
    closeModalBtn: document.querySelector('[data-franch-close]'),
    modal: document.querySelector('[data-franch]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
