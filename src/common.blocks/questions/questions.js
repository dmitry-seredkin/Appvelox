
export function addQuestionsAskListener() {
    const ask = document.querySelector('.questions__ask');
    const modal = document.querySelector('.modal');
    ask.addEventListener('click', () => {
        modal.classList.add('modal_active');
    });
}