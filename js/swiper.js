"use strict"

const sectionsSlider = new Swiper('.sections__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 50,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.sections__button-next',
      prevEl: '.sections__button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

const compoundSlider = new Swiper('.compound__slider',{
  direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 50,
    grabCursor: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.compound__button-next',
      prevEl: '.compound__button-prev',
    },
});