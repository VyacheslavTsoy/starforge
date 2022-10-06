const featuredSlider = new Swiper(".featured-carousel__slides", {
    slidesPerView: 'auto',
    effect: 'slide',
    spaceBetween: 0,
    loop: false,
    speed: 1000,
    navigation: {
        nextEl: ".js-featured-carousel-next",
        prevEl: ".js-featured-carousel-prev",
    },
    pagination: {
        el: ".banner-carousel__pagination--default",
    },
    // breakpoints: {
    //     768: {
    //
    //     },
    //     990: {
    //
    //     },
    // },
});

const sliderContainer = document.querySelector('.featured-carousel__slides');

featuredSlider.on('progress', ()=> {
    if (featuredSlider.isEnd) {
        featuredSlider.$el.addClass('is-end');
    } else {
        featuredSlider.$el.removeClass('is-end');
    }
})


