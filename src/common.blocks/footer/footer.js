import fb from '../../images/social/fb.svg';
import vk from '../../images/social/vk.svg';
import ig from '../../images/social/ig.svg';


function iconHover() {
    let src = this.src;
    this.src = src.substr(0, src.length - 9) + '.svg';
}

function iconUnHover() {
    let src = this.src;
    this.src = src.substr(0, src.length - 4) + '-grey.svg';
}

export function addSocialListener() {
    const socialIcons = document.querySelectorAll('.js-social-icon');
    socialIcons.forEach((elem) => {
        elem.addEventListener('mouseover', iconHover);
        elem.addEventListener('mouseout', iconUnHover);
    });
}
