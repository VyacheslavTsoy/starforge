const reviewCarousel = new Swiper(".review-carousel__inner", {
    slidesPerView: 1,
    effect: 'slide',
    spaceBetween: 0,
    allowTouchMove: true,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".js-review-carousel-next",
        prevEl: ".js-review-carousel-prev",
    },
    pagination: {
        el: ".review-carousel__pagination",
        clickable: true,
        type: 'bullets',
    },
});


