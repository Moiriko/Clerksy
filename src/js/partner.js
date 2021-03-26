const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:5,
    slidesPerGroup:1,
    spaceBetween: 80,
    pagination: {
      el: '.swiper-pagination',
    },
  });