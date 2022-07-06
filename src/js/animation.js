const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('active-js');
      } else {
        if (!animItem.classList.contains('anim-items--nohide')) {
          animItem.classList.remove('active-js');
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pagexOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageyOffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}

document.querySelectorAll('button').forEach(function (el) {
  el.addEventListener(
    'click',
    function () {
      if (!this.dataset.secondname) return;
      var tmp = this.innerHTML;
      this.innerHTML = this.dataset.secondname;
      this.dataset.secondname = tmp;
    },
    false
  );
});
