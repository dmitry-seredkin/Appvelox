import fb from '../../images/logo/fb.svg';
import vk from '../../images/logo/vk.svg';
import ig from '../../images/logo/ig.svg';


function iconHover() {
    let src = this.src;
    this.src = src.substr(0, src.length - 9) + '.svg';
}

function iconUnHover() {
    let src = this.src;
    this.src = src.substr(0, src.length - 4) + '-grey.svg';
}

export function listenSocial() {
    const socialIcons = document.querySelectorAll('.footer__icon');
    socialIcons.forEach((elem) => {
        elem.addEventListener('mouseover', iconHover);
        elem.addEventListener('mouseout', iconUnHover);
    });
}
