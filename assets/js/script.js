var swiper = new Swiper(".hero__swiper", {
    /*navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },*/
    autoplay: {
        delay: 1000,
    },
    breakpoints: {
        0: {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerColumn: 1,
        },
        640: {
            spaceBetween: 30,
            slidesPerView: 1,
            slidesPerColumn: 1,
        },
        768: {
            spaceBetween: 30,
            slidesPerView: 1,
            slidesPerColumn: 1,
        },
        1024: {
            spaceBetween: 30,
            slidesPerView: 1,
        },
    }
});
