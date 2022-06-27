'use strict'
// const modal = document.querySelector('actions-main__button')
// modal.addEventListener\
const reviewsSwiper = document.querySelector('.swiper-reviews');

if(reviewsSwiper){
const swiper = new Swiper('.swiper-reviews', {
    loop: true,
    autoHeight:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
  
  });
}