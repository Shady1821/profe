var swiper1 = new Swiper('.swiper1', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: true,
      },
  
  
      769: {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: false,
      },
    }
  });


  var swiper2 = new Swiper('.swiper2', {

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: false,
      },
  
      769: {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
      },
    }
  });

  var swiper3 = new Swiper('.swiper3', {

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: false,
      },
  
      769: {
        slidesPerView: 4,
        spaceBetween: 19,
        centeredSlides: false,
      },
    }
  });

  var swiper4 = new Swiper('.swiper4', {

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
      },
  
      769: {
        slidesPerView: 5,
        spaceBetween: 19,
        centeredSlides: false,
      },
    }
  });