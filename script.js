// var swiper = new Swiper('.swiper-container', {
//     spaceBetween: 30,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });