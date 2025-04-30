import { open } from './accordion';

/**
 * アンカーリンクと連動してアコーディオンを展開
 */
const js_anchorLink = () => {
    const elList = document.querySelectorAll('.js_anchorLink');
    if (!elList.length) return;

    elList.forEach(el => {
        el.addEventListener('click', () => {
            const targetEl = document.getElementById(el.href.split('#')[1]);
            const trigger = targetEl.querySelector('.js_accordion_trigger');
            const target = targetEl.querySelector('.js_accordion_body');
            if (!trigger || !target) return;
            open(trigger, target);
        });
    });
}

export default js_anchorLink;