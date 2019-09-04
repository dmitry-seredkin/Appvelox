
export function addQuestionListListener() {
    const questionsList = document.querySelectorAll('.questions-list__item');
    questionsList.forEach((elem) => {
        const answer = elem.querySelector('.questions-list__answer');
        const arrow = elem.querySelector('.questions-list__arrow');
        elem.querySelector('.questions-list__question').addEventListener('click', () => {
            answer.classList.toggle('questions-list__answer_active');
            arrow.classList.toggle('questions-list__arrow_active');
        });
    });
}