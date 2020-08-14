$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#scrollTop').fadeIn();
    } else {
      $('#scrollTop').fadeOut();
    }
  });
  $(".hamburger").on("click", function (e) {
    $(this).toggleClass("is-active"),
      e.preventDefault(),
      $(".header__menu-list").toggleClass("is-active")
  });
  $('a[href^="#"]').click(function () {
    let anchor = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(anchor).offset().top
    }, 600);
  });
  $('.header__form-select').niceSelect();
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
  $("#scrollTop").click(function () {
    $('html ,body').animate({
      scrollTop: 0
    }, 800);
  });
});
let mySwiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})