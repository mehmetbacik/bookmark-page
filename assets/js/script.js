/*Hero*/

var swiper = new Swiper(".hero__swiper", {
    /*navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },*/
    autoplay: {
        delay: 2000,
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

/*Hero*/

/*Extension*/

var swiper = new Swiper(".extension__swiper", {
    /*navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },*/
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        0: {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerColumn: 1,
        },
        640: {
            spaceBetween: 50,
            slidesPerView: 1,
            slidesPerColumn: 1,
        },
        768: {
            spaceBetween: 50,
            slidesPerView: 2,
            slidesPerColumn: 1,
        },
        1024: {
            spaceBetween: 50,
            slidesPerView: 3,
        },
    }
});

/*Extension*/

/*Contact*/

$(document).ready(function(){
    $("input").blur(function() {
        if(!$(this).val()){
            $("#emailError").css("display","block");
            $("#emailError").empty().append("<div class='error'>Whoops. make sure it's an email</div>");
            $("#email").attr("aria-invalid","true");
            }
            else
            {
            $("#emailError").css("display","none");
            $("#emailError").text("");
            $("#email").attr("aria-invalid","false");
        }
    })
});

/*Contact*/