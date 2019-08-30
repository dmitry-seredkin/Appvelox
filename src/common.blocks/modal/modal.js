
export function addModalCloseButtonListener() {
    const modal = document.querySelectorAll('.modal');
    modal.forEach((elem) => {
        const closeButton = elem.querySelector('.modal__close-button');
        closeButton.addEventListener('click', () => {
            elem.classList.remove('modal_active');
        });
    });
}