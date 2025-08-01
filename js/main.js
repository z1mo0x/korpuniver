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

    function teorySlider() {
        const swiper4 = new Swiper('.teory__slider', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.teory__next',
                prevEl: '.teory__prev',
            },
            effect: 'creative',
            creativeEffect: {
                prev: {
                    opacity: 1,
                    filter: 'blur(5px)',
                    scale: 0.5,
                    translate: ['-50%', 0, -250],
                    rotate: [0, 0, -15],
                },
                next: {
                    opacity: 0,
                    filter: 'blur(5px)',
                    scale: 0.5,
                    translate: ['50%', 0, 250],
                    rotate: [0, 0, 15],
                },
            }
        });

        const links = document.querySelectorAll(".teory__slide img");
        const fullsizeButton = document.querySelector(".teory__fullsize");
        if (links.length > 0) {
            swiper4.on("slideChange", () => {
                const index = swiper4.realIndex;

                fullsizeButton.setAttribute('href', links[index].getAttribute('src'));
            })

            const fancyboxItems = Array.from(links).map(slide => ({
                src: slide.getAttribute('src'),
                type: 'image',
            }));

            fullsizeButton.addEventListener('click', () => {
                e.preventDefault();
                $.fancybox.open(fancyboxItems, {}, swiper4.realIndex);
            })
        }
    }
    function moduleTestSlider() {
        const swiper5 = new Swiper('.same__slider', {
            slidesPerView: 3,
            spaceBetween: 26,
            navigation: {
                nextEl: '.same__next',
                prevEl: '.same__prev',
            },
            breakpoints:
            {
                0: {
                    slidesPerView: 1.2
                },
                577: {
                    slidesPerView: 1.5
                },
                767: {
                    slidesPerView: 2.5
                },
                993: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 36,
                },
            }
        });
    }

    moduleTestSlider()
    teorySlider();
    newsSlider();
    coursesSlider();
    eventsSlider();

    const headerWrapper = document.querySelector('.header__mobile .header__center');
    const burgerBtn = document.querySelector('.header__mobile .header__burger');

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

    if (steps.length > 0) {
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
    }

    const buttonSubmit = document.querySelector("form.questions__wrapper .questions__button");
    const questionElements = document.querySelectorAll(".questions__item");
    const validateHtml = document.querySelector(".questions__validation");

    try {

        buttonSubmit.addEventListener("click", (e) => {
            e.preventDefault();

            validateHtml.classList.remove('active');
            validateHtml.innerHTML = '';
            questionElements.forEach(el => {
                el.classList.remove('empty');
                const input = el.querySelector('input, select, textarea');
                if (input) input.classList.remove('empty-field');
            });

            const inputs = document.querySelectorAll('form.questions__wrapper input[required], form.questions__wrapper select[required], form.questions__wrapper textarea[required]');

            let hasError = false;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    hasError = true;
                    input.classList.add("empty-field");
                    const questionItem = input.closest(".questions__item");
                    if (questionItem) {
                        questionItem.classList.add("empty");
                    }
                }
            });

            if (hasError) {
                validateHtml.classList.add('active');
                validateHtml.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.0002 9C11.6183 9 11.252 9.15804 10.982 9.43934C10.7119 9.72064 10.5602 10.1022 10.5602 10.5V19.5C10.5602 19.8978 10.7119 20.2794 10.982 20.5607C11.252 20.842 11.6183 21 12.0002 21C12.3821 21 12.7484 20.842 13.0184 20.5607C13.2885 20.2794 13.4402 19.8978 13.4402 19.5V10.5C13.4402 10.1022 13.2885 9.72064 13.0184 9.43934C12.7484 9.15804 12.3821 9 12.0002 9ZM12.0002 3C11.6442 3 11.2962 3.10997 11.0002 3.31599C10.7042 3.52202 10.4735 3.81486 10.3372 4.15747C10.201 4.50008 10.1653 4.87708 10.2348 5.24079C10.3042 5.60451 10.4757 5.9386 10.7274 6.20083C10.9791 6.46305 11.2999 6.64163 11.649 6.71397C11.9982 6.78632 12.3601 6.74919 12.689 6.60727C13.0179 6.46536 13.2991 6.22504 13.4968 5.91669C13.6946 5.60835 13.8002 5.24584 13.8002 4.875C13.8002 4.37772 13.6106 3.90081 13.273 3.54917C12.9354 3.19754 12.4776 3 12.0002 3Z" fill="white" />
              </svg>
              <p>Ошибка отправки. Заполните обязательные поля</p>
            `;
                validateHtml.scrollIntoView({ behavior: 'smooth' });
                return;
            }

            document.querySelector('form.questions__wrapper').submit();
        });
    }
    catch { }


    const dropAreas = document.querySelectorAll('.questions__download');

    dropAreas.forEach(dropArea => {
        const fileInput = dropArea.querySelector('input[type="file"]');
        const defaultText = dropArea.querySelector('p');
        let fileList = dropArea.querySelector('.file-list');

        if (!fileList) {
            fileList = document.createElement('div');
            fileList.className = 'file-list';
            dropArea.appendChild(fileList);
        }

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => dropArea.classList.add('highlight'), false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => dropArea.classList.remove('highlight'), false);
        });

        dropArea.addEventListener('drop', function (e) {
            preventDefaults(e);

            const dt = e.dataTransfer;
            const newFiles = dt.files;

            const dataTransfer = new DataTransfer();

            // Добавляем старые файлы
            for (let i = 0; i < fileInput.files.length; i++) {
                dataTransfer.items.add(fileInput.files[i]);
            }

            // Добавляем новые файлы
            for (let i = 0; i < newFiles.length; i++) {
                dataTransfer.items.add(newFiles[i]);
            }

            fileInput.files = dataTransfer.files;

            updateFileList(dropArea, fileInput.files);
        });

        fileInput.addEventListener('change', function () {
            updateFileList(dropArea, this.files);
        });

        function updateFileList(dropArea, files) {
            fileList.innerHTML = '';

            if (files.length > 0) {
                defaultText.style.display = 'none';

                for (let i = 0; i < files.length; i++) {
                    const fileItem = document.createElement('div');
                    fileItem.className = 'file-item';
                    fileItem.textContent = `${i + 1}. ${files[i].name} (${formatFileSize(files[i].size)})`;
                    fileList.appendChild(fileItem);
                }
            } else {
                defaultText.style.display = 'block';
            }
        }

        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }
    });




});
