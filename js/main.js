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

    if (location.pathname === '/' || location.pathname === "/main.html") {
        document.body.classList.add("main-page");
    }

    //maskphone 
    var inputElements = document.querySelectorAll(".maskphone");

    for (let inputElement of inputElements) {
        console.log(inputElement);

        inputElement.addEventListener("input", mask);
        inputElement.addEventListener("focus", mask);
        inputElement.addEventListener("blur", mask);

        function mask(event) {
            var blank = "+_ (___) ___-__-__";

            var i = 0;
            var val = this.value.replace(/\D/g, "").replace(/^8/, "7");
            // <---

            this.value = blank.replace(/./g, function (char) {
                if (/[_\d]/.test(char) && i < val.length)
                    return val.charAt(i++);

                return i >= val.length ? "" : char;
            });

            if (event.type == "blur") {
                if (this.value.length == 2)
                    this.value = "";
            } else {
                setCursorPosition(this, this.value.length);
            }
        };

        function setCursorPosition(elem, pos) {
            elem.focus();

            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
                return;
            }

            if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select();
                return;
            }
        }
    }

    const steps = document.querySelectorAll('.step');
    const stage = document.querySelector('.questions__stage');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentStep = 0;

    function showStep(index) {
        steps.forEach((step, i) => {
            step.classList.toggle('active', i === index);
        });
        stage.textContent = currentStep + 1;
        prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
        nextBtn.style.display = index === steps.length - 1 ? 'none' : 'inline-block';
    }

    function enableSteps() {
        showStep(currentStep);
        nextBtn.style.display = currentStep === steps.length - 1 ? 'none' : 'inline-block';
        prevBtn.style.display = currentStep === 0 ? 'none' : 'inline-block';
        nextBtn.style.display = (currentStep === steps.length - 1) ? 'none' : 'inline-block';
        prevBtn.style.display = (currentStep === 0) ? 'none' : 'inline-block';
    }

    function disableSteps() {
        steps.forEach(step => step.classList.add('active'));
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'none';
    }

    function checkWidth() {
        if (window.innerWidth <= 992) {
            currentStep = 0;
            enableSteps();
        } else {
            disableSteps();
        }
    }

    nextBtn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
            window.scrollTo(0, 0);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
            window.scrollTo(0, 0);
        }
    });

    window.addEventListener('resize', checkWidth);

    checkWidth();
});
