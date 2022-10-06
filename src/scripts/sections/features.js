const featuresCarousel = new Swiper(".features__carousel", {
    slidesPerView: 1,
    effect: 'slide',
    spaceBetween: 0,
    allowTouchMove: true,
    simulateTouch: false,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".js-features-carousel-next",
        prevEl: ".js-features-carousel-prev",
    },
    pagination: {
        el: ".features__pagination",
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
    },
    on: {
        beforeInit: function () {
            const qtyOfSlides = this.wrapperEl.querySelectorAll('.swiper-slide').length;

            if (qtyOfSlides < 4) {
                this.el.classList.add('features__carousel--disabled');
            }
        },
    },
});
