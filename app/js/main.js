$(function () {

  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $(".header__wrapper, .go-back").addClass("animate");
    } else {
      $(".header__wrapper, .go-back").removeClass("animate");
    }
  });

  $('.menu a, .go-back').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.blog__slider').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
  });


  $('.menu__btn, .menu a').on('click', function () {
    $('.header__top').toggleClass('header__top--active');
  });

  var mixer = mixitup('.gallery__board');

});