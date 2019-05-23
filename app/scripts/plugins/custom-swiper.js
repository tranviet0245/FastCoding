import Swiper from 'swiper';

@Wrapper
export default class CustomSwiper extends Plugin {
  init () {

    let mySwiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });

  }
}
