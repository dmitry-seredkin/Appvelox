
export function addSituationClickListener() {
    let index = 0;
    const situation = document.querySelector('.situation');
    const navBar = situation.querySelector('.situation__nav');
    const navItems = navBar.querySelectorAll('.situation__item');
    const contentItems = situation.querySelectorAll('.situation__content');
    navBar.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'LI') {
            navItems[index].classList.remove('situation__item_active');
            contentItems[index].classList.remove('situation__content_visible');
            index = target.dataset.index;
            target.classList.add('situation__item_active');
            contentItems[index].classList.add('situation__content_visible');
        }
    });
}