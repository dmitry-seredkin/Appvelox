
export function addSituationNavListener() {
    const situation = document.querySelector('.js-situation');
    const navBar = situation.querySelector('.situation__nav');
    const wrap = navBar.querySelector('.situation__wrap');
    const navItems = wrap.querySelectorAll('.situation__item');
    const contentItems = situation.querySelectorAll('.situation__content');

    let index = 0;
    let canMove = false;
    let x = 0;

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

    wrap.addEventListener('mousedown', (event) => {
        canMove = true;
        x = event.clientX;
    });

    wrap.addEventListener('mousemove', (event) => {
        if (canMove) {
            const left = parseInt(wrap.style.left);

            let newLeft = left + event.clientX - x;
            newLeft = newLeft < -381 ? -380 : newLeft;
            newLeft = newLeft > 54 ? 53: newLeft;

            wrap.style.left = `${newLeft}px`;
            x = event.clientX;
        }
    });

    wrap.addEventListener('mouseup', () => {
        canMove = false;
    });

    wrap.addEventListener('touchstart', (event) => {
        canMove = true;
        x = event.touches[0].clientX;
    });

    wrap.addEventListener('touchmove', (event) => {
        if (canMove) {
            const left = parseInt(wrap.style.left);

            let newLeft = left + event.touches[0].clientX - x;
            newLeft = newLeft < -381 ? -380 : newLeft;
            newLeft = newLeft > 54 ? 53: newLeft;

            wrap.style.left = `${newLeft}px`;
            x = event.touches[0].clientX;
        }
    });

    wrap.addEventListener('touchend', () => {
        canMove = false;
    });
}