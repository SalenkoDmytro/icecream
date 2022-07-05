$('.btn__expand').click(function () {
  var text_class = $(this).attr('data-text-selector');

  $(text_class).toggleClass('text-open');
  $(this).toggleClass('text-open');
});
