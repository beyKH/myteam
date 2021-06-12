elsDirectorBtns = document.querySelectorAll('.director__btn');




elsDirectorBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.closest('.director__box').classList.toggle('director__box-rotated');
  })
})
