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
      $(".header__nav-right").toggleClass("is-active")
  });
  $('a[href^="#"]').click(function () {
    let anchor = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(anchor).offset().top
    }, 600);
  });
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
  $("#scrollTop").click(function () {
    $('html ,body').animate({
      scrollTop: 0
    }, 800);
  });
  $(".services__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg width="67" height="24" viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51471C13.1924 2.92893 13.1924 1.97918 12.6066 1.39339C12.0208 0.807607 11.0711 0.807607 10.4853 1.39339L0.939339 10.9393ZM67 10.5L2 10.5L2 13.5L67 13.5L67 10.5Z" fill = "#C8A35F"/></svg></button >',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><svg width="67" height="24" viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.0607 10.9393C66.6464 11.5251 66.6464 12.4749 66.0607 13.0607L56.5147 22.6066C55.9289 23.1924 54.9792 23.1924 54.3934 22.6066C53.8076 22.0208 53.8076 21.0711 54.3934 20.4853L62.8787 12L54.3934 3.51471C53.8076 2.92893 53.8076 1.97918 54.3934 1.39339C54.9792 0.807607 55.9289 0.807607 56.5147 1.39339L66.0607 10.9393ZM-1.31134e-07 10.5L65 10.5L65 13.5L1.31134e-07 13.5L-1.31134e-07 10.5Z" fill="#C8A35F"/></svg></button>',
  });
});