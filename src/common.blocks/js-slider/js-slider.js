
export function addSliderNavListeners() {
    const sliders = document.querySelectorAll('.js-slider');
    sliders.forEach((slider) => {
        const data = {
            list: slider.querySelector('.js-slider__list'),
            prevButton: slider.querySelector('.js-slider__button_prev'),
            nextButton: slider.querySelector('.js-slider__button_next'),
            circles: slider.querySelectorAll('.js-slider__circle'),
            leftCoordinate: 0
        };

        let index = 0;
        const maxIndex = Number(data.list.dataset.pages) - 1;
        let x = 0;
        let canSwipe = false;

        data.prevButton.addEventListener('click', () => {
            if (index > 0) {
                changeStyle(index, --index, maxIndex, data);
            }
        });

        data.nextButton.addEventListener('click', () => {
            if (index < maxIndex) {
                changeStyle(index, ++index, maxIndex, data);
            }
        });

        data.list.addEventListener('touchstart', (event) => {
            x = event.touches[0].clientX;
            canSwipe = true;
        });

        data.list.addEventListener('touchmove', (event) => {
            if (canSwipe) {
                let way = event.touches[0].clientX - x;
                if (way > 100 && index > 0) {
                    changeStyle(index, --index, maxIndex, data);
                    canSwipe = false;
                } else if (way < -100 && index < maxIndex) {
                    changeStyle(index, ++index, maxIndex, data);
                    canSwipe = false;
                }
            }
        });

        data.list.addEventListener('touchend', () => {
            canSwipe = false;
        });
    });
}

function changeStyle(oldIndex, newIndex, maxIndex, obj) {
    obj.circles[oldIndex].classList.remove('js-slider__circle_active');
    obj.prevButton.classList.toggle('js-slider__button_disabled', newIndex === 0);
    obj.nextButton.classList.toggle('js-slider__button_disabled', newIndex === maxIndex);
    obj.circles[newIndex].classList.add('js-slider__circle_active');
    obj.leftCoordinate = obj.leftCoordinate + (oldIndex - newIndex) * 100;
    obj.list.style.left = `${obj.leftCoordinate}%`;
}