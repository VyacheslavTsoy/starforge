const bannerCarousel = new Swiper(".banner-carousel", {
    slidesPerView: 'auto',
    centeredSlides: true,
    effect: 'slide',
    spaceBetween: 24,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".js-banner-carousel-next",
        prevEl: ".js-banner-carousel-prev",
    },
    pagination: {
        el: ".banner-carousel__pagination--default",
        clickable: true,
    },
    // breakpoints: {
    //     768: {
    //         spaceBetween: 24,
    //     }
    // },
});


function actualizePagination() {
    const carouselContainer = document.querySelector('.banner-carousel');

    carouselContainer.querySelectorAll('.banner-carousel__pagination--mobile').forEach((currentPags) => {
        currentPags.querySelectorAll('.banner-carousel__pagination-item').forEach((currentItem) => {
            currentItem.classList.remove('js-state-active');

            if (currentItem.getAttribute('data-index') == (bannerCarousel.realIndex + 1)) {
                currentItem.classList.add('js-state-active');
            }
        })
    })

    const bullets = carouselContainer.querySelectorAll('.banner-carousel__pagination--default span');

    bullets.forEach((item, index) => {
        item.classList.remove('swiper-pagination-bullet-active');

        if (index == bannerCarousel.realIndex) {
            item.classList.add('swiper-pagination-bullet-active');
        }
    })

}

bannerCarousel.on('slideChange', actualizePagination);
