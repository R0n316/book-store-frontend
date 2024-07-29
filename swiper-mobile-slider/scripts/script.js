let swiper = new Swiper('.reviews', {
    slidesPerView: 2,
    spaceBetween: 30,
    // freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
});