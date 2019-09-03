
export function addButtonsListeners() {
    const crew = document.querySelector('.crew');
    const max = Number(crew.dataset.count) - 1;
    
    const wrap = crew.querySelector('.crew__wrap');
    const prevButton = crew.querySelector('.crew__button_prev');
    const nextButton = crew.querySelector('.crew__button_next');
    const circles = crew.querySelectorAll('.crew__circle');

    let index = 0;
    let leftCoordinate = 0;

    prevButton.addEventListener('click', () => {
        if (index > 0) {
            changeStyle(index, --index);
        }
    });

    nextButton.addEventListener('click', () => {
        if (index < max) {
            changeStyle(index, ++index);
        }
    });

    function changeStyle(oldIndex, index) {
        circles[oldIndex].classList.remove('crew__circle_active');
        prevButton.classList.toggle('crew__button_disabled', index === 0);
        nextButton.classList.toggle('crew__button_disabled', index === max);
        circles[index].classList.add('crew__circle_active');
        leftCoordinate = leftCoordinate + (oldIndex - index) * 100;
        wrap.style.left = `${leftCoordinate}%`;
    }
}