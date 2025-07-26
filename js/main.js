$(document).ready(function () {
    function newsSlider() {
        const swiper1 = new Swiper('.news__slider', {
            slidesPerView: 3,
            spaceBetween: 26,
            navigation: {
                nextEl: '.news__next',
                prevEl: '.news__prev',
            },
            breakpoints:
            {
                0: {
                    slidesPerView: 1.2
                },

                769: {
                    slidesPerView: 2.5
                },
                991: {
                    slidesPerView: 3
                },
            }
        });
    }
    function coursesSlider() {
        const swiper2 = new Swiper('.courses__items ', {
            slidesPerView: 3,
            spaceBetween: 26,
            breakpoints:
            {
                0: {
                    slidesPerView: 1.2
                },
                577: {
                    slidesPerView: 1.5
                },
                769: {
                    slidesPerView: 2.5
                },
                991: {
                    slidesPerView: 3
                },
            }

        });
    }
    function eventsSlider() {
        const swiper3 = new Swiper('.events__items', {
            slidesPerView: 3,
            spaceBetween: 26,
            grid: {
                rows: 3,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    grid: {
                        rows: 1,
                    },
                },
                578: {
                    slidesPerView: 1.3,
                    grid: {
                        rows: 1,
                    },
                },
                991: {
                    slidesPerView: 1,
                    grid: {
                        rows: 3,
                    },
                },
            },
        });
    }


    newsSlider();
    coursesSlider();
    eventsSlider();

    const headerWrapper = document.querySelector('.header__mobile .header__center');
    const burgerBtn = document.querySelector('.header__mobile .header__burger');

    console.log(headerWrapper);
    console.log(burgerBtn);

    burgerBtn.addEventListener('click', () => {
        headerWrapper.classList.toggle('menu-open');
        burgerBtn.classList.toggle('active');

        if (window.screen.width < 578) {
            document.body.classList.toggle('off-scroll');
        }
    });
})