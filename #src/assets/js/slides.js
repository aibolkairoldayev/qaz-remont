// main page insta slider
$('.insta__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle cx="23" cy="23" r="23" fill=""/><path d="M11 23H35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 11L35 23L23 35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle opacity="" cx="23" cy="23" r="23" transform="rotate(-180 23 23)" fill=""/><path d="M35 23L11 23" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 35L11 23L23 11" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,      
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,      
            }
          }
      ],
});

// main page news slider
$('.news__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle cx="23" cy="23" r="23" fill=""/><path d="M11 23H35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 11L35 23L23 35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle opacity="" cx="23" cy="23" r="23" transform="rotate(-180 23 23)" fill=""/><path d="M35 23L11 23" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 35L11 23L23 11" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,      
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,      
            }
          }
      ],
});

// main page partners slider
$('.partners__items').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,      
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,      
        }
      }
    ],
});

// service page tarifs slider
if ($(window).width() > 576) {
  $('.tarif__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    arrows: true,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle cx="23" cy="23" r="23" fill=""/><path d="M11 23H35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 11L35 23L23 35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle opacity="" cx="23" cy="23" r="23" transform="rotate(-180 23 23)" fill=""/><path d="M35 23L11 23" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 35L11 23L23 11" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    responsive: [
      {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,      
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,      
          }
        }
    ],
  });
}


// service page reviews slider
$('.reviews__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    arrows: true,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle cx="23" cy="23" r="23" fill=""/><path d="M11 23H35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 11L35 23L23 35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle opacity="" cx="23" cy="23" r="23" transform="rotate(-180 23 23)" fill=""/><path d="M35 23L11 23" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 35L11 23L23 11" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',

});

// service page projects slider
$('.projects__item--slider').each(function(index) {
    var $slider = $(this); // Текущий слайдер

    // Инициализация большого слайдера
    $slider.find('.projects__big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: $slider.find('.projects__small'), // Связка с маленьким слайдером
        infinite: false,
        nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle cx="23" cy="23" r="23" fill=""/><path d="M11 23H35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 11L35 23L23 35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
        prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle opacity="" cx="23" cy="23" r="23" transform="rotate(-180 23 23)" fill=""/><path d="M35 23L11 23" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 35L11 23L23 11" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    });

    // Инициализация маленького слайдера
    $slider.find('.projects__small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: $slider.find('.projects__big'), // Связка с большим слайдером
        dots: false,
        arrows: false,
        focusOnSelect: true,
    });
});

// main page banner slider
$('.banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  dots: false,
  arrows: true,
  nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle cx="23" cy="23" r="23" fill=""/><path d="M11 23H35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 11L35 23L23 35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
  prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle opacity="" cx="23" cy="23" r="23" transform="rotate(-180 23 23)" fill=""/><path d="M35 23L11 23" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 35L11 23L23 11" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',

});