
export function addButtonsListeners() {
    let index = 0;
    let leftCoord = 0;
    const crew = document.querySelector('.crew');
    const max = Number(crew.dataset.count) - 1;
    const slider = document.querySelector('.crew__slider');
    const prevButton = slider.querySelector('.crew__button_prev');
    const wrap = slider.querySelector('.crew__wrap');
    const nextButton = slider.querySelector('.crew__button_next');
    const circles = document.querySelectorAll('.crew__circle');

    prevButton.addEventListener('click', () => {
        if (index > 0) {
            circles[index].classList.remove('crew__circle_active');
            if (--index === 0) {
                prevButton.classList.add('crew__button_disabled');
            }
            if (index !== max) {
                nextButton.classList.remove('crew__button_disabled');
            }
            leftCoord += 100;
            wrap.style.left = `${leftCoord}%`;
            circles[index].classList.add('crew__circle_active');
        }

    });

    nextButton.addEventListener('click', () => {
        if (index < max) {
            circles[index].classList.remove('crew__circle_active');
            if (++index === max) {
                nextButton.classList.add('crew__button_disabled');
            }

            if (index !== 0) {
                prevButton.classList.remove('crew__button_disabled');
            }
            leftCoord -= 100;
            wrap.style.left = `${leftCoord}%`;
            circles[index].classList.add('crew__circle_active');
        }
    });
}