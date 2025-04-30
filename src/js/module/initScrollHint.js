import ScrollHint from 'scroll-hint';
import 'scroll-hint/css/scroll-hint.css';

/**
 * スクロールヒント
*/
const initScrollHint = () => {
    new ScrollHint('.js_scrollable', {
        i18n: {
            scrollable: 'スクロールできます'
        }
    });
}

export default initScrollHint;